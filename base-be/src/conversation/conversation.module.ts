import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { conversationProviders } from './conversation.providers';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/users/user.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [ConversationController],
  providers: [ConversationService, ...conversationProviders, ...userProviders],
  exports: [ConversationService]
})
export class ConversationModule {}
