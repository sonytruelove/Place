import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { isObjectEmpty } from 'src/shared/isObjectEmpty';
import { Account, Prisma } from '@prisma/client';
import { UpdatePlacerListDTO } from './dto/update.placer-list.dto';
import { GetPlacerListDTO } from './dto/get.placer-list.dto';
@Injectable()
export class PlacerListService {
  constructor(private readonly db: DBService) { }

  async getOne(userId: number): Promise<Account> {
    const placerList = await this.db.account.findUniqueOrThrow({
      where: {
        id: Number(userId)
      },
      include: {
        placerList: true,
      }
    });
    return placerList || {};
  }

  async getAllPublic(
    accountId: number,
    query: GetPlacerListDTO,
  ): Promise<Account[]> {
    if (isObjectEmpty(query)) {
      query = { skip: 0, take: 10 };
    }
    const skip = query.skip || 0;
    const take = query.take || 10;
    const { searchArea, searchText } = query;
    const whereOwnerIdFilter =
      searchArea === "My" ? { id: accountId } : { NOT: { id: accountId } };
    const placerList = await this.db.account.findMany({
      skip: Number(skip),
      take: Number(take),
      where: {
        AND: [
          {
            ...whereOwnerIdFilter
          },
          {
            OR: [
              {
                name: {
                  contains: searchText,
                  mode: Prisma.QueryMode.insensitive,
                }
              },
              {
                discription: {
                  contains: searchText,
                  mode: Prisma.QueryMode.insensitive,
                },
              }
            ],
          },
        ],
      },
    });
    return placerList || {};
  }

  async updatePlacerList(accountId: number, patch: UpdatePlacerListDTO) {
    return this.db.account.update({
      where: { id: accountId },
      data: {
        placerList: {
          connect: [
            {
              id: patch.id,
            },
          ],
        },
      }
    });
  }
}
