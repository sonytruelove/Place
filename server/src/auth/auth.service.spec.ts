import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { S3Service } from "../s3-client/s3-client.service";
import { PasswordService } from "./password.service";

describe("AuthService", () => {
  let authService: AuthService;
  let usersServiceMock: jest.Mocked<UsersService>
  let jwtServiceMock: jest.Mocked<JwtService>;
  let S3ServiceMock: jest.Mocked<S3Service>;
  let passwordServiceMock: jest.Mocked<PasswordService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByEmail: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: PasswordService,
          useValue: {
            getSault: jest.fn().mockReturnValue("91281c9b5270e30c1dc6628171ec886474d0096cd3346f6e59fa10f151ad52c4"),
            getHash: jest.fn().mockReturnValue("password91281c9b5270e30c1dc6628171ec886474d0096cd3346f6e59fa10f151ad52c4"),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockReturnValue("token"),
          },
        },
        {
          provide: S3Service,
          useValue: {
            createBucket: jest.fn(),
          },
        },],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersServiceMock = module.get<UsersService>(UsersService) as jest.Mocked<UsersService>;
    passwordServiceMock = module.get<PasswordService>(PasswordService) as jest.Mocked<PasswordService>;
    jwtServiceMock = module.get<JwtService>(JwtService) as jest.Mocked<JwtService>;
    S3ServiceMock = module.get<S3Service>(S3Service) as jest.Mocked<S3Service>;
  });

  it("should be defined", () => {
    expect(authService).toBeDefined();
  });
  it('should sign up a user and return an access token', async () => {
    const user = {
      name: 'testuser',
      email: 'testuser@gmail.com',
      password: 'password',
    };
    usersServiceMock.findByEmail.mockResolvedValue(null);
    usersServiceMock.create.mockResolvedValue({
      accountid: 1,
      useremail: user.email
    });
    S3ServiceMock.createBucket.mockResolvedValue(true)
    const response = await authService.signUp('testuser', 'testuser@gmail.com', 'password');

    expect(response).toEqual({ accessToken: 'token' });
  });
});
