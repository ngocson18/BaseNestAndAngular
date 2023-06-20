import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private users: any[] = [];

  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    this.users = await this.userModel.find().exec();
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.userModel.findById({"_id": id}).exec();
  }

  async login(username: string): Promise<User | undefined> {
    await this.findAll();
    console.log(this.users);
    
    return this.users.find(user => user.username === username);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return this.userModel.updateOne({"_id": id}, updateUserDto).exec();
  }

  async remove(id: string) {
    this.userModel.deleteOne({"_id": id}).exec();
  }
}
