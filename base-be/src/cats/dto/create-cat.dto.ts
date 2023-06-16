import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({
    description: 'The name of cat',
    minimum: 1,
    default: 'No name'
  })
  name: string;

  @ApiProperty({
    description: 'The age of cat',
    minimum: 1,
    default: 1
  })
  age: number;

  @ApiProperty({
    default: ''
  })
  breed: string;

  @ApiProperty({
    type: [String],
    default: ['']
  })
  vacxin: string[];
}
