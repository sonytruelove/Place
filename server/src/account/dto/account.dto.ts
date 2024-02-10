import { ApiProperty } from '@nestjs/swagger';
import { Place } from '@prisma/client';

export class AccountDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  places: Place[];
}
