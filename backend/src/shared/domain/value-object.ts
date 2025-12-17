/**
 * Value Object - Đối tượng giá trị bất biến không có định danh
 * 
 * Các khái niệm chính:
 * - Không có định danh (id), so sánh dựa trên thuộc tính
 * - Immutable (không có setters)
 * - Có thể chia sẻ giữa các entities
 * 
 * Ví dụ trong e-commerce:
 * - Money (số tiền, đơn vị tiền tệ)
 * - Address (đường, thành phố, quốc gia)
 * - Email, PhoneNumber
 * - ProductSlug, SKUCode
 * 
 * @abstract
 */
export abstract class ValueObject<T> {
  // TODO: Implement value object bao gồm:
  // - Protected readonly props
  // - Constructor freeze props để đảm bảo immutable
  // - Phương thức equals() cho deep comparison
  // - Validation trong constructor
}
