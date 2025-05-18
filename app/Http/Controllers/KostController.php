<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use App\Models\Pemilik;
use App\Models\daerah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KostController extends Controller
{
    public function kost($id){
        $kost = Kost::where('id', $id)->get();
        $pemilik = Pemilik::where('id',$kost[0]->pemilik_id)->first();
        $daerah = Daerah::where('id',$kost[0]->daerah_id)->first();
    
       

        // return view('kost', ['data' => $kost[0]]);
        return Inertia::render("Kos", 
        ['data' => $kost,
         'pemilik' => $pemilik->nama_pemilik,
         'daerah' => $daerah->daerah]);
    }
    public function allKost(){
        $kost = Kost::all();
        return Inertia::render("Semua", ['kost' => $kost]);
    }
}
