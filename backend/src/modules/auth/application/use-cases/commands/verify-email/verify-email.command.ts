/**
 * Verify Email Command - Lệnh xác thực email
 * 
 * Use case: User xác thực email bằng mã OTP
 * 
 * Quy trình:
 * 1. Tìm mã xác thực theo email và type=REGISTER
 * 2. Kiểm tra mã khớp và chưa hết hạn
 * 3. Cập nhật trạng thái user thành ACTIVE
 * 4. Xóa mã xác thực
 * 5. Phát ra UserEmailVerified event
 */
export class VerifyEmailCommand {
  // TODO: Định nghĩa command
  // Thuộc tính: email, code
}
