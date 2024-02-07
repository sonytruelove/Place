import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { DBModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { S3ClientModule } from './s3-client/s3-client.module';

@Module({
  imports: [
    FileModule,
    DBModule,
    AuthModule,
    UsersModule,
    AccountModule,
    S3ClientModule,
  ]
})
export class AppModule {}