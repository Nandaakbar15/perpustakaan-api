import { Injectable } from '@nestjs/common';
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';
import { CreateAnggotaDto } from 'src/anggota/dto/create-anggota.dto';
import { CreatePinjamDto } from 'src/pinjam/dto/create-pinjam.dto';
import { PrismaService } from 'src/prisma.service';
import { connect } from 'http2';

@Injectable()
export class BukuService {
  constructor(private prisma: PrismaService) {}
  async create(createBukuDto: CreateBukuDto) {
    const buku = await this.prisma.buku.create({
      data: {
        ...createBukuDto,
      },
    });

    return buku;
  }

  async findAll() {
    return this.prisma.buku.findMany();
  }

  async findJudul(judul: string) {
    const cariJudul = await this.prisma.buku.findMany({
      where: { judul: judul },
    });

    return cariJudul;
  }

  async findOne(no_buku: number) {
    return this.prisma.buku.findUnique({ where: { no_buku } });
  }

  async update(no_buku: number, updateBukuDto: UpdateBukuDto) {
    const ubahBuku = await this.prisma.buku.update({
      where: { no_buku },
      data: {
        ...updateBukuDto,
      },
    });

    return ubahBuku;
  }

  async remove(no_buku: number) {
    return this.prisma.buku.delete({ where: { no_buku } });
  }
}
