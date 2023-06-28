import mongoose, { Document, ObjectId } from "mongoose";
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export class Messages extends Document {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Conversations' })
  readonly conversation_id: ObjectId;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Users' })
  readonly sender_id: ObjectId;
  readonly content: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
