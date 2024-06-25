import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/dto.auth';
import { JwtService } from '@nestjs/jwt';
const login = 'admin';
const senha = '123456';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  Auth(authDto: AuthDto) {
    console.log(authDto);
    if (login !== authDto.login || senha !== authDto.senha) {
      throw new UnauthorizedException('Senha ou usuario errado');
    }

    return this.jwtService.sign(
      {},
      { expiresIn: '7d', secret: process.env.SECRET },
    );
  }
}
