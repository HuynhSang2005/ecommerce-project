/**
 * Google OAuth Strategy
 * 
 * Xử lý đăng nhập Google OAuth
 * 
 * Quy trình (Flow):
 * 1. Chuyển hướng đến trang đăng nhập Google
 * 2. Google chuyển hướng lại với mã xác thực (authorization code)
 * 3. Đổi mã lấy thông tin user
 * 4. Tạo hoặc tìm user theo googleId
 * 5. Sinh JWT tokens
 */
export class GoogleStrategy {
  // TODO: Triển khai strategy
  // Kế thừa (Extend) PassportStrategy(Strategy, 'google')
}
