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
import { EmailService } from './email.service';

@Controller('user')
export default class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserDto | string> {
    const response = await this.userService.create(createUserDto);
    console.log(createUserDto);
    const { nome, email, id } = response;
    await this.emailService.sendConfirmationEmail(nome, email, id);
    return 'ok';
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
