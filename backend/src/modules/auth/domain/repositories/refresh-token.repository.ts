/**
 * RefreshToken Repository Interface
 */
export interface IRefreshTokenRepository {
  // TODO: Định nghĩa các phương thức
  // findByToken(token: string): Promise<RefreshToken | null>
  // save(refreshToken: RefreshToken): Promise<void>
  // deleteByToken(token: string): Promise<void>
  // deleteExpiredTokens(): Promise<void> - Xóa các token hết hạn
}

export const REFRESH_TOKEN_REPOSITORY = Symbol('REFRESH_TOKEN_REPOSITORY');
