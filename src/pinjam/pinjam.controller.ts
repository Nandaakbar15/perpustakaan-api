import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PinjamService } from './pinjam.service';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { UpdatePinjamDto } from './dto/update-pinjam.dto';

@Controller('pinjam')
export class PinjamController {
  constructor(private readonly pinjamService: PinjamService) {}

  @Post()
  create(@Body() createPinjamDto: CreatePinjamDto) {
    return this.pinjamService.create(createPinjamDto);
  }

  @Get()
  findAll() {
    return this.pinjamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinjamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinjamDto: UpdatePinjamDto) {
    return this.pinjamService.update(+id, updatePinjamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinjamService.remove(+id);
  }
}
