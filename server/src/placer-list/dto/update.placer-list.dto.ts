import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdatePlacerListDTO {
  @ApiPropertyOptional({
    example: 0,
    default: 0,
  })
  id: number;
}
