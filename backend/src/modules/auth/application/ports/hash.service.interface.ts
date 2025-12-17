/**
 * Port của Hash Service
 * 
 * Interface cho việc mã hóa mật khẩu (password hashing)
 * Triển khai (Implementation): bcrypt, argon2, v.v.
 */
export interface IHashService {
  // TODO: Định nghĩa các phương thức
  // hash(password: string): Promise<string>
  // compare(password: string, hash: string): Promise<boolean>
}

export const HASH_SERVICE = Symbol('HASH_SERVICE');
