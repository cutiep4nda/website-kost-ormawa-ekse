<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Jenis extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Jenis::create([
            'jenis' => 'Putra'
        ]);
        \App\Models\Jenis::create([
            'jenis' => 'Putri'
        ]);
        \App\Models\Jenis::create([
            'jenis' => 'Campur'
        ]);
    }
}
