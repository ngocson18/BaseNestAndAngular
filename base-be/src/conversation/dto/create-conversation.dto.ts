import { ApiProperty } from "@nestjs/swagger";
export class CreateConversationDto {
  @ApiProperty({
    required: true,
    description: 'private or group',
    enum: ['Private', 'Group'],
    type: String,
  })
  type: string;

  @ApiProperty({
    required: true,
    description: 'Ids',
    type: [String]
  })
  participants: string[];

  @ApiProperty({ 
    required: false
  })
  created_at: Date;

  @ApiProperty({ 
    required: false
  })
  updated_at: Date;
}

export enum ConversationType {
  Group = 'Group',
  Private = 'Private'
}
