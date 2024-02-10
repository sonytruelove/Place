import { BadRequestException, Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { S3Service } from '../s3-client/s3-client.service';
@Injectable()
export class PlaceService {
  constructor(
    private readonly db: DBService,
    private S3Service: S3Service,
  ) {}

  async create(
    accountId: number,
    placeName: string,
    abovePlaceId: number,
  ): Promise<string> {
    try {
      const account = await this.db.account.findUniqueOrThrow({
        where: { id: Number(accountId) },
        include: {
          places: { where: { id: Number(abovePlaceId) } },
        },
      });
      const isBucketExist = await this.S3Service.isBucketExist(
        accountId.toString(),
      );
      if (!isBucketExist)
        throw new BadRequestException({ type: "The Bucket doesn't exist" });
      const abovePlace = account.places[0];
      await this.S3Service.create(accountId.toString(), placeName);

      const newPlace = await this.db.place.create({
        data: {
          ownerId: accountId,
          accessIdList: [accountId],
          abovePlaceId: abovePlaceId,
          name: placeName,
          url: abovePlace.url + "/" + placeName,
        }
      });
      return "Place succesfuly created";
    } catch (err) {
      return err;
    }
  }
}
