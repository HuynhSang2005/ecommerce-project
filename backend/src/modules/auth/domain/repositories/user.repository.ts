/**
 * User Repository Interface
 * 
 * Tuân theo Repository Pattern:
 * - Interface được định nghĩa trong domain layer
 * - Triển khai trong infrastructure layer
 * - Làm việc với domain entities, không phải Prisma models
 * 
 * Các phương thức nên phản ánh thao tác domain, không phải CRUD
 */
export interface IUserRepository {
  // TODO: Định nghĩa các phương thức repository
  // findById(id: number): Promise<User | null>
  // findByEmail(email: Email): Promise<User | null>
  // findByGoogleId(googleId: string): Promise<User | null>
  // save(user: User): Promise<void>
  // exists(email: Email): Promise<boolean>
}

/**
 * DI Token cho User Repository
 */
export const USER_REPOSITORY = Symbol('USER_REPOSITORY');
