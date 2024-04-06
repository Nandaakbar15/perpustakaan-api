import { Test, TestingModule } from '@nestjs/testing';
import { PinjamController } from './pinjam.controller';
import { PinjamService } from './pinjam.service';

describe('PinjamController', () => {
  let controller: PinjamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinjamController],
      providers: [PinjamService],
    }).compile();

    controller = module.get<PinjamController>(PinjamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
