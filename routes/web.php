<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\KostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('app');
// });


Route::get('/', function () {
   return Inertia::render('Home');
});
Route::get('/kos', function () {
   return Inertia::render('Kos');
});
Route::get('/premium', function () {
   return Inertia::render('Premium/Premium1');
});
Route::get('/premium2', function () {
   return Inertia::render('Premium/Premium2');
});

Route::get('/semua', [KostController::class, "allkost"])->name("all-kost");

Route::get('/login', [AdminController::class, "formLogin"])->name('login');
Route::post('login', [AdminController::class, "checkLogin"]);
Route::middleware("auth:admin")->group(function(){
    Route::get('/dashboard', [AdminController::class, "dashboard"])->name("dashboard");
    Route::get('/add-kost', [AdminController::class, "addKostPage"])->name('add-kost');
    Route::post('/add-kost', [AdminController::class, "addKost"]);
});

Route::get('/kost/{id}', [KostController::class, "kost"])->name("kost");
// Route::get('/all-kost', [KostController::class, 'allKost'])->name('all-kost');
