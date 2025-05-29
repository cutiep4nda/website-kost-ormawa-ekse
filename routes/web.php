<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('app');
// });



Route::get('/', [HomeController::class, "home"])->name("home");

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
   Route::post('/logout', [AdminController::class, 'logout'])->name('logout');
    Route::get('/dashboard', [AdminController::class, "dashboard"])->name("dashboard");
    Route::get('/add-kost', [AdminController::class, "addKostPage"])->name('add-kost');
    Route::post('/add-kost', [AdminController::class, "addKost"]);

    Route::get('edit-kost/{id}', [AdminController::class, 'editKostPage'])->name('edit-kost');
    Route::post('/edit-kost/{id}', [AdminController::class, 'editKost'])->name('edit-kost-post');

    Route::post('/delete-kost/{id}', [AdminController::class, 'deleteKost'])->name('delete-kost');
});

Route::get('/kost/{id}', [KostController::class, "kost"])->name("kost");
// Route::get('/all-kost', [KostController::class, 'allKost'])->name('all-kost');

// Change POST to GET to match your frontend
Route::get('/filter', [KostController::class, 'filter'])->name("filter-kost");

// Keep the POST route for backward compatibility if needed
Route::post('/filter', [KostController::class, 'filter'])->name("filter-kost-post");
Route::get('/daerah/{daerah}', [KostController::class, 'daerah'])->name("kost-daerah");
