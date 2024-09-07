import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Ballot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('simple-array')
  options: string[]; // Voting options

  @Column('simple-json')
  votes: Record<string, number>; // Votes mapped to each option

  @CreateDateColumn()
  createdAt: Date;

  @Column('timestamptz')
  endsAt: Date;
}
