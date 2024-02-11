import { BadRequestException, Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { S3Service } from '../s3-client/s3-client.service';
import { PlaceDTO } from './dto/place.dto';
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
      return "Place succesffuly created";
    } catch (err) {
      console.log(err);
      throw new BadRequestException({type:err});
    }
  }
  async getOne(
    accountId: number,
    placeId: number,
  ): Promise<PlaceDTO> {
    const place = await this.db.place.findUnique({
      where:{
        id: Number(placeId)
    },
      include:{
        owner: true,
        underPlace: true,
        files: true
      }
  });
      if(place&&place.accessIdList.includes(Number(accountId)))
        return place;
      else
        throw new BadRequestException({type:"No such place or forbidden"});
  }
}
