import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { SudhiNFT } from './sudhi-nft.entity';
import { Ballot } from './ballot.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  walletAddress: string; // Hedera wallet address

  @Column('decimal', { precision: 20, scale: 8 })
  kv1Balance: number; // KV1 token balance

  @OneToMany(() => SudhiNFT, (sudhiNFT) => sudhiNFT.owner)
  sudhiNFTs: SudhiNFT[]; // Owned Sudhi NFTs

  @OneToMany(() => Ballot, (ballot) => ballot.id)
  participatedBallots: Ballot[]; // Participated ballots

  @CreateDateColumn()
  createdAt: Date;
}
