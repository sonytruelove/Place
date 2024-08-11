import { Injectable } from "@nestjs/common";
import { PatchAccountDTO } from "./dto/patchAccount.dto";
import { DBService } from "src/db/db.service";
@Injectable()
export class AccountService {
  constructor(private db: DBService) {}

  async create(user: any) {
    const newAccount = await this.db.account.create({
      data: {
        ownerId: user.id,
        uniqueQuota: 1,
        places: {
          create: {
            name: "",
            url: "",
          },
        },
      },
      include: { places: true },
    });
    // 2 queryes - it's one way to do this feature:(

    await this.db.place.update({
      where: {
        id: newAccount.places[0].id,
        ownerId: newAccount.id,
        abovePlaceId: undefined,
        url: "",
      },
      data: {
        accessIdList: [newAccount.id],
      },
    });
    newAccount.places[0].accessIdList = [newAccount.id];
    return newAccount;
  }

  async getAccount(accountId: number) {
    const account = this.db.account.findUniqueOrThrow({
      where: { id: accountId },
      include: { places: true },
    });
    return account;
  }

  async patchAccount(accountId: number, patch: PatchAccountDTO) {
    return this.db.account.update({
      where: { id: accountId },
      include: { places: true },
      data: {
        name: patch.name,
        discription: patch.discription,
      },
    });
  }
}
