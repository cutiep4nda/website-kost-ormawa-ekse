<?php

namespace App\Http\Controllers;

use App\Models\daerah;
use App\Models\Kost;
use Inertia\Inertia;


use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(){
        $allKosts = Kost::with(['daerah', 'jenis', 'pemilik'])->get();
        $kost = $allKosts->count() > 8 ? $allKosts->random(8) : $allKosts;
        $allKostsdaerah = Kost::where('daerah_id',1)->get();
        $kost_daerah = $allKostsdaerah->count() > 8 ? $allKostsdaerah->random(8) : $allKostsdaerah;

     
        $data_kost = [];
        foreach ($kost as $key => $value) {
            $data_kost[] = array_merge($kost[$key]->toArray(), array(
                'jenis' => $value->jenis->jenis,
                'daerah' => $value->daerah->daerah,
                'pemilik' => $value->pemilik->nama_pemilik
            ));
        }

        $data_kost_daerah = [];
        foreach ($kost_daerah as $key => $value) {
            $data_kost_daerah[] = array_merge($kost_daerah[$key]->toArray(), array(
                'jenis' => $value->jenis->jenis,
                'daerah' => $value->daerah->daerah,
                'pemilik' => $value->pemilik->nama_pemilik
            ));
        }


        // dd($data_kost_daerah);
        $daerah = Daerah::all();
        return Inertia::render('Home', ['kost' => $data_kost,'daerah' => $daerah, 'kost_daerah' => $data_kost_daerah]);
    }
}
