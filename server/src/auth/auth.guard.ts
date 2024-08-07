import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { CookiesService } from "./cookies.service";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.cookies[CookiesService.tokenKey];
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const sessionInfo = this.JwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      req.session = sessionInfo;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
