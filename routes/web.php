<?php

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
Route::get('/semua', function () {
   return Inertia::render('Semua');
});
