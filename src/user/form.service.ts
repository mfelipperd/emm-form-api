import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(User)
    private readonly userRespository: Repository<User>,
  ) {}

  create(user: CreateUserDto) {
    return this.userRespository.save(user);
  }
}
