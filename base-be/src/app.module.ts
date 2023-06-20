import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, AuthModule, DatabaseModule, HealthModule, ConversationModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
