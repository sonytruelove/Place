import { Module } from "@nestjs/common";
import { S3Service } from "./s3-client.service";
import { MinioModule } from "nestjs-minio-client";
import { env } from "process";
@Module({
  imports: [
    MinioModule.register({
      endPoint: env.S3_ENDPOINT || "localhost",
      port: Number(env.S3_PORT) || 9000,
      useSSL: false,
      accessKey: env.S3_ACCESSKEY || "minioadmin",
      secretKey: env.S3_SECRETKEY || "minioadmin",
    }),
  ],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3ClientModule { }
