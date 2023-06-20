import { CACHE_MANAGER, Inject, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessagesModule } from './messages/messages.module';
import { CacheAppModule } from 'cache.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    HealthModule,
    ConversationModule,
    MessagesModule,
    CacheAppModule,
    CacheModule.register(),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
