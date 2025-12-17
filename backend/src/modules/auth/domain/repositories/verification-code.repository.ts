/**
 * VerificationCode Repository Interface
 */
export interface IVerificationCodeRepository {
  // TODO: Định nghĩa các phương thức
  // findByEmailAndType(email: string, type: VerificationCodeType): Promise<VerificationCode | null>
  // save(code: VerificationCode): Promise<void>
  // delete(id: number): Promise<void>
  // deleteExpiredCodes(): Promise<void> - Xóa các mã hết hạn
}

export const VERIFICATION_CODE_REPOSITORY = Symbol('VERIFICATION_CODE_REPOSITORY');
