import { Global, Module } from '@nestjs/common';
import { PrismaService } from './database/prisma/prisma.service';

/**
 * Infrastructure Module - Module toàn cục cho các dịch vụ hạ tầng
 * 
 * Các khái niệm chính:
 * - @Global() làm cho module này khả dụng ở mọi nơi
 * - Chứa các hạ tầng kỹ thuật (database, cache, storage)
 * - KHÔNG nên chứa business logic
 * 
 * Các services cung cấp:
 * - PrismaService: Truy cập database
 * - RedisService: Caching (chưa triển khai)
 * - StorageService: Lưu trữ file (chưa triển khai)
 * - LoggerService: Ghi log (chưa triển khai)
 */
@Global()
@Module({
  providers: [
    PrismaService,
    // TODO: Thêm các infrastructure services khác
    // RedisService,
    // StorageService,
    // LoggerService,
  ],
  exports: [
    PrismaService,
    // TODO: Export các services khác
  ],
})
export class InfrastructureModule {}
