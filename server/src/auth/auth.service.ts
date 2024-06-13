import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';
import { S3Service } from 'src/s3-client/s3-client.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private S3Service: S3Service,
    private JwtService: JwtService,
  ) {}

  async signUp(name: string, email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) throw new BadRequestException({ type: 'email-exists' });
    const salt = this.passwordService.getSault();
    const hash = this.passwordService.getHash(password, salt);
    const newUser = await this.usersService.create(name, email, hash, salt);
    const IsBucketCreated = this.S3Service.createBucket(
      newUser.accountid.toString(),
    );
    if (!IsBucketCreated)
      throw new BadRequestException({
        type: 'That account bucket already exist"'
    });
    const accessToken = await this.JwtService.signAsync({
      id: newUser.accountid,
      email: newUser.useremail,
    });
    return { accessToken };
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {throw new UnauthorizedException({ type: "email-doesnt-exists" });}
    const hash = this.passwordService.getHash(password, user.salt);
    if (hash !== user.hash)
      {throw new UnauthorizedException();}
    try {
      const accessToken = await this.JwtService.signAsync({
        id: user!.account!.id,
        email: user.email,
      });
      return { accessToken };
    } catch (err) {
      throw new BadRequestException({ type: 'user have not account' });
    }
  }
}
