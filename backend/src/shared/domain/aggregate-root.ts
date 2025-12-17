/**
 * Aggregate Root - Entity chính trong DDD bounded context
 * 
 * Các khái niệm chính:
 * - Quản lý domain events
 * - Đảm bảo ranh giới tính nhất quán (consistency boundaries)
 * - Chỉ aggregate root mới có thể được truy cập trực tiếp từ bên ngoài
 * 
 * Ví dụ sử dụng:
 * - Product là aggregate root
 * - SKU là entity trong Product aggregate
 * - Truy cập SKU phải thông qua Product
 * 
 * @abstract
 */
export abstract class AggregateRoot {
  // TODO: Implement aggregate root bao gồm:
  // - Collection chứa domain events
  // - Phương thức addDomainEvent() để thêm event
  // - Phương thức clearEvents() để xóa events
  // - Phương thức getUncommittedEvents() để lấy events chưa publish
}
