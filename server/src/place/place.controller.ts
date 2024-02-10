import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionDTO } from 'src/auth/dto/getSession.dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { PlaceService } from './place.service';
import { CreatePlaceDTO } from './dto/create.place.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('/places/:aboveplaceid')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
 
  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse()
  async create(
    @Body() dto: CreatePlaceDTO,
    @SessionInfo() session: GetSessionDTO,
    @Param('aboveplaceid') AbovePlaceId: number,
  ): Promise<string> {
    return await this.placeService.create(
      session.id,
      dto.placename,
      AbovePlaceId,
    );
  }
}
