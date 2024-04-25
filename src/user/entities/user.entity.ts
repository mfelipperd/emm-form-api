import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  //IsEnum,
  Length,
  IsNumberString,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  nomeDaEmpresa: string;

  @IsEmail()
  @Column('varchar')
  email: string;

  @IsNumberString()
  @Length(14, 14)
  @Column('varchar')
  cnpj: string;

  @IsPhoneNumber('BR')
  @Column('varchar')
  telefone: string;

  @IsNumberString()
  @Length(8, 8)
  @Column('varchar')
  cep: string;

  //@IsEnum(Setores)
  @IsString()
  @Column('varchar')
  setores: string;

  //@IsEnum(ComoNosConheceu)
  @IsString()
  @Column('varchar')
  comoNosConheceu: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  bairro: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  cidade: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  uf: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar')
  city: string;
}
