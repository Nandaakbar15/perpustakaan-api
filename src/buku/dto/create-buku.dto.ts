import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum Status {
  Tersedia = 'TERSEDIA',
  Tidak_tersedia = 'TIDAK_TERSEDIA',
}

export class CreateBukuDto {
  @IsNotEmpty()
  @IsString()
  judul: string;

  @IsString()
  pengarang: string;

  @IsString()
  tahun_terbit: string;

  @IsString()
  jenis_buku: string;

  status: Status;
}
