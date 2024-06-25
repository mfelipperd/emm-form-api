import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import AuthController from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [AuthGuard, AuthService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
