import { IsDate, IsNotEmpty } from 'class-validator';
export class CreatePinjamDto {
  @IsNotEmpty()
  @IsDate()
  tgl_pinjam: Date;

  @IsNotEmpty()
  @IsDate()
  tgl_kembali: Date;

  // Add fields for associating Anggota and Buku
  id_anggota: number;
  no_buku: number;
}
