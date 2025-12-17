import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

/**
 * Auth Controller - Các REST API endpoints cho xác thực
 * 
 * Tuân theo mô hình CQRS:
 * - POST endpoints -> CommandBus (thay đổi trạng thái)
 * - GET endpoints -> QueryBus (chỉ đọc)
 * 
 * Endpoints:
 * - POST /auth/register - Đăng ký người dùng
 * - POST /auth/login - Đăng nhập người dùng
 * - POST /auth/verify-email - Xác thực email
 * - POST /auth/refresh-token - Làm mới access token
 * - POST /auth/forgot-password - Yêu cầu đặt lại mật khẩu
 * - POST /auth/reset-password - Đặt lại mật khẩu với mã code
 * - GET /auth/me - Lấy thông tin user hiện tại (được bảo vệ)
 * - POST /auth/logout - Đăng xuất user
 * 
 * TODO: Thêm các endpoints khác
 * - POST /auth/google - Đăng nhập Google OAuth
 * - POST /auth/enable-2fa - Bật 2FA
 * - POST /auth/verify-2fa - Xác thực mã 2FA
 * - POST /auth/logout-all-devices - Đăng xuất khỏi tất cả thiết bị
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  // TODO: Triển khai các endpoints
  // @Post('register')
  // async register(@Body() dto: RegisterRequestDto) {
  //   const command = new RegisterCommand(...);
  //   const userId = await this.commandBus.execute(command);
  //   return { id: userId };
  // }
  
  // @Post('login')
  // async login(@Body() dto: LoginRequestDto, @Req() req) {
  //   const command = new LoginCommand(..., req.headers['user-agent'], req.ip);
  //   return this.commandBus.execute(command);
  // }
  
  // @Post('verify-email')
  // async verifyEmail(@Body() dto: VerifyEmailRequestDto) {
  //   const command = new VerifyEmailCommand(...);
  //   await this.commandBus.execute(command);
  //   return { message: 'Xác thực email thành công' };
  // }
  
  // @Post('refresh-token')
  // async refreshToken(@Body() dto: RefreshTokenRequestDto) {
  //   const command = new RefreshTokenCommand(...);
  //   return this.commandBus.execute(command);
  // }
  
  // @Post('forgot-password')
  // async forgotPassword(@Body() dto: ForgotPasswordRequestDto) {
  //   const command = new ForgotPasswordCommand(...);
  //   await this.commandBus.execute(command);
  //   return { message: 'Đã gửi email đặt lại mật khẩu' };
  // }
  
  // @Post('reset-password')
  // async resetPassword(@Body() dto: ResetPasswordRequestDto) {
  //   const command = new ResetPasswordCommand(...);
  //   await this.commandBus.execute(command);
  //   return { message: 'Đặt lại mật khẩu thành công' };
  // }
  
  // @UseGuards(JwtAuthGuard)
  // @Get('me')
  // async getCurrentUser(@CurrentUser() userId: number) {
  //   const query = new GetCurrentUserQuery(userId);
  //   return this.queryBus.execute(query);
  // }
}
