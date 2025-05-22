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
        $data = [];
        foreach ($kost as $key => $value) {
            $data[] = array_merge($kost[$key]->toArray(), array(
                'jenis' => $value->jenis->jenis,
                'daerah' => $value->daerah->daerah,
                'pemilik' => $value->pemilik->nama_pemilik
            ));
        }
        return Inertia::render("Semua", ['kost' => $data]);
    }
    public function filter(Request $request){
        
        $data = $request->all();
        //dd($data);
        $search = $data['search'];
        $gender = $data['gender'];
        $daerah = $data['daerah']['nama'];
        
        $min_price = 0;
        if($data['min_price'] != 0){
            $min_price = $data['min_price'];
        }
        $max_price = 10000000;
        if($data['max_price'] != 0){
            $max_price = $data['max_price'];
        }
        
        $facilities = [];
        foreach($data['facilities'] as $value){
            if($value == "K. Mandi Dalam"){
                $facilities = array_merge($facilities, ['km_dalam']);
            }
            if($value == "AC"){
                $facilities = array_merge($facilities, ['ac']);
            }
            if($value == "Lemari"){
                $facilities = array_merge($facilities, ['lemari']);
            }
            if($value == "Wifi"){
                $facilities = array_merge($facilities, ['wifi']);
            }
            if($value == "Kipas"){
                $facilities = array_merge($facilities, ['kipas_angin']);
            }
            if($value == "Kasur"){
                $facilities = array_merge($facilities, ['kasur']);
            }
        }
        
        $kost = new Kost();
        foreach($facilities as $value){
            $kost = $kost->where($value, 1);
        }
        if($data['gender'] != ""){
            $kost = $kost->whereRelation('jenis', 'jenis', $gender);
        }
        $kost = $kost->whereBetween('harga', [$min_price, $max_price]);
        
        if($data['search'] != ""){
            $kost = $kost->where('nama', 'like', "%{$search}%")->orWhere('deskripsi', 'like', "%{$search}%");
        }

        if($data['daerah']['nama'] != ""){
            $kost = $kost->whereRelation('daerah', 'daerah', $daerah);
        }

        $kost = $kost->get();
        //$kost = $kost->toArray();
        $data = [];
        foreach ($kost as $key => $value) {
            $data[] = array_merge($kost[$key]->toArray(), array(
                'jenis' => $value->jenis->jenis,
                'daerah' => $value->daerah->daerah,
                'pemilik' => $value->pemilik->nama_pemilik
            ));
        }

        dd($data);
    }
}