import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinjamService } from './pinjam.service';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { UpdatePinjamDto } from './dto/update-pinjam.dto';

@Controller('pinjam')
export class PinjamController {
  constructor(private readonly pinjamService: PinjamService) {}

  @Post()
  async create(@Body() createPinjamDto: CreatePinjamDto) {
    const data = await this.pinjamService.create(createPinjamDto);
    return {
      statusCode: 201,
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.pinjamService.findAll();
    return {
      statusCode: 200,
      data,
    };
  }

  @Get(':no_pinjam')
  async findOne(@Param('no_pinjam') no_pinjam: string) {
    const data = await this.pinjamService.findOne(+no_pinjam);
    return {
      statusCode: 200,
      data,
    };
  }

  @Patch(':no_pinjam')
  async update(
    @Param('no_pinjam') no_pinjam: string,
    @Body() updatePinjamDto: UpdatePinjamDto,
  ) {
    const data = await this.pinjamService.update(+no_pinjam, updatePinjamDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Delete(':no_pinjam')
  async remove(@Param('no_pinjam') no_pinjam: string) {
    const data = await this.pinjamService.remove(+no_pinjam);
    return {
      statusCode: 200,
      data,
    };
  }
}
