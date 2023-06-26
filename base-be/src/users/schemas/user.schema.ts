import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  lastestMessage: String,
  listConversation: Array,
  avatar: String,
  role: String,
  created_at: Date
});
