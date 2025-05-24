<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Kost extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Kost::create([
            'daerah_id' => 1,
            'jenis_id' => 1,
            'pemilik_id' => 1,
            'ukuran' => '3 x 4 meter',
            'ac' => 1,
            'bantal' => 1,
            'kasur' => 1,
            'lemari' => 1,
            'kipas_angin' => 1,
            'km_dalam' => 1,
            'kulkas' => 1,
            'p_motor' => 1,
            'p_mobil' => 1,
            'pengurus_kos' => 1,
            'dapur' => 1,
            'wifi' => 1,
            'lainnya' => 'Ini adalah kost terbaik',
            "nama" => "Kost Risbang",
            'harga' => 1000000,
            'deskripsi' => "lorem ipsum dolor sit amet",
            'meja_belajar' => 1,
            'gambar' => '["images\/gambar-1.jpg", "images\/gambar-2.jpg", "images\/gambar-3.jpg"]',
            'no_telp' => '0895402965052'
        ]);
    }
}
