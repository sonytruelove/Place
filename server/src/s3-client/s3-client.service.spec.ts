import { Test, TestingModule } from "@nestjs/testing";
import { S3Service } from "./s3-client.service";

describe("S3ClientService", () => {
  let service: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3Service],
    }).compile();

    service = module.get<S3Service>(S3Service);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
