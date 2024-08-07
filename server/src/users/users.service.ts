import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DBService } from "../db/db.service";
import { AccountService } from "src/account/account.service";

@Injectable()
export class UsersService {
  constructor(
    private DBService: DBService,
    private accountService: AccountService,
  ) {}

  findByEmail(email: string) {
    return this.DBService.user.findFirst({
      where: { email },
      include: { account: true },
    });
  }

  async create(name: string, email: string, hash: string, salt: string) {
    const user = await this.DBService.user.create({
      data: {
        name,
        email,
        hash,
        salt,
      },
      include: { account: true },
    });
    const account = await this.accountService.create(user);
    return { accountid: account.id, useremail: user.email };
  }
}
