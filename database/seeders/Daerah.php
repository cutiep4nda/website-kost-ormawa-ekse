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
        \App\Models\daerah::create([
            'daerah' => 'Balebak'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Balio'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Perwira'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Bara'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Bateng'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Cibanteng'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Cangkurawok'
        ]);
        \App\Models\daerah::create([
            'daerah' => 'Dramaga Cantik'
        ]);
    }
}
