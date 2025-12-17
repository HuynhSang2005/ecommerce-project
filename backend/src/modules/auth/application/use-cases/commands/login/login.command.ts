/**
 * Login Command - Lệnh đăng nhập
 * 
 * Use case: User đăng nhập bằng email/password
 * 
 * Quy trình:
 * 1. Tìm user theo email
 * 2. Xác thực password
 * 3. Kiểm tra trạng thái user (phải là ACTIVE)
 * 4. Kiểm tra 2FA có bật hay không
 * 5. Tạo access token & refresh token
 * 6. Theo dõi device
 * 7. Trả về tokens
 */
export class LoginCommand {
  // TODO: Định nghĩa command
  // Thuộc tính: email, password, userAgent, ip
}
