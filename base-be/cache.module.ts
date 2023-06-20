import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/common';
import { cacheConfig } from './cache.config';

@Module({
  imports: [CacheModule.register(cacheConfig)],
})
export class CacheAppModule {}
