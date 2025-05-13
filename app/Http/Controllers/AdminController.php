<?php

namespace App\Http\Controllers;

use App\Models\Kost;
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
        return view('add-kost');
    }
    public function addKost(Request $request){

    }
}
