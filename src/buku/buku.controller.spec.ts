import { Test, TestingModule } from '@nestjs/testing';
import { BukuController } from './buku.controller';
import { BukuService } from './buku.service';

describe('BukuController', () => {
  let controller: BukuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BukuController],
      providers: [BukuService],
    }).compile();

    controller = module.get<BukuController>(BukuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
