<?php

namespace App\Http\Controllers;

use App\Models\Daerah;
use App\Models\Jenis;
use App\Models\Kost;
use App\Models\Pemilik;
use Auth;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function formLogin(){
        return view('login');
    }
    public function checkLogin(Request $request){
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        if(Auth::guard("admin")->attempt($credentials)){
            return redirect()->intended("/dashboard");
        }
        return back()->withErrors([
            'error' => 'The provided credentials do not match our records.',
        ]);
    }
    public function dashboard(){
        $data = Kost::all();
        return view('admin-kost', ['data' => $data]);
    }
    public function addKostPage(){
        $jenis_data = Jenis::all();
        $daerah_data = Daerah::all();
        $pemilik_data = Pemilik::all();

        return view('add-kost', [
            'jenis' => $jenis_data,
            'daerah' => $daerah_data,
            'pemilik' => $pemilik_data
        ]);
    }
    public function addKost(Request $request){
        // $data = $request;
        $request->validate([
            'nama' => 'required',
            'harga' => 'required',
            'stock' => 'required',
            'deskripsi' => 'required',
            'jenis_id' => 'required',
            'daerah_id' => 'required',
            'pemilik_id' => 'required',
            'wa_text' => 'required',
            'gambar' => 'required|array',
            'gambar.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:10000'
        ]);
        $data = [];
        foreach ($request->request as $key => $value) {
            // echo $key;
            // echo " : "; echo $value;
            // echo "<br>";
            if($value != null & $key != '_token'){
                $data = array_merge($data, [$key => $value]);
            }
        }
        // dd($request->pemilik_notfound);
        if($request->pemilik_notfound != null){
            // echo "yes";
            // dd();
            Pemilik::create(['nama_pemilik' => $request->pemilik_notfound]);
            $data = array_merge($data, ['pemilik_id' => Pemilik::latest('updated_at')->first()['id']]);
        }

        // dd($data);
        $files = [];
        foreach ($request->file('gambar') as $value) {
            $path = $value->store('images', 'public');
            array_push($files, $path);
        }
        $data = array_merge($data, ['gambar' => json_encode($files)]);
        Kost::create($data);
        return redirect()->route('dashboard')->with('success', 'data berhasil ditambahkan');
        // dd($files);

    }
}
