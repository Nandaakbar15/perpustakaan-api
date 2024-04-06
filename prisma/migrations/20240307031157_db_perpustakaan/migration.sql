-- CreateTable
CREATE TABLE `buku` (
    `no_buku` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `pengarang` VARCHAR(191) NOT NULL,
    `tahun_terbit` VARCHAR(191) NOT NULL,
    `jenis_buku` VARCHAR(191) NOT NULL,
    `status` ENUM('TERSEDIA', 'TIDAK_TERSEDIA') NOT NULL,

    PRIMARY KEY (`no_buku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `anggota` (
    `id_anggota` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `kota` VARCHAR(191) NOT NULL,
    `tgl_lahir` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_anggota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pinjam` (
    `no_pinjam` INTEGER NOT NULL AUTO_INCREMENT,
    `id_anggota` INTEGER NOT NULL,
    `no_buku` INTEGER NOT NULL,
    `tgl_pinjam` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tgl_kembali` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`no_pinjam`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pinjam` ADD CONSTRAINT `pinjam_id_anggota_fkey` FOREIGN KEY (`id_anggota`) REFERENCES `anggota`(`id_anggota`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinjam` ADD CONSTRAINT `pinjam_no_buku_fkey` FOREIGN KEY (`no_buku`) REFERENCES `buku`(`no_buku`) ON DELETE RESTRICT ON UPDATE CASCADE;
