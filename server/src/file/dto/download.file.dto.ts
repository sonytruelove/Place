import { ApiProperty } from "@nestjs/swagger";

export class downloadFileDTO {
  @ApiProperty()
  url: string;
}
