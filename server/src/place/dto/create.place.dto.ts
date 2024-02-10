import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaceDTO {
  @ApiProperty({
    example: 'My place',
  })
  placename: string;
}
