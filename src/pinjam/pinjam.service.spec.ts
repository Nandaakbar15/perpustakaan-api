import { Test, TestingModule } from '@nestjs/testing';
import { PinjamService } from './pinjam.service';

describe('PinjamService', () => {
  let service: PinjamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinjamService],
    }).compile();

    service = module.get<PinjamService>(PinjamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
