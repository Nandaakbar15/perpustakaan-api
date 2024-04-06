import { Injectable } from '@nestjs/common';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { UpdatePinjamDto } from './dto/update-pinjam.dto';

@Injectable()
export class PinjamService {
  create(createPinjamDto: CreatePinjamDto) {
    return 'This action adds a new pinjam';
  }

  findAll() {
    return `This action returns all pinjam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pinjam`;
  }

  update(id: number, updatePinjamDto: UpdatePinjamDto) {
    return `This action updates a #${id} pinjam`;
  }

  remove(id: number) {
    return `This action removes a #${id} pinjam`;
  }
}
