<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;

class KostController extends Controller
{
    public function kost($id){
        $kost = Kost::where('id', $id)->get();
        // dd($kost);
        return view('kost', ['data' => $kost[0]]);
    }
    public function allKost(){
        $kost = Kost::all();
        return view('all-kost', ['data' => $kost]);
    }
}
