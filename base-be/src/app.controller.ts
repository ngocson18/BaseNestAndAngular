import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req):Promise<any> {
    return req.user;
  }
}
