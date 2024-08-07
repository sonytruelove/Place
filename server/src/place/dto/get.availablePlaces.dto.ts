import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class getAvailblePlacesDTO {
  @ApiPropertyOptional({
    example: 0,
    default: 0,
  })
  skip?: number;

  @ApiPropertyOptional({
    example: 2,
    default: 10,
  })
  take?: number;

  @ApiPropertyOptional({
    example: false,
    default: false,
  })
  isUnique?: boolean;

  @ApiPropertyOptional({
    example: "My",
    default: "All",
  })
  searchArea?: string;

  @ApiPropertyOptional({
    example: "My place",
    default: "",
  })
  searchText?: string;
}
