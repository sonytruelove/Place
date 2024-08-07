import { ApiProperty } from "@nestjs/swagger";

export class CreatePlaceDTO {
  @ApiProperty({
    example: "My place",
  })
  placeName: string;

  @ApiProperty()
  abovePlaceId: number;
}
