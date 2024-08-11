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
import { PlaceService } from "./place.service";
import { CreatePlaceDTO } from "./dto/create.place.dto";
import { ApiCreatedResponse, ApiNoContentResponse } from "@nestjs/swagger";
import { PlaceDTO, PlacesDTO } from "./dto/place.dto";
import { UpdatePlaceDTO } from "./dto/update.place.dto";
import { getAvailablePlacesDTO } from "./dto/get.availablePlaces.dto";

@Controller("/places")
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse()
  async create(
    @Body() dto: CreatePlaceDTO,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<string> {
    return await this.placeService.create(
      session.id,
      dto.placeName,
      dto.abovePlaceId,
    );
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ApiNoContentResponse()
  async update(
    @Param("id") placeId: number,
    @Body() dto: UpdatePlaceDTO,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<boolean> {
    return await this.placeService.update(
      session.id,
      placeId,
      dto.placeName,
      dto.publicAccess,
    );
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  async getOne(
    @Param("id") placeId: number,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<PlaceDTO> {
    return await this.placeService.getOne(session.id, placeId);
  }

  /* @Get()
   async getAllPublic(): Promise<PlacesDTO[]> {
     return await this.placeService.getAllPublic();
   } */

  @Get()
  @UseGuards(AuthGuard)
  async getAvailable(
    @SessionInfo() session: GetSessionDTO,
    @Query() query: getAvailablePlacesDTO,
  ): Promise<PlacesDTO[]> {
    return await this.placeService.getPlacesAvailableByQuery(session.id, query);
  }
}
