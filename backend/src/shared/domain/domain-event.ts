/**
 * Domain Event - Sự kiện đã xảy ra trong domain
 * 
 * Các khái niệm chính:
 * - Đặt tên theo thì quá khứ (ProductCreated, OrderPlaced)
 * - Immutable
 * - Chứa dữ liệu cần thiết cho event handlers
 * 
 * Sử dụng:
 * - Được phát ra bởi aggregate roots
 * - Được xử lý bởi event handlers ở application layer
 * - Có thể kích hoạt side effects (gửi email, cập nhật search index)
 * 
 * @interface
 */
export interface IDomainEvent {
  // TODO: Định nghĩa domain event interface bao gồm:
  // - occurredOn: Date (thời điểm xảy ra)
  // - eventName: string (tên event)
  // - aggregateId: string | number (id của aggregate)
}

/**
 * Triển khai cơ sở cho domain event
 */
export abstract class DomainEvent implements IDomainEvent {
  // TODO: Implement base domain event
}
