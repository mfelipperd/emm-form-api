import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  IsEnum,
  Length,
  IsNumberString,
} from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export enum Setores {
  UTILIDADES = 'Utilidades',
  ALIMENTACAO = 'Alimentação',
  VESTUARIO = 'Vestuário',
  TECNOLOGIA = 'Tecnologia',
  SAUDE = 'Saúde',
  EDUCACAO = 'Educação',
  OUTROS = 'Outros',
}

export enum ComoNosConheceu {
  INSTAGRAM = 'Instagram',
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter',
  LINKEDIN = 'LinkedIn',
  GOOGLE = 'Google',
  INDICACAO = 'Indicação',
  OUTROS = 'Outros',
}

export class User {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  nomeDaEmpresa: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  @Length(14, 14)
  cnpj: string;

  @IsPhoneNumber('BR')
  telefone: string;

  @IsNumberString()
  @Length(8, 8)
  cep: string;

  @IsEnum(Setores)
  setores: Setores;

  @IsEnum(ComoNosConheceu)
  comoNosConheceu: ComoNosConheceu;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  uf: string;

  @IsString()
  @IsNotEmpty()
  city: string; // Você pode renomear isso para evitar conflitos com 'cidade'
}
