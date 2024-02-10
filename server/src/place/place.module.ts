import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { DBModule } from 'src/db/db.module';
import { S3ClientModule } from 'src/s3-client/s3-client.module';

@Module({
  imports: [DBModule, S3ClientModule],
  providers: [PlaceService],
  controllers: [PlaceController]
})
export class PlaceModule {}
