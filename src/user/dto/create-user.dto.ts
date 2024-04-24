import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  // IsEnum,
  Length,
} from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

// enum ComoNosConheceu {
//   INSTAGRAM = 'Instagram',
//   FACEBOOK = 'Facebook',
//   TWITTER = 'Twitter',
//   LINKEDIN = 'LinkedIn',
//   GOOGLE = 'Google',
//   INDICACAO = 'Indicação',
//   OUTROS = 'Outros',
// }

// enum Setores {
//   UTILIDADES = 'Utilidades',
//   ALIMENTACAO = 'Alimentação',
//   VESTUARIO = 'Vestuário',
//   TECNOLOGIA = 'Tecnologia',
//   SAUDE = 'Saúde',
//   EDUCACAO = 'Educação',
//   OUTROS = 'Outros',
// }

@Entity()
export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  telefone: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  nomeDaEmpresa: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  //@IsEnum(ComoNosConheceu)
  @IsString()
  comoNosConheceu: string; //ComoNosConheceu;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  uf: string;

  //@IsEnum(Setores)
  @IsString()
  setores: string; //Setores;

  @IsString()
  @IsNotEmpty()
  @Length(8, 8)
  cep: string;
}
