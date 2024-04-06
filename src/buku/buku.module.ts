import { Module } from '@nestjs/common';
import { BukuService } from './buku.service';
import { BukuController } from './buku.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BukuController],
  providers: [BukuService, PrismaService],
})
export class BukuModule {}
