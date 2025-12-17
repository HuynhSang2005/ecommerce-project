/**
 * RefreshToken Entity - Quản lý JWT refresh token
 * 
 * Các quy tắc nghiệp vụ:
 * - Mỗi token gắn với một device cụ thể
 * - Token có ngày hết hạn
 * - Token có thể bị thu hồi (revoke)
 * - Một device có thể có nhiều tokens (nên dọn dẹp tokens cũ)
 */
export class RefreshToken {
  // TODO: Triển khai RefreshToken entity
  // Thuộc tính: token, userId, deviceId, expiresAt
  // Phương thức: isExpired(), revoke()
}
