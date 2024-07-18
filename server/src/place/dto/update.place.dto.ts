import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlaceDTO {
  @ApiProperty({})
  placeId: number;

  @ApiProperty({
    example: 'My place',
  })
  placeName: string;

  @ApiProperty({
    example: true,
  })
  publicAccess: boolean;
}
