import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/users/entities/user.entity";
export class Conversation extends Document {
  readonly type: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Users' })
  readonly participants: Array<String>;
  name: string;
  participantsName: Array<String>;
  readonly created_at: Date;
  readonly updated_at: Date;
}
