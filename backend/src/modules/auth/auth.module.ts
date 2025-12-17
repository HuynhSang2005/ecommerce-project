import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

// Presentation
import { AuthController } from './presentation/auth.controller';

// Application - Command Handlers
// import { RegisterHandler } from './application/use-cases/commands/register';
// import { LoginHandler } from './application/use-cases/commands/login';
// import { VerifyEmailHandler } from './application/use-cases/commands/verify-email';
// import { RefreshTokenHandler } from './application/use-cases/commands/refresh-token';
// import { ForgotPasswordHandler } from './application/use-cases/commands/forgot-password';
// import { ResetPasswordHandler } from './application/use-cases/commands/reset-password';

// Application - Query Handlers
// import { GetUserByIdHandler } from './application/use-cases/queries/get-user-by-id';
// import { GetCurrentUserHandler } from './application/use-cases/queries/get-current-user';

// Domain - Repository Tokens
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { REFRESH_TOKEN_REPOSITORY } from './domain/repositories/refresh-token.repository';
import { VERIFICATION_CODE_REPOSITORY } from './domain/repositories/verification-code.repository';

// Infrastructure - Repository Implementations
import { PrismaUserRepository } from './infrastructure/persistence/prisma-user.repository';
import { PrismaRefreshTokenRepository } from './infrastructure/persistence/prisma-refresh-token.repository';
import { PrismaVerificationCodeRepository } from './infrastructure/persistence/prisma-verification-code.repository';

// Infrastructure - Mappers
import { UserMapper } from './infrastructure/persistence/mappers/user.mapper';
import { RefreshTokenMapper } from './infrastructure/persistence/mappers/refresh-token.mapper';
import { VerificationCodeMapper } from './infrastructure/persistence/mappers/verification-code.mapper';

// Infrastructure - Service Adapters
import { EMAIL_SERVICE } from './application/ports/email.service.interface';
import { TOKEN_SERVICE } from './application/ports/token.service.interface';
import { HASH_SERVICE } from './application/ports/hash.service.interface';
import { JwtTokenService } from './infrastructure/adapters/jwt-token.service';
import { BcryptHashService } from './infrastructure/adapters/bcrypt-hash.service';
import { NodemailerEmailService } from './infrastructure/adapters/nodemailer-email.service';

// Infrastructure - Strategies
import { JwtStrategy } from './infrastructure/strategies/jwt.strategy';
import { GoogleStrategy } from './infrastructure/strategies/google.strategy';

/**
 * Auth Module - Triển khai Clean Architecture
 * 
 * Phụ thuộc giữa các tầng (tuân theo Dependency Rule):
 * Presentation → Application → Domain ← Infrastructure
 * 
 * Cấu trúc Module:
 * 1. Tầng Domain (entities, value objects, repository interfaces, events)
 * 2. Tầng Application (use cases - commands/queries, ports)
 * 3. Tầng Infrastructure (repository implementations, adapters, strategies)
 * 4. Tầng Presentation (controllers, DTOs, mappers)
 * 
 * Dependency Injection:
 * - Repositories: Interface (domain) → Implementation (infrastructure)
 * - Services: Interface (application ports) → Implementation (infrastructure adapters)
 * - Handlers: Được đăng ký tự động bởi CQRS module
 * 
 * TODO: Bỏ comment các handlers khi triển khai
 */
@Module({
  imports: [
    CqrsModule, // Cho mô hình CQRS (CommandBus, QueryBus, EventBus)
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key', // TODO: Chuyển sang config
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    // ============= Repositories =============
    // Liên kết (Bind) domain interfaces với infrastructure implementations
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    {
      provide: REFRESH_TOKEN_REPOSITORY,
      useClass: PrismaRefreshTokenRepository,
    },
    {
      provide: VERIFICATION_CODE_REPOSITORY,
      useClass: PrismaVerificationCodeRepository,
    },

    // ============= Mappers =============
    UserMapper,
    RefreshTokenMapper,
    VerificationCodeMapper,

    // ============= Service Adapters =============
    // Bind application ports to infrastructure adapters
    {
      provide: TOKEN_SERVICE,
      useClass: JwtTokenService,
    },
    {
      provide: HASH_SERVICE,
      useClass: BcryptHashService,
    },
    {
      provide: EMAIL_SERVICE,
      useClass: NodemailerEmailService,
    },

    // ============= Passport Strategies =============
    JwtStrategy,
    // GoogleStrategy, // TODO: Uncomment when implementing Google OAuth

    // ============= Command Handlers =============
    // TODO: Uncomment when implementing
    // RegisterHandler,
    // LoginHandler,
    // VerifyEmailHandler,
    // RefreshTokenHandler,
    // ForgotPasswordHandler,
    // ResetPasswordHandler,

    // ============= Query Handlers =============
    // TODO: Uncomment when implementing
    // GetUserByIdHandler,
    // GetCurrentUserHandler,

    // ============= Event Handlers =============
    // TODO: Add event handlers for domain events
    // UserRegisteredEventHandler (sends welcome email)
    // UserEmailVerifiedEventHandler
    // UserPasswordChangedEventHandler (revokes tokens)
  ],
  exports: [
    // Export services that other modules might need
    USER_REPOSITORY,
    TOKEN_SERVICE,
  ],
})
export class AuthModule {}
