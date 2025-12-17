/**
 * Reset Password Command - Lệnh đặt lại mật khẩu
 * 
 * Use case: User đặt lại mật khẩu bằng mã xác thực
 * 
 * Quy trình:
 * 1. Kiểm tra mã xác thực
 * 2. Cập nhật password user (đã hash)
 * 3. Thu hồi tất cả refresh tokens
 * 4. Phát ra UserPasswordChanged event
 */
export class ResetPasswordCommand {
  // TODO: Định nghĩa command
  // Thuộc tính: email, code, newPassword
}
