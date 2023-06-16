import { UpdateCatDto } from './dto/update-cat.dto';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat>  {
    return this.catModel.findById({ "_id" : id }).exec();
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<any> {
    return this.catModel.updateOne({ "_id" : id }, updateCatDto).exec();
  }

  async remove(id: string): Promise<any> {
    return this.catModel.deleteOne({"_id": id }).exec();
  }
}
