import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { conversationProviders } from './conversation.providers';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ConversationController],
  providers: [ConversationService, ...conversationProviders],
  exports: [ConversationService]
})
export class ConversationModule {}
