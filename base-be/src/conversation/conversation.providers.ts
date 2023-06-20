import { Mongoose } from 'mongoose';
import { ConversationSchema } from './schemas/conversation.schema';

export const conversationProviders = [
  {
    provide: 'CONVERSATION_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Convesation', ConversationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
