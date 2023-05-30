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

  @Column({ default: false })
  checkin1: boolean;

  @Column({ default: false })
  checkin2: boolean;

  @Column({ default: false })
  checkin3: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
