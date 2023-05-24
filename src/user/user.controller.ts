import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as fs from 'fs';
import * as qrcode from 'qrcode';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    async function generateAndSaveQrCode(id: any, userData: any) {
      const qrCodeData = JSON.stringify({ id, ...userData });
      const qrCodeOptions = {
        errorCorrectioinLeve: 'H',
        type: 'image/png',
        width: 300,
      };
      try {
        const qrCode = await qrcode.toFile(
          'qrcode.png',
          qrCodeData,
          qrCodeOptions,
        );
        console.log('QR code generated and saved successfully');
      } catch (error) {
        console.error('Failed to generate and save QR code:', error);
      }
    }
    
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
