import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PasswordService } from "./password.service";
import { CookiesService } from "./cookies.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { S3ClientModule } from "src/s3-client/s3-client.module";

@Module({
  imports: [
    UsersModule,
    S3ClientModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PasswordService, CookiesService],
})
export class AuthModule {}
