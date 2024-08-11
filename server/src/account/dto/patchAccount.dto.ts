import { ApiPropertyOptional } from "@nestjs/swagger";

export class PatchAccountDTO {
  @ApiPropertyOptional({
    example: "CoolMan",
  })
  name: string;

  @ApiPropertyOptional({
    example: "I'm CoolMan!",
  })
  discription: string;
}
