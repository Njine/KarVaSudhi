import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KV1Token } from './models/kv1-token.entity';
import { SudhiNFT } from './models/sudhi-nft.entity';
import { Ballot } from './models/ballot.entity';
import { User } from './models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [KV1Token, SudhiNFT, Ballot, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([KV1Token, SudhiNFT, Ballot, User]),
  ],
})
export class AppModule {}
