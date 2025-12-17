/**
 * Refresh Token Command - Lệnh làm mới token
 * 
 * Use case: Lấy access token mới bằng refresh token
 * 
 * Quy trình:
 * 1. Kiểm tra refresh token tồn tại và chưa hết hạn
 * 2. Lấy thông tin user từ token
 * 3. Kiểm tra user vẫn active
 * 4. Tạo access token mới
 * 5. (Tùy chọn) Rotate refresh token để bảo mật
 */
export class RefreshTokenCommand {
  // TODO: Định nghĩa command
  // Thuộc tính: refreshToken
}
