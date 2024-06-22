<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\Auth\LoginController;
use App\Http\Controllers\User\Auth\RegisterController;



Route::prefix('user')->group(function () {  
    Route::middleware('guest')->group(function () {
        Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('register.request');
        Route::post('register', [RegisterController::class, 'register'])->name('user.register');

        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login.request');
        Route::post('login', [LoginController::class, 'login'])->name('login');    
    });

    //
    Route::group(['middleware' => 'auth'], function () {
        Route::get('dashboard', [UserController::class, 'index'])->name('user.dashboard');


        Route::get('logout', [UserController::class, 'logout'])->name('user.logout');
    });
    
});