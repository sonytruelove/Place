import { All, BadRequestException, Injectable } from "@nestjs/common";
import { DBService } from "src/db/db.service";
import { S3Service } from "../s3-client/s3-client.service";
import { PlaceDTO, PlacesDTO } from "./dto/place.dto";
import { getAvailablePlacesDTO } from "./dto/get.availablePlaces.dto";
import { isObjectEmpty } from "src/shared/isObjectEmpty";
import { Prisma } from "@prisma/client";
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
        },
      });
      return "Place succesffuly created";
    } catch (err) {
      console.log(err);
      throw new BadRequestException({ type: err });
    }
  }

  async createUnique(accountId: number, placeName: string): Promise<string> {
    try {
      const isNameTaken = await this.db.uniquePlace.findFirst({
        where: { name: placeName },
      });
      if (isNameTaken) {
        throw new BadRequestException({
          type: "This place name used up already",
        });
      }

      const isBucketExist = await this.S3Service.isBucketExist(
        accountId.toString(),
      );
      const account = await this.db.account.findMany({
        where: { id: Number(accountId) },
        include: {
          uniquePlaces: { where: { ownerId: Number(accountId) } },
        },
      });
      if (account[0].uniquePlaces.length >= account[0].uniqueQuota) {
        throw new BadRequestException({
          type: "Number of available unique places used up",
        });
      }
      if (!isBucketExist)
        throw new BadRequestException({ type: "The Bucket doesn't exist" });
      await this.S3Service.create(accountId.toString(), placeName);

      const newPlace = await this.db.uniquePlace.create({
        data: {
          ownerId: accountId,
          accessIdList: [accountId],
          name: placeName,
          url: placeName,
        },
      });
      return "Unique Place successfully created";
    } catch (err) {
      console.log(err);
      throw new BadRequestException({ type: err });
    }
  }

  async update(
    accountId: number,
    placeId: number,
    placeName: string,
    publicAccess: boolean,
  ): Promise<boolean> {
    const place = await this.db.place.findUnique({
      where: {
        id: Number(placeId),
      },
    });
    if (!place || !place.accessIdList.includes(Number(accountId)))
      throw new BadRequestException({ type: "No such place or forbidden" });
    const updatedPlace = await this.db.place.update({
      where: {
        id: Number(placeId),
      },
      data: {
        name: placeName,
        publicAccess: publicAccess,
      },
    });
    return updatedPlace !== undefined;
  }

  async getOne(accountId: number, placeId: number): Promise<PlaceDTO> {
    const place = await this.db.place.findUnique({
      where: {
        id: Number(placeId),
      },
      include: {
        owner: true,
        underPlace: true,
        files: true,
      },
    });
    if (place && place.accessIdList.includes(Number(accountId))) return place;
    throw new BadRequestException({ type: "No such place or forbidden" });
  }

  async getAllPublic(): Promise<PlacesDTO[]> {
    const places = await this.db.place.findMany({
      where: {
        publicAccess: true,
      },
      include: {
        owner: true,
      },
    });
    return places;
  }

  async getPlacesAvailableByQuery(
    accountId: number,
    query: getAvailablePlacesDTO,
  ): Promise<PlacesDTO[]> {
    if (isObjectEmpty(query)) {
      query = { skip: 0, take: 10 };
    }
    const skip = query.skip || 0;
    const take = query.take || 10;
    const model = query.isUnique ? "uniquePlace" : "place";
    const { searchArea, searchText } = query;
    let whereOwnerIdFilter = {};
    if (searchArea == "My") whereOwnerIdFilter = { ownerId: accountId };
    if (searchArea == "Other")
      whereOwnerIdFilter = { NOT: { ownerId: accountId } };
    const availablePlaces = await (
      this.db[model] as Record<string, any>
    ).findMany({
      skip: Number(skip),
      take: Number(take),
      include: {
        owner: true,
      },
      where: {
        ...whereOwnerIdFilter,
        AND: [
          {
            OR: [
              {
                name: {
                  contains: searchText,
                  mode: Prisma.QueryMode.insensitive,
                },
              },
              {
                discription: {
                  contains: searchText,
                  mode: Prisma.QueryMode.insensitive,
                },
              },
            ],
          },
          {
            OR: [
              {
                accessIdList: {
                  has: Number(accountId),
                },
              },
              { publicAccess: true },
            ],
          },
        ],
      },
    });
    if (availablePlaces) {
      return availablePlaces;
    }
    throw new BadRequestException({ type: "No available places" });
  }
}
