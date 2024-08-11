import { Test, TestingModule } from "@nestjs/testing";
import { PlacerListController } from "./placer-list.controller";

describe("PlaceController", () => {
  let controller: PlacerListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacerListController],
    }).compile();

    controller = module.get<PlacerListController>(PlacerListController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
