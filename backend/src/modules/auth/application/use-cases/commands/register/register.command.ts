/**
 * Register Command - Lệnh đăng ký user
 * 
 * Use case: Đăng ký user mới
 * 
 * Quy trình:
 * 1. Validate input (định dạng email, độ mạnh password)
 * 2. Kiểm tra email đã tồn tại chưa
 * 3. Hash password
 * 4. Tạo User entity
 * 5. Lưu vào repository
 * 6. Tạo mã xác thực
 * 7. Phát ra UserRegistered event (kích hoạt gửi email)
 * 8. Trả về userId
 */
export class RegisterCommand {
  // TODO: Định nghĩa thuộc tính command
  // constructor(
  //   public readonly email: string,
  //   public readonly password: string,
  //   public readonly name: string,
  //   public readonly phoneNumber?: string,
  // ) {}
}
