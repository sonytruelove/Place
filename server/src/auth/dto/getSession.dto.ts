import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
export class GetSessionDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  "iat": number;

  @ApiProperty()
  "exp": number;
}
