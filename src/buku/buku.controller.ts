import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BukuService } from './buku.service';
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';
import { CreatePinjamDto } from 'src/pinjam/dto/create-pinjam.dto';
import { CreateAnggotaDto } from 'src/anggota/dto/create-anggota.dto';

@Controller('buku')
export class BukuController {
  constructor(private readonly bukuService: BukuService) {}

  @Post()
  create(@Body() createBukuDto: CreateBukuDto) {
    return this.bukuService.create(createBukuDto);
  }

  @Get()
  findAll() {
    return this.bukuService.findAll();
  }

  @Get(':no_buku')
  findOne(@Param('no_buku') no_buku: string) {
    return this.bukuService.findOne(+no_buku);
  }

  @Get('carijudul')
  findJudul(@Param('judul') judul: string) {
    return this.bukuService.findJudul(judul);
  }

  @Patch(':no_buku')
  update(
    @Param('no_buku') no_buku: string,
    @Body() updateBukuDto: UpdateBukuDto,
  ) {
    return this.bukuService.update(+no_buku, updateBukuDto);
  }

  @Delete(':no_buku')
  remove(@Param('no_buku') no_buku: string) {
    return this.bukuService.remove(+no_buku);
  }
}
