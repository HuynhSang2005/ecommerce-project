/**
 * Base Entity - Lớp cơ sở cho tất cả domain entities theo nguyên tắc DDD
 * 
 * Các khái niệm chính:
 * - Entity có định danh (id) duy nhất
 * - So sánh bằng id, không phải thuộc tính
 * - Id không thể thay đổi sau khi tạo
 * 
 * @abstract
 */
export abstract class BaseEntity {
  // TODO: Implement base entity bao gồm:
  // - Protected readonly _id
  // - Timestamp: createdAt, updatedAt
  // - Phương thức equals() để so sánh entities
  // - Các abstract methods nếu cần
}
