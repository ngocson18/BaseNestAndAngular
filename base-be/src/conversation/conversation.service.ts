import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './entities/conversation.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ConversationService {
  constructor(
    @Inject('CONVERSATION_MODEL')
    private conversationModel: Model<Conversation>,
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConversation = await new this.conversationModel(createConversationDto);
    return createdConversation.save();
  }

  async findAll(): Promise<Conversation[]> {
    let data = await this.conversationModel.find().exec();
    return data;
  }

  async findConversationByUser(user_id: string): Promise<Conversation[]> {
    let data: any = await this.conversationModel.find({"participants": user_id}).exec();
    let b = data.forEach(async (el: Conversation, i: number) => {
      el.participants.forEach(async (el2: string) => {
        let user = await this.userModel.find({'_id': el2}).exec();
        data[i].participantsName.push(user[0].name);
      });
    });
    console.log(data);
    return data;
  }

  async findOne(id: string): Promise<Conversation | undefined> {
    let data = await this.conversationModel.findById({"_id": id}).exec();
    return data;
  }

  async update(id: string, updateConversationDto: UpdateConversationDto): Promise<any> {
    let data = await this.conversationModel.updateOne({"_id": id}, updateConversationDto).exec();
    return data;
  }

  async remove(id: string): Promise<any> {
    this.conversationModel.deleteOne({"_id": id}).exec();
  }
}
