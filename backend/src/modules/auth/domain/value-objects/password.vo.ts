/**
 * Password Value Object
 * 
 * Các quy tắc nghiệp vụ:
 * - Độ dài tối thiểu (8 ký tự)
 * - Phải chứa: chữ hoa, chữ thường, số, ký tự đặc biệt
 * - Lưu dưới dạng hash, không bao giờ lưu plain text
 * - Không thể so sánh trực tiếp (dùng phương thức compareHash)
 */
export class Password {
  // TODO: Triển khai Password value object
  // Private hashed password
  // Static create() cho plain password (tự động hash)
  // Static fromHash() để load từ DB
  // Phương thức compare(plainPassword)
  // Phương thức getHash()
}
