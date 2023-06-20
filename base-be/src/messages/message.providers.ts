import { Mongoose } from 'mongoose';
import { MessageSchema } from './schemas/message.schema';

export const conversationProviders = [
  {
    provide: 'MESSAGE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Message', MessageSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
