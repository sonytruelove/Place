import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { GetSessionDTO } from "src/auth/dto/getSession.dto";
import { SessionInfo } from "src/auth/session-info.decorator";
import { CreateUniquePlaceDTO } from "src/unique-place/dto/create.unique-place.dto";
import { PlaceService } from "src/place/place.service";

@Controller('/uniqueplaces')
export class UniquePlaceController {
  constructor(private placeService: PlaceService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse()
  async createUnique(
    @Body() dto: CreateUniquePlaceDTO,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<string> {
    return await this.placeService.createUnique(session.id, dto.placeName);
  }
}
