import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionDTO } from 'src/auth/dto/getSession.dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { PlaceService } from './place.service';
import { CreatePlaceDTO } from './dto/create.place.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { PlaceDTO } from './dto/place.dto';

@Controller('/places')
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

  @Get(':id')
  @UseGuards(AuthGuard)
  async getOne(
    @Param("id") placeId: number,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<PlaceDTO> {
    return await this.placeService.getOne(
      session.id,
      placeId
    );
  }
}
