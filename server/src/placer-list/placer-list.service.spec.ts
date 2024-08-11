import { Test, TestingModule } from "@nestjs/testing";
import { PlacerListService } from "./placer-list.service";

describe("PlacerListService", () => {
  let service: PlacerListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacerListService],
    }).compile();

    service = module.get<PlacerListService>(PlacerListService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
