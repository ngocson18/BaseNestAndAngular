import { Document } from "mongoose";
export class User extends Document {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly role: string;
  readonly avatar: string;
  readonly created_at: Date;
  
}
