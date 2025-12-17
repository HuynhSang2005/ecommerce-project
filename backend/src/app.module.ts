import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
// import { AuthModule } from './modules/auth/auth.module';
// TODO: Import các feature modules khác

/**
 * App Module - Module gốc của ứng dụng
 * 
 * Các lớp kiến trúc (luồng dependency):
 * 1. Shared (domain base classes, application interfaces)
 * 2. Infrastructure (database, external services)
 * 3. Feature Modules (auth, product, order, etc.)
 * 
 * Mỗi feature module tuân theo Clean Architecture:
 * - Domain (entities, value objects, repository interfaces)
 * - Application (use cases, DTOs)
 * - Infrastructure (repository implementations, adapters)
 * - Presentation (controllers, request/response DTOs)
 */
@Module({
  imports: [
    // Global modules
    SharedModule,
    InfrastructureModule,
    
    // Feature modules
    // AuthModule,
    // ProductModule,
    // OrderModule,
    // PaymentModule,
    // TODO: Thêm các modules khác
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
