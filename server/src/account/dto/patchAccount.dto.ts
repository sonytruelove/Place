import { ApiProperty } from '@nestjs/swagger';
import { Place } from '@prisma/client';
import { IsBoolean, IsOptional } from 'class-validator';

export class PatchAccountDTO {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  places: Place[];
}
