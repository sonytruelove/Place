import {
  Injectable,
  Logger,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  BadRequestException,
} from "@nestjs/common";
import { MinioService } from "nestjs-minio-client";
import { config } from "./config";
@Injectable()
export class S3Service {
  private readonly logger: Logger;

  private readonly accountBucket = config.MINIO_BUCKET;

  public get client() {
    return this.minio.client;
  }

  constructor(private readonly minio: MinioService) {
    this.logger = new Logger("S3StorageService");
  }

  public async createBucket(accountId: string) {
    if (!(await this.isBucketExist(accountId))) {
      await this.client.makeBucket(accountId);
      return true;
    }
    return false;
  }

  public async isBucketExist(accountBucket: string): Promise<boolean> {
    return await this.client.bucketExists(accountBucket.toString());
  }

  public async create(
    accountId: string = this.accountBucket,
    placeName: string,
  ) {
    this.client.putObject(accountId, placeName + "/", "");
  }

  public async upload(
    file: Express.Multer.File,
    placeUrl: string = "",
    accountBucket: string = this.accountBucket,
  ) {
    const metaData = {
      "Content-Type": file.mimetype,
      "X-Amz-Meta-Testing": 1234,
    };
    const filename = placeUrl + file.originalname;
    const fileName: string = `${filename}`;
    const fileSize: number = file.size;
    const fileBuffer = file.buffer;
    this.client.putObject(
      accountBucket,
      fileName,
      fileBuffer,
      fileSize,
      metaData,
      function (err) {
        if (err) {
          throw new HttpException(
            "Error uploading file: " + err.message,
            HttpStatus.BAD_REQUEST,
          );
        }
      },
    );
    return "Succesfully uploaded";
  }

  async delete(objectName: string, accountBucket: string = this.accountBucket) {
    this.client.removeObject(accountBucket, objectName, function (err) {
      if (err) {
        throw new HttpException(
          "Oops Something wrong happend",
          HttpStatus.BAD_REQUEST,
        );
      }
    });
  }

  async getUrl(accountBucket: string = this.accountBucket, objectName: string) {
    try {
      return await this.client.presignedGetObject(
        accountBucket,
        objectName,
        1000 * 60 * 5,
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
    // let size = 0;
    // this.client.getObject(userBucket, objectName,
    //       function (err, dataStream) {
    //         if (err) {
    //           return console.log(err);
    //         }
    //         dataStream.on('data', function (chunk) {
    //           size += chunk.length;
    //         });
    //         dataStream.on('end', function () {
    //           console.log('End. Total size = ' + size);
    //         });
    //         dataStream.on('error', function (err) {
    //           throw new HttpException("Oops Something wrong happend", HttpStatus.BAD_REQUEST)
    //         });
    //       }
    //     );
  }
}
