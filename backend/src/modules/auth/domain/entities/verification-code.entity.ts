/**
 * VerificationCode Entity - Mã OTP/xác thực
 * 
 * Các loại:
 * - REGISTER: Xác thực email khi đăng ký
 * - FORGOT_PASSWORD: Đặt lại mật khẩu
 * - LOGIN: Mã đăng nhập 2FA
 * - DISABLE_2FA: Tắt xác thực hai yếu tố
 * 
 * Các quy tắc nghiệp vụ:
 * - Mã hết hạn sau khoảng thời gian nhất định (5-10 phút)
 * - Một mã active duy nhất cho mỗi email và mỗi loại
 * - Mã chỉ được sử dụng một lần
 */
export class VerificationCode {
  // TODO: Triển khai VerificationCode entity
  // Thuộc tính: id, email, code, type, expiresAt
  // Phương thức: isExpired(), isValid(code)
}
