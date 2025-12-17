/**
 * Repository Interface - Interface cơ sở cho tất cả repositories
 * 
 * Các khái niệm chính:
 * - Định nghĩa trong domain layer (interface)
 * - Triển khai trong infrastructure layer
 * - Truu tượng hóa việc lưu trữ dữ liệu
 * - Làm việc với domain entities, không phải database models
 * 
 * Các phương thức phổ biến:
 * - findById, findByXXX (tìm kiếm)
 * - save (tạo mới hoặc cập nhật)
 * - delete (xóa)
 * - Các phương thức query trả về domain entities
 */
export interface IRepository<T, ID = number> {
  // TODO: Định nghĩa các phương thức cơ bản nếu cần
  // findById(id: ID): Promise<T | null>;
  // save(entity: T): Promise<void>;
  // delete(id: ID): Promise<void>;
}
