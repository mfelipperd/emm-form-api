import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import FormController from './form.controller';
import { FormService } from './form.service';
import { EmailService } from 'src/user/email.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [FormController],
  providers: [FormService, EmailService],
})
export class FormModule {}
