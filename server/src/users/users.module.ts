import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DBModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [DBModule, AccountModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
