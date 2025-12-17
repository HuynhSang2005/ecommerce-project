/**
 * JWT Strategy cho Passport
 * 
 * Xác thực JWT access token và gắn user vào request
 * 
 * Cách sử dụng:
 * - Được sử dụng bởi JwtAuthGuard
 * - Trích xuất token từ Authorization header
 * - Xác thực chữ ký token
 * - Tải thông tin user từ database
 */
export class JwtStrategy {
  // TODO: Triển khai strategy
  // Kế thừa (Extend) PassportStrategy(Strategy, 'jwt')
  // Triển khai phương thức validate()
}
