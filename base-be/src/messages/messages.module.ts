import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from 'src/database/database.module';
import { conversationProviders } from './message.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [MessagesService, ...conversationProviders],
  exports: [MessagesService]
})
export class MessagesModule {}
