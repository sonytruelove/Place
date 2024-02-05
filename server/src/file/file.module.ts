import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { DBModule } from 'src/db/db.module';
import { S3ClientModule } from 'src/s3-client/s3-client.module';

@Module({
  imports: [DBModule, S3ClientModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
