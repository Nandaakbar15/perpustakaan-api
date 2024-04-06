import { Injectable } from '@nestjs/common';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { UpdateAnggotaDto } from './dto/update-anggota.dto';

@Injectable()
export class AnggotaService {
  create(createAnggotaDto: CreateAnggotaDto) {
    return 'This action adds a new anggota';
  }

  findAll() {
    return `This action returns all anggota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anggota`;
  }

  update(id: number, updateAnggotaDto: UpdateAnggotaDto) {
    return `This action updates a #${id} anggota`;
  }

  remove(id: number) {
    return `This action removes a #${id} anggota`;
  }
}
