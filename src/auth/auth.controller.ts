import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/dto.auth';
@Controller('auth')
export default class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post()
  @SetMetadata('publicRoute', true)
  async create(@Body() authDto: AuthDto): Promise<string> {
    const response = this.AuthService.Auth(authDto);
    return response;
  }
}
