<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Daerah extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Daerah::create([
            'daerah' => 'Balebak'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Balio'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Perwira'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Bara'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Bateng'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Cibanteng'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Cangkurawok'
        ]);
        \App\Models\Daerah::create([
            'daerah' => 'Dramaga Cantik'
        ]);
    }
}
