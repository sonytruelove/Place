import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetPlacerListDTO {
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
    example: "My",
    default: "All",
  })
  searchArea?: string;

  @ApiPropertyOptional({
    example: "Placer",
    default: "",
  })
  searchText?: string;
}
