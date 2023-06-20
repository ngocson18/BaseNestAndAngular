import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  type: String,
  participants: Array<String>,
  created_at: Date
});
