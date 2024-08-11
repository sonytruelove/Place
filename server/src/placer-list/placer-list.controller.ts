import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { GetSessionDTO } from "src/auth/dto/getSession.dto";
import { SessionInfo } from "src/auth/session-info.decorator";
import { PlacerListService } from "./placer-list.service";
import { Account } from "@prisma/client";
import { GetPlacerListDTO } from "./dto/get.placer-list.dto";
import { UpdatePlacerListDTO } from "./dto/update.placer-list.dto";
@Controller("/placer-list")
export class PlacerListController {
  constructor(private placerListService: PlacerListService) {}

  @Get(":id")
  async getOne(@Param("id") userId: number): Promise<Account> {
    return await this.placerListService.getOne(userId);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllPublic(
    @SessionInfo() session: GetSessionDTO,
    @Query() query: GetPlacerListDTO,
  ): Promise<Account[]> {
    return await this.placerListService.getAllPublic(session.id, query);
  }

  @Patch()
  update(
    @SessionInfo() session: GetSessionDTO,
    @Body() updatePlacerListDto: UpdatePlacerListDTO,
  ) {
    return this.placerListService.updatePlacerList(
      session.id,
      updatePlacerListDto,
    );
  }
}
