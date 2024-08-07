import { ApiProperty } from "@nestjs/swagger";

export class CreateUniquePlaceDTO {
  @ApiProperty({
    example: "My place",
  })
  placeName: string;
}
