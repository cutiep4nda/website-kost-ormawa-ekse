<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('app');
// });
Route::get('home', function () {
    return Inertia::render('Errors/404');
});
