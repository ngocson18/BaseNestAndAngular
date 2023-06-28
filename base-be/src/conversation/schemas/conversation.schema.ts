import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  type: String,
  participants: Array<String>,
  name: String,
  participantsName:  Array<String>,
  created_at: Date,
  updated_at: Date
});
