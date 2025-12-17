/**
 * User Entity - Aggregate Root cho User bounded context
 * 
 * Các quy tắc nghiệp vụ cần triển khai:
 * - Email phải duy nhất và có định dạng hợp lệ
 * - Password phải được hash (không bao giờ lưu plain text)
 * - User có thể có nhiều địa chỉ, nhưng chỉ một địa chỉ mặc định
 * - User có thể có nhiều roles (RBAC)
 * - 2FA có thể bật/tắt
 * - Trạng thái user: ACTIVE, INACTIVE, BLOCKED
 * 
 * Các mối quan hệ chính:
 * - User -> Role (many-to-one)
 * - User -> UserAddress (one-to-many)
 * - User -> Device (one-to-many) cho quản lý session
 * - User -> RefreshToken (one-to-many)
 * 
 * Các domain events cần phát ra:
 * - UserRegistered (Đăng ký user)
 * - UserEmailVerified (Xác thực email)
 * - UserPasswordChanged (Thay đổi password)
 * - TwoFactorEnabled/Disabled (Bật/tắt 2FA)
 * - UserBlocked/Unblocked (Chặn/mở chặn user)
 */
export class User {
  // TODO: Triển khai User aggregate root
  // Thuộc tính: id, email, name, password, phoneNumber, avatar
  // Phương thức quản lý role
  // Phương thức 2FA
  // Phương thức quản lý trạng thái
  // Domain events
}
