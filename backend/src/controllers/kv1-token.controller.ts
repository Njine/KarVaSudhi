import { Controller, Get, Post, Body } from '@nestjs/common';
import { KV1TokenService } from '../services/kv1-token.service';
import { KV1Token } from '../models/kv1-token.entity';

@Controller('kv1tokens')
export class KV1TokenController {
  constructor(private readonly kv1TokenService: KV1TokenService) {}

  @Get()
  findAll(): Promise<KV1Token[]> {
    return this.kv1TokenService.findAll();
  }

  @Post()
  create(@Body() kv1Token: Partial<KV1Token>): Promise<KV1Token> {
    return this.kv1TokenService.create(kv1Token);
  }
}
