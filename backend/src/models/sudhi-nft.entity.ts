import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class SudhiNFT {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  owner: string; // Hedera Wallet Address

  @Column()
  projectType: string; // Trees, DAC, etc.

  @Column('int')
  treesRepresented: number; // Number of trees represented

  @Column()
  metadata: string; // Metadata URL (e.g., IPFS link)

  @CreateDateColumn()
  createdAt: Date;
}
