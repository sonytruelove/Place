import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { DBService } from '../db/db.service';
import { S3Service } from '../s3-client/s3-client.service';
import { FileDTO } from './dto/file.dto';
@Injectable()
export class FileService {
  constructor(
    private readonly db: DBService,
    private S3Service: S3Service,
  ) {}

  async upload(
    fileRes: Array<Express.Multer.File>,
    accountId: number,
    placeId: number,
  ): Promise<string> {
    let place;
    try {
      const account = await this.db.account.findUniqueOrThrow({
        where: { id: Number(accountId) },
        include: {
          places: { where: { id: Number(placeId) }, include: { files: true } }
        },
      });
      place = account.places[0];
    } catch (err) {
      console.log(err.message);
      throw new InternalServerErrorException({ type: err });
    }
    if (!place) {
      throw new BadRequestException({
        type: "No place with such ID or access for your account",
      });
    }
    if (!fileRes.length) throw new BadRequestException({ type: 'No files' });
    try {
      const isBucketExist = await this.S3Service.isBucketExist(
        accountId.toString(),
      );
      if (!isBucketExist) throw new BadRequestException({ type: "The Bucket doesn't exist" });
      fileRes.forEach(async (element) => {
        if (place.url == '') await this.S3Service.upload(element, '', place.ownerId.toString());
        else {
          await this.S3Service.upload(
            element,
            place.url + "/",
            place.ownerId.toString(),
          );
        }
        const newFile = await this.db.file.create({
          data: {
            placeId: Number(placeId),
            accessIdList: [place.ownerId],
            name: element.originalname,
            size: element.size,
            ext: element.mimetype,
            url: place.url + '/' + element.originalname
          },
        });
      });
    } catch (e) {
      throw new BadRequestException(e.type);
    }
    return 'Successfuly uploaded';
  }

  async getAllInPlace(
    placeId: number,
    sessionId: number,
    count = 10,
    offset = 0,
  ): Promise<FileDTO> {
    const files = await this.db.file.findMany({
      where: { placeId: Number(placeId) },
      skip: Number(offset),
      take: Number(count)
    });
    const file: {
      id: number;
      placeId: number;
      accessIdList?: number[];
      name: string;
      size: number;
      ext: string;
      url: string;
      uploadedAt: Date;
    } = files.filter((file) => file.accessIdList.includes(Number(sessionId)),)[0];
    if (file) {
      delete file.accessIdList;
      return file;
    }
    throw new BadRequestException({ type: 'No file or Forbidden' });
  }

  async getOne(sessionId, id: number): Promise<FileDTO> {
    try {
      const file: {
        id: number;
        placeId: number;
        accessIdList?: number[];
        name: string;
        size: number;
        ext: string;
        url: string;
        uploadedAt: Date;
      } = await this.db.file.findFirstOrThrow({ where: { id: Number(id) } });
      if (file!.accessIdList!.includes(Number(sessionId))) {
        delete file.accessIdList;
        return file;
      }
      throw new BadRequestException({ type: 'No file or Forbidden' });
    } catch (e) {
      return e;
    }
  }

  async getUrl(
    sessionId: string,
    accountId: string,
    placeId: string,
    filename: string,
  ) {
    try {
      let account;
      if (!placeId) {
        account = await this.db.account.findUniqueOrThrow({
          where: { id: Number(accountId) },
          include: {
            places: {
              include: {
                files: {
                  where: { name: filename },
                }
              }
            }
          }
        });
      } else {
        account = await this.db.account.findUniqueOrThrow({
          where: { id: Number(accountId) },
          include: {
            places: {
              where: { id: Number(placeId) },
              include: {
                files: {
                  where: { name: filename },
                }
              },
            }
          },
        });
      }

      const place = account.places[0];
      if (!place.files) throw new BadRequestException({ type: 'No-file-with-that-name' });
      const file = place.files.filter((file) => file.accessIdList.includes(Number(sessionId)),)[0];
      if (!file) throw new BadRequestException({ type: 'No-file-or-forbidden' });
      const res = await this.S3Service.getUrl(accountId.toString(), file.url);
      return res;
    } catch (err) {
      throw new InternalServerErrorException({ type: err });
    }
  }

  async search(query: string): Promise<FileDTO[]> {
    const files = await this.db.file.findMany({
      where: {
        name: {
          // search: query
        }
      },
    });
    return files;
  }

  async deleteFile(sessionId: number, id: number): Promise<string> {
    try {
      const place = await this.db.place.findFirst({
        where: { ownerId: Number(sessionId) },
        include: {
          files: { where: { id: Number(id) } }
        },
      });
      if (!place) return 'No such file or forbidden';
      const file = place.files[0];
      if (!file) return 'No such file or forbidden';
      await this.db.file.delete({ where: { id: Number(id) } });
      await this.S3Service.delete(file.name, sessionId.toString());
      return "Successfuly deleted: " + file.name;
    } catch (err) {
      return err;
    }
  }
}
