import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
export class CreateMessageDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  conversation_id: ObjectId;

  @ApiProperty({
    type: String,
    required: true,
  })
  sender_id: ObjectId;

  @ApiProperty({
    type: String,
    required: true,
  })
  content: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  timestamp: Date;
}
