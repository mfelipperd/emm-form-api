import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  //IsEnum,
  Length,
  IsNumberString,
} from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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
@Entity()
export class User {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  @Column({ nullable: true })
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

  //@IsEnum(Setores)
  @IsString()
  setores: string;

  //@IsEnum(ComoNosConheceu)
  @IsString()
  comoNosConheceu: string;

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
  city: string;
}
