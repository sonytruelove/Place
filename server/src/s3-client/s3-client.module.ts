import { Module } from "@nestjs/common";
import { S3Service } from "./s3-client.service";
import { MinioModule } from "nestjs-minio-client";
import { config } from "./config";
@Module({
  imports: [
    MinioModule.register({
      endPoint: config.MINIO_ENDPOINT,
      port: config.MINIO_PORT,
      useSSL: false,
      accessKey: config.MINIO_ACCESSKEY,
      secretKey: config.MINIO_SECRETKEY,
    }),
  ],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3ClientModule {}
