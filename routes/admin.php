<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\SubCategoryController;










Route::group(['prefix' => 'admin'], function () {
    //
    Route::group(['middleware' => 'admin.guest'],function () {
        Route::get('login', [LoginController::class, 'showLoginForm'])->name('admin.request.login');

        Route::post('login', [LoginController::class, 'login'])->name('admin.login');
    });


    //
    Route::group(['middleware' => 'admin.auth'],function () {
        Route::get('dashboard', [AdminController::class, 'index'])->name('admin.dashboard'); 
        
        Route::get('profile', [AdminController::class, 'profile'])->name('admin.profile');

        Route::patch('profile/update', [AdminController::class, 'update'])->name('admin.profile.update');
    
        Route::get('change/password', [AdminController::class, 'changePassword'])->name('admin.reset.password');
        Route::post('update/password', [AdminController::class, 'updatePassword'])->name('admin.update.password');
        
        Route::get('logout', [AdminController::class, 'logout'])->name('admin.logout'); 
    
        /**
         * Route for CategoryController only in group
         */
        Route::controller(CategoryController::class)->group(function() {
            Route::get('/all/category', 'index')->name('all.category');
    
            Route::get('/add/category', 'create')->name('add.category');
    
            Route::post('/store/category', 'store')->name('store.category');
    
            Route::get('edit/category/{any}', 'edit')->name('edit.category');
    
            Route::patch('/update/category', 'update')->name('update.category');
    
            Route::get('delete/category/{any}', 'destroy')->name('delete.category');
        });
    
        /**
         * All Route for SubCategoryController only in group
         */
        Route::controller(SubCategoryController::class)->group(function() {
            Route::get('/all/subcategory', 'index')->name('all.subcategory');
    
            Route::get('/add/subcategory', 'create')->name('add.subcategory');
    
            Route::post('/store/subcategory', 'store')->name('store.subcategory');
    
            Route::get('edit/subcategory/{any}', 'edit')->name('edit.subcategory');
    
            Route::patch('/update/subcategory', 'update')->name('update.subcategory');
    
            Route::get('delete/subcategory/{any}', 'destroy')->name('delete.subcategory');
        });
    
        Route::controller(AdminController::class)->group(function() {
            Route::get('/all/instructore', 'manageInstructor')->name('all.instructor');
    
            Route::post('update/user/status', 'updateStatus')->name('update.user.status');
        });        

    });
});
