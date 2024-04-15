import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FormService } from './form.service';

@Controller('form')
export default class FormController {
  constructor(
    private readonly FormService: FormService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserDto | string> {
    const response = await this.FormService.create(createUserDto);
    console.log(createUserDto);
    const { nome, email, id } = response;
    await this.emailService.sendConfirmationEmail(nome, email, id);
    return 'ok';
  }
}
