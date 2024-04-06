import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BukuModule } from './buku/buku.module';
import { AnggotaModule } from './anggota/anggota.module';
import { PinjamModule } from './pinjam/pinjam.module';

@Module({
  imports: [BukuModule, AnggotaModule, PinjamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
