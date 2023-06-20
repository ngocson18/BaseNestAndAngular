import { Document } from "mongoose";
export class Conversation extends Document {
  readonly type: string;
  readonly participants: Array<String>;
  readonly created_at: Date;
}
