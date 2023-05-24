import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  cnpj: string;

  @Column()
  enterpriseName: string;

  @Column()
  city: string;

  @Column()
  sector: string;

  @Column()
  marketing: string;

  @Column()
  qrcode: string;

  @CreateDateColumn()
  createdAt: Date;
}
