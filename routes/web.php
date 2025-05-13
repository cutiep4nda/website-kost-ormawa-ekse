<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('app');
// });


// Route::get('/', function () {
//    return Inertia::render('Home');
// });
Route::get('/kos', function () {
   return Inertia::render('Kos');
});
// Route::get('/semua', function () {
//    return Inertia::render('Semua');
// });

Route::get('/login', [AdminController::class, "formLogin"])->name('login');
Route::post('login', [AdminController::class, "checkLogin"]);
Route::middleware("auth:admin")->group(function(){
    Route::get('/dashboard', [AdminController::class, "dashboard"])->name("dashboard");
    Route::get('/add-kost', [AdminController::class, "addKostPage"])->name('add-kost');
    Route::post('/add-kost', [AdminController::class, "addKost"]);
});