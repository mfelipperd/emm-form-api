import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { EmailService } from '../user/email.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { FormService } from './form.service';

@Controller('form')
export default class FormController {
  constructor(
    private readonly FormService: FormService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  @SetMetadata('publicRoute', true)
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserDto | string> {
    console.log(createUserDto);
    const response = await this.FormService.create(createUserDto);
    const { nome, email, id } = response;
    await this.emailService.sendConfirmationEmail(nome, email, id);
    return 'ok';
  }
}
