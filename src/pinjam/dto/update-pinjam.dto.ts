import { PartialType } from '@nestjs/mapped-types';
import { CreatePinjamDto } from './create-pinjam.dto';

export class UpdatePinjamDto extends PartialType(CreatePinjamDto) {}
