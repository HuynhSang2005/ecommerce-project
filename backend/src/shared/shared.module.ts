import { Global, Module } from '@nestjs/common';

/**
 * Shared Module - Contains shared utilities and cross-cutting concerns
 * 
 * Key concepts:
 * - @Global() makes decorators, guards, filters available everywhere
 * - Does NOT contain business logic
 * - Does NOT contain infrastructure services (moved to InfrastructureModule)
 * 
 * Contains:
 * - Custom decorators (@CurrentUser, @Public)
 * - Exception filters (DomainExceptionFilter)
 * - Guards (JwtAuthGuard, RolesGuard)
 * - Interceptors (LoggingInterceptor, TransformInterceptor)
 * - Pipes (ValidationPipe)
 */
@Global()
@Module({
  providers: [
    // TODO: Thêm các shared providers
    // Custom decorators, guards, filters, interceptors
  ],
  exports: [
    // TODO: Export các shared providers
  ],
})
export class SharedModule {}