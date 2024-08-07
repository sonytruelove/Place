import { ApiProperty } from "@nestjs/swagger";

export class SignUpDTO {
  @ApiProperty({
    example: "CoolMan",
  })
  name: string;

  @ApiProperty({
    example: "CoolMan@gmail.com",
  })
  email: string;

  @ApiProperty()
  password: string;
}
