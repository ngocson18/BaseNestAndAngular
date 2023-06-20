import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Messages } from './entities/message.entity';
@Injectable()
export class MessagesService {
  constructor(
    @Inject('MESSAGE_MODEL')
    private messageModel: Model<Messages>
  ) {}
  async create(createMessageDto: CreateMessageDto):Promise<Messages> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Messages[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Messages | undefined> {
    return this.messageModel.findById({"_id": id}).exec();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto): Promise<any> {
    return this.messageModel.updateOne({"_id": id}, updateMessageDto).exec();
  }

  async remove(id: string) {
    this.messageModel.deleteOne({"_id": id}).exec();
  }
}
