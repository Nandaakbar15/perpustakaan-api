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
    const data = this.bukuService.create(createBukuDto);
    return {
      statusCode: 201,
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.bukuService.findAll();
    return {
      statusCode: 200,
      data,
    };
  }

  @Get(':no_buku')
  async findOne(@Param('no_buku') no_buku: string) {
    const data = await this.bukuService.findOne(+no_buku);
    return {
      statusCode: 200,
      data,
    };
  }

  @Get('carijudul')
  async findJudul(@Param('judul') judul: string) {
    const data = await this.bukuService.findJudul(judul);
    return {
      statusCode: 200,
      data,
    };
  }

  @Patch(':no_buku')
  async update(
    @Param('no_buku') no_buku: string,
    @Body() updateBukuDto: UpdateBukuDto,
  ) {
    const data = await this.bukuService.update(+no_buku, updateBukuDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Delete(':no_buku')
  async remove(@Param('no_buku') no_buku: string) {
    const data = await this.bukuService.remove(+no_buku);
    return {
      statusCode: 200,
      data,
    };
  }
}
