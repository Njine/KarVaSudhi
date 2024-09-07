import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KV1Token } from '../models/kv1-token.entity';

@Injectable()
export class KV1TokenService {
  constructor(
    @InjectRepository(KV1Token)
    private readonly kv1TokenRepository: Repository<KV1Token>,
  ) {}

  findAll(): Promise<KV1Token[]> {
    return this.kv1TokenRepository.find();
  }

  create(kv1Token: Partial<KV1Token>): Promise<KV1Token> {
    const newToken = this.kv1TokenRepository.create(kv1Token);
    return this.kv1TokenRepository.save(newToken);
  }
}
