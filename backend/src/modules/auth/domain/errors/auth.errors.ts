/**
 * Auth Domain Exceptions - Các ngoại lệ trong domain Auth
 */

/**
 * User Not Found - Không tìm thấy user với id/email cho trước
 */
export class UserNotFoundError extends Error {
  // TODO: Triển khai
}

/**
 * Email Already Exists - Email đã được đăng ký
 */
export class EmailAlreadyExistsError extends Error {
  // TODO: Triển khai
}

/**
 * Invalid Credentials - Email/password sai
 */
export class InvalidCredentialsError extends Error {
  // TODO: Triển khai
}

/**
 * Invalid Verification Code - Mã xác thực sai hoặc hết hạn
 */
export class InvalidVerificationCodeError extends Error {
  // TODO: Triển khai
}

/**
 * User Not Active - Tài khoản user bị chặn hoặc không hoạt động
 */
export class UserNotActiveError extends Error {
  // TODO: Triển khai
}

/**
 * Invalid Refresh Token - Token không hợp lệ hoặc hết hạn
 */
export class InvalidRefreshTokenError extends Error {
  // TODO: Triển khai
}
