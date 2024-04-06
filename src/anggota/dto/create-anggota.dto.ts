import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAnggotaDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsString()
  alamat: string;

  @IsString()
  kota: string;

  @IsDate()
  tgl_lahir: Date;
}
