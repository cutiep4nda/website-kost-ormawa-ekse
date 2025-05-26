<?php

namespace App\Http\Controllers;

use App\Models\Daerah;
use App\Models\Jenis;
use App\Models\Kost;
use App\Models\Pemilik;
use Auth;
use Illuminate\Http\Request;
use Storage;

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
        // dd($data);
        $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'harga' => 'required',
            'stock' => 'required',
            'deskripsi' => 'required',
            'jenis_id' => 'required',
            'daerah_id' => 'required',
            'pemilik_id' => 'required',
            'gambar' => 'required|array',
            'gambar.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:10000',
            'no_telp' => 'required'
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
        // dd($data);
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

    public function editKostPage($id){
        $data = Kost::where('id', $id)->get()->first();
        if($data == null){
            return to_route('dashboard');
        }
        $f_kamar = [
            "kulkas" => 0,
            "p_motor" => 0,
            "p_mobil" => 0,
            "pengurus_kos" => 0,
            "dapur" => 0,
            "wifi" => 0,
            "km_luar" => 0,
            "tv" => 0,
            "cctv" => 0,
            "lobby" => 0,
            "r_jemur" => 0,
            "mesin_cuci" => 0,
        ];
        $f_kost = [
            "kulkas" => 0,
            "p_motor" => 0,
            "p_mobil" => 0,
            "pengurus_kos" => 0,
            "dapur" => 0,
            "wifi" => 0,
            "km_luar" => 0,
            "tv" => 0,
            "cctv" => 0,
            "lobby" => 0,
            "r_jemur" => 0,
            "mesin_cuci" => 0,
        ];
        foreach ($f_kamar as $key => $value) {
            $f_kamar[$key] = $f_kamar[$key] | $data[$key];
        }
        foreach ($f_kost as $key => $value) {
            $f_kost[$key] = $f_kost[$key] | $data[$key];
        }
        return view('edit-kost', [
            'data' => $data,
            'pemilik' => $data->pemilik->nama_pemilik,
            'jenis' => $data->jenis->jenis,
            'daerah' => $data->daerah->daerah,
            'f_kamar' => $f_kamar,
            'f_kost' => $f_kost,
        ]);

    }

    public function editKost(Request $request, $id){
        $data = $request->request;
        $data_extracted = [];
        foreach ($data as $key => $value) {
            if($key != '_token'){
                $data_extracted = array_merge($data_extracted, [$key => $value]);
            }
        }
        $success = Kost::where('id', $id)->update($data_extracted);
        return redirect()->route('dashboard')->with('success', 'data berhasil diedit');


    }
    public function deleteKost($id){
        // dd($id);
        $kost = Kost::where('id', $id);
        if($kost == null){
            return redirect()->route('dashboard');
        }
        $gambar = $kost->get()->first();
        // dd(json_decode($gambar->gambar));
        if($kost->delete()){
            Storage::disk('public')->delete(json_decode($gambar->gambar));
            // echo "berhasil";
            return redirect()->route('dashboard');
        }
    }
}
