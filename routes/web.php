<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::get('/app', [AppController::class, 'index'])->name('app');

    Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates');
    Route::get('/certificates/{id}/show', [CertificateController::class, 'show'])->name('certificate.show');

    Route::get('/students', [StudentController::class, 'index'])->name('students');
});
