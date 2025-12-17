/**
 * Port của Email Service
 * 
 * Interface cho dịch vụ email bên ngoài
 * Triển khai (Implementation) sẽ ở tầng infrastructure
 * 
 * Các triển khai có thể:
 * - NodemailerEmailService
 * - SendGridEmailService
 * - AWSEmailService
 */
export interface IEmailService {
  // TODO: Định nghĩa các phương thức
  // sendVerificationEmail(email: string, code: string): Promise<void>
  // sendPasswordResetEmail(email: string, code: string): Promise<void>
  // sendWelcomeEmail(email: string, name: string): Promise<void>
}

export const EMAIL_SERVICE = Symbol('EMAIL_SERVICE');
