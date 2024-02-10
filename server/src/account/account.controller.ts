import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Patch,
  UseGuards
} from "@nestjs/common";
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDTO } from './dto/account.dto';
import { PatchAccountDTO } from './dto/patchAccount.dto';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionDTO } from 'src/auth/dto/getSession.dto';
import { SessionInfo } from 'src/auth/session-info.decorator';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse({
    type: AccountDTO,
  })
  getAccount(@SessionInfo() session: GetSessionDTO): Promise<AccountDTO> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: PatchAccountDTO,
  })
  patchAccount(
    @Body() body: PatchAccountDTO,
    @SessionInfo() session: GetSessionDTO,
  ): Promise<AccountDTO> {
    return this.accountService.patchAccount(session.id, body);
  }
}
