/**
 * Port của Token Service
 * 
 * Interface cho việc sinh/xác thực JWT token
 * Triển khai (Implementation) ở tầng infrastructure
 */
export interface ITokenService {
  // TODO: Định nghĩa các phương thức
  // generateAccessToken(userId: number, email: string): string
  // generateRefreshToken(): string
  // verifyAccessToken(token: string): { userId: number; email: string }
}

export const TOKEN_SERVICE = Symbol('TOKEN_SERVICE');
