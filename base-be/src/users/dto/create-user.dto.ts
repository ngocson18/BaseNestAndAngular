import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: '',
    minimum: 1,
    required: true,
    type: String,
    description: "Username"
  })
  username: string;

  @ApiProperty({
    default: '',
    minimum: 8,
    required: true,
    type: String,
    description: "Pass of account"
  })
  password: string;

  @ApiProperty({
    default: '',
    minimum: 1,
    type: String,
    required: true,
    description: "Email account"
  })
  email: string;

  @ApiProperty({
    default: '',
    minimum: 1,
    required: true,
    enum: ['Admin', 'Moderator', 'User']
  })
  role: UserRole;

  @ApiProperty({
    default: '',
    minimum: 1,
    required: true
  })
  name: string;

  @ApiProperty({
    default: '',
    required: false
  })
  lastestMessage: string;

  @ApiProperty({
    default: '',
    required: false
  })
  listConversation: string[];

  @ApiProperty({
    default: '',
    minimum: 1,
    required: false
  })
  avatar: string;
  
  @ApiProperty({
    default: '',
    minimum: 1,
    required: false
  })
  created_at: Date;
}

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}