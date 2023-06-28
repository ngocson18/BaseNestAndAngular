import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  conversation_id: String,
  sender_id: String,
  content: String,
  created_at: Date,
  updated_at: Date
});
