import { Module } from "@nestjs/common";
import { PlaceService } from "../place/place.service";
import { DBModule } from "src/db/db.module";
import { S3ClientModule } from "src/s3-client/s3-client.module";
import { UniquePlaceController } from "./unique-place.controller";
import { PlaceModule } from "src/place/place.module";

@Module({
  imports: [DBModule, S3ClientModule, PlaceModule],
  providers: [PlaceService],
  controllers: [UniquePlaceController],
})
export class UniquePlaceModule {}
