import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/shared/services/prisma.service';

describe('Prisma Integration (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  // Unique data for this test run
  const timestamp = Date.now();
  const roleName = `test_role_${timestamp}`;
  const userEmail = `test_user_${timestamp}@example.com`;
  const userPassword = 'password123';
  let createdRoleId: number;
  let createdUserId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = app.get(PrismaService);
    await app.init();
  }, 30000); // Tăng timeout cho setup

  afterAll(async () => {
    // Cleanup reference data
    try {
      if (createdRoleId) {
        // Deleting the role might fail if user deletion failed (foreign key constraint), 
        // but verifyDeletedUser test should handle user deletion first.
        // We attempt to clean up everything we created.
        await prismaService.role.delete({ where: { id: createdRoleId } }).catch(() => {});
      }
    } catch (e) {
      console.error('Cleanup failed', e);
    }
    await app.close();
  });

  it('1. Should connect to the database', async () => {
    expect(prismaService).toBeDefined();
    // Test a basic query
    const count = await prismaService.user.count();
    expect(typeof count).toBe('number');
    console.log(`Current user count: ${count}`);
  });

  it('2. Should create a Role (Prerequisite)', async () => {
    const role = await prismaService.role.create({
      data: {
        name: roleName,
        description: 'Integration Test Role',
      },
    });
    createdRoleId = role.id;
    expect(role).toBeDefined();
    expect(role.name).toBe(roleName);
  });

  it('3. Should create a User linked to the Role', async () => {
    const user = await prismaService.user.create({
      data: {
        email: userEmail,
        name: 'Test Integrator',
        password: userPassword,
        roleId: createdRoleId,
      },
    });
    createdUserId = user.id;
    expect(user).toBeDefined();
    expect(user.email).toBe(userEmail);
    expect(user.roleId).toBe(createdRoleId);
  });

  it('4. Should find the created User', async () => {
    const user = await prismaService.user.findUnique({
      where: { id: createdUserId },
      include: { role: true },
    });
    expect(user).toBeDefined();
    expect(user?.email).toBe(userEmail);
    expect(user?.role?.name).toBe(roleName);
  });

  it('5. Should update the User', async () => {
    const newName = 'Updated Test Integrator';
    const updatedUser = await prismaService.user.update({
      where: { id: createdUserId },
      data: { name: newName },
    });
    expect(updatedUser.name).toBe(newName);
  });

  it('6. Should create a Device for the User', async () => {
    const device = await prismaService.device.create({
      data: {
        userId: createdUserId,
        userAgent: 'Jest Test Runner',
        ip: '127.0.0.1',
      },
    });
    expect(device).toBeDefined();
    expect(device.userId).toBe(createdUserId);
  });

  it('7. Should delete the User and cascade delete Device', async () => {
    // Check device count before delete
    const deviceCountBefore = await prismaService.device.count({
      where: { userId: createdUserId },
    });
    expect(deviceCountBefore).toBeGreaterThan(0);

    // Delete User
    const deletedUser = await prismaService.user.delete({
      where: { id: createdUserId },
    });
    expect(deletedUser.id).toBe(createdUserId);

    // Verify User is gone
    const userCheck = await prismaService.user.findUnique({
      where: { id: createdUserId },
    });
    expect(userCheck).toBeNull();

    // Verify Device is gone (Cascade)
    const deviceCheck = await prismaService.device.count({
      where: { userId: createdUserId },
    });
    expect(deviceCheck).toBe(0);
  });
});
