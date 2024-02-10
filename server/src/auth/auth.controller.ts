import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { SignUpDTO } from './dto/signUp.dto';
import { SignInDTO } from './dto/signIn.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CookiesService } from './cookies.service';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';
import { GetSessionDTO } from './dto/getSession.dto';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookiesService: CookiesService,
  ) {}

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() dto: SignInDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(
      dto.email,
      dto.password,
    );
    this.cookiesService.setToken(res, accessToken);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse()
  async signUp(
    @Body() dto: SignUpDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      dto.name,
      dto.email,
      dto.password,
    );
    this.cookiesService.setToken(res, accessToken);
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookiesService.removeToken(res);
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionDTO,
  })
  @UseGuards(AuthGuard)
  getSession(@SessionInfo() session: GetSessionDTO) {
    return session;
  }
}
