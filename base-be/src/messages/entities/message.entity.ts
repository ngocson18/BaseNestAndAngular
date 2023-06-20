import { Document, ObjectId } from "mongoose";
export class Messages extends Document {
  readonly conversation_id: ObjectId;
  readonly sender_id: ObjectId;
  readonly content: string;
  readonly timestamp: Date;
}
