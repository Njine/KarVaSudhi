import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class KV1Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 20, scale: 8 })
  totalSupply: number;

  @Column()
  owner: string; // Hedera Wallet Address

  @Column('decimal', { precision: 20, scale: 8 })
  balance: number;

  @CreateDateColumn()
  createdAt: Date;
}
