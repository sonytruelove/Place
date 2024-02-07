import { Injectable } from '@nestjs/common';
import { PatchAccountDTO } from './dto/patchAccount.dto';
import { DBService } from 'src/db/db.service';
@Injectable()
export class AccountService {
  constructor(private db: DBService) {}

  async create(user: any) {
    const newAccount = await this.db.account.create({
      data: {
        ownerId: user.id,
        places: {
          create: {
            url: '',
          }
        }
      },
      include: { places: true },
    });
    // 2 query - it's one way to do this feature:(

    await this.db.place.update({
      where: {
        ownerId: newAccount.id,
        url: '',
      },
      data: {
        accessIdList: [newAccount.id],
      }
    });
    newAccount.places[0].accessIdList = [newAccount.id];
    return newAccount;
  }

  async getAccount(accountId: number) {
    return this.db.account.findUniqueOrThrow({
      where: { id: accountId },
      include: { places: true },
    });
  }

  async patchAccount(userId: number, patch: PatchAccountDTO) {
    return this.db.account.update({
      where: { ownerId: userId },
      include: { places: true },
      data: { places: {} },
    });
  }
}