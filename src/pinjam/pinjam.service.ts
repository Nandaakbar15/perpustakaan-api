import { Injectable } from '@nestjs/common';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { UpdatePinjamDto } from './dto/update-pinjam.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PinjamService {
  constructor(private prisma: PrismaService) {}
  async create(createPinjamDto: CreatePinjamDto) {
    const addPinjam = await this.prisma.pinjam.create({
      data: {
        ...createPinjamDto,
      },
    });

    return addPinjam;
  }

  async findAll() {
    const getPinjamAll = await this.prisma.pinjam.findMany();
    return getPinjamAll;
  }

  async findOne(no_pinjam: number) {
    const findPinjamOne = await this.prisma.pinjam.findUnique({
      where: {
        no_pinjam,
      },
    });

    if (!findPinjamOne) {
      throw new Error('Pinjam not found');
    }

    return findPinjamOne;
  }

  async update(no_pinjam: number, updatePinjamDto: UpdatePinjamDto) {
    const updatePinjam = await this.prisma.pinjam.update({
      where: { no_pinjam },
      data: {
        ...updatePinjamDto,
      },
    });

    if (!updatePinjam) {
      throw new Error('Pinjam not found');
    }

    return updatePinjam;
  }

  async remove(no_pinjam: number) {
    const deletePinjam = await this.prisma.pinjam.delete({
      where: { no_pinjam },
    });

    if (!deletePinjam) {
      throw new Error('Pinjam not found');
    }

    return deletePinjam;
  }
}
