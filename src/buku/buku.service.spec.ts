import { Test, TestingModule } from '@nestjs/testing';
import { BukuService } from './buku.service';

describe('BukuService', () => {
  let service: BukuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BukuService],
    }).compile();

    service = module.get<BukuService>(BukuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
