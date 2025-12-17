/**
 * Domain Exceptions - Ngoại lệ khi vi phạm quy tắc nghiệp vụ
 * 
 * Các khái niệm chính:
 * - Domain exceptions biểu thị vi phạm quy tắc nghiệp vụ
 * - Khác với lỗi kỹ thuật (DatabaseError, NetworkError)
 * - Nên được bắt và xử lý ở application/presentation layer
 * 
 * Ví dụ:
 * - InsufficientStockError (Không đủ tồn kho)
 * - ProductAlreadyPublishedError (Sản phẩm đã được xuất bản)
 * - InvalidEmailFormatError (Định dạng email không hợp lệ)
 */

/**
 * Domain Exception cơ sở
 */
export abstract class DomainException extends Error {
  // TODO: Implement base domain exception bao gồm:
  // - constructor(message: string)
  // - Mã lỗi tùy chọn (error code)
  // - Metadata tùy chọn
}

/**
 * Not Found Exception - Không tìm thấy entity trong repository
 */
export class NotFoundException extends DomainException {
  // TODO: Implement
}

/**
 * Validation Exception - Input/state không hợp lệ
 */
export class ValidationException extends DomainException {
  // TODO: Implement
}

/**
 * Conflict Exception - Xung đột quy tắc nghiệp vụ
 */
export class ConflictException extends DomainException {
  // TODO: Implement
}
