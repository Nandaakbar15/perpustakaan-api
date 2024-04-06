import { Module } from '@nestjs/common';
import { PinjamService } from './pinjam.service';
import { PinjamController } from './pinjam.controller';

@Module({
  controllers: [PinjamController],
  providers: [PinjamService],
})
export class PinjamModule {}
