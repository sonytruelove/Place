import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { FileService } from './file.service';
import { FileDTO } from './dto/file.dto';
import { downloadFileDTO } from './dto/download.file.dto';
import { UploadFiles } from './upload-files.decorator';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionDTO } from 'src/auth/dto/getSession.dto';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('/files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UploadFiles()
  async upload(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @SessionInfo() session: GetSessionDTO,
    @Body('placeid') placeId: number,
  ): Promise<string> {
    return await this.fileService.upload(files, session.id, placeId);
  }

  @Get()
  @ApiOkResponse({
    type: FileDTO,
  })
  @UseGuards(AuthGuard)
  async getAllInPlace(
    @SessionInfo() session: GetSessionDTO,
    @Query('placeid') placeid: number,
    @Query('count') count: number,
    @Query('offset') offset: number,
  ) {
    return this.fileService.getAllInPlace(placeid, session.id, count, offset);
  }

  /// Not working for now
  @Get('/search')
  @ApiOkResponse({
    type: FileDTO,
  })
  search(@Query('query') query: string) {
    return this.fileService.search(query);
  }

  @Get(':id')
  @ApiOkResponse({
    type: FileDTO,
  })
  @UseGuards(AuthGuard)
  getOne(@SessionInfo() session: GetSessionDTO, @Param('id') id: number) {
    return this.fileService.getOne(session.id, id);
  }

  @Get('/url/:accountid/:placeid/:filename')
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    type: downloadFileDTO,
  })
  async getUrlFromCurrentPlace(
    @SessionInfo() session: GetSessionDTO,
    @Param('accountid') accountId: number,
    @Param('placeid') placeId: number,
    @Param('filename') fileName: string,
  ) {
    const res = this.fileService.getUrl(
      session.id.toString(),
      accountId.toString(),
      placeId.toString(),
      fileName,
    );
    return await res;
  }

  @Get('/url/:accountid/:filename')
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    type: downloadFileDTO,
  })
  async getUrlFromUser(
    @SessionInfo() session: GetSessionDTO,
    @Param('accountid') accountId: number,
    @Param('filename') fileName: string,
  ) {
    const res = await this.fileService.getUrl(
      session.id.toString(),
      accountId.toString(),
      '',
      fileName,
    );

    return res;
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Number,
  })
  @UseGuards(AuthGuard)
  delete(@SessionInfo() session: GetSessionDTO, @Param('id') id: number) {
    return this.fileService.deleteFile(session.id, id);
  }
}
