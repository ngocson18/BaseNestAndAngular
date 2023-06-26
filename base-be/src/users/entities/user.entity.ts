import { Document } from "mongoose";
export class User extends Document {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly role: string;
  readonly name: string;
  readonly lastestMessage: string;
  readonly avatar: string;
  readonly listConversation: string[];
  readonly created_at: Date;
}
