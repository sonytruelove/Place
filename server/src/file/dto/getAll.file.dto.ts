import { ApiProperty } from '@nestjs/swagger';

export class getAllFilesDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  size: number;

  @ApiProperty()
  ext: string;

  @ApiProperty()
  url: string;
}
