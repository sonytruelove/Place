import { Module } from "@nestjs/common";
import { PlacerListController } from "./placer-list.controller";
import { PlacerListService } from "./placer-list.service";
import { DBModule } from "src/db/db.module";
import { S3ClientModule } from "src/s3-client/s3-client.module";

@Module({
  imports: [DBModule, S3ClientModule],
  providers: [PlacerListService],
  controllers: [PlacerListController],
})
export class PlacerListModule {}
