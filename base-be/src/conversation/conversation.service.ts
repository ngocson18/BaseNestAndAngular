import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './entities/conversation.entity';

@Injectable()
export class ConversationService {
  constructor(
    @Inject('CONVERSATION_MODEL')
    private conversationModel: Model<Conversation>
  ) {}

  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConversation = new this.conversationModel(createConversationDto);
    return createdConversation.save();
  }

  async findAll(): Promise<Conversation[]> {
    return this.conversationModel.find().exec();
  }

  async findOne(id: string): Promise<Conversation | undefined> {
    return this.conversationModel.findById({"_id": id}).exec();
  }

  async update(id: string, updateConversationDto: UpdateConversationDto): Promise<any> {
    return this.conversationModel.updateOne({"_id": id}, updateConversationDto).exec();
  }

  async remove(id: string): Promise<any> {
    this.conversationModel.deleteOne({"_id": id}).exec();
  }
}
