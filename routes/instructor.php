<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\CourseLectureController;
use App\Http\Controllers\Backend\CourseSectionController;
use App\Http\Controllers\Instructor\Auth\LoginController;
use App\Http\Controllers\Instructor\InstructorController;
use App\Http\Controllers\Instructor\Auth\RegisterController;





Route::group(['prefix' => 'instructor'], function () {
    //
    Route::group(['middleware' => 'instructor.guest'],function () {
        Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('instructor.request.register');

        Route::post('register', [RegisterController::class, 'register'])->name('instructor.register');

        Route::get('login', [LoginController::class, 'showLoginForm'])->name('instructor.request.login');

        Route::post('login', [LoginController::class, 'login'])->name('instructor.login');
    });


    Route::group(['middleware' => 'instructor.auth'],function () {
        //
        Route::get('dashboard', [InstructorController::class, 'index'])->name('instructor.dashboard');


        Route::get('profile', [InstructorController::class, 'profile'])->name('instructor.profile');
        Route::patch('profile/update', [InstructorController::class, 'update'])->name('instructor.profile.update');
    
        Route::get('change/password', [InstructorController::class, 'changePassword'])->name('instructor.reset.password');
        Route::post('update/password', [InstructorController::class, 'updatePassword'])->name('instructor.update.password');        
        

        Route::get('logout', [InstructorController::class, 'logout'])->name('instructor.logout');



        /**
         * Route for CourseController Group
         */
        Route::controller(CourseController::class)->group(function() {
            Route::get('/all/course', 'index')->name('all.course');

            Route::get('/create/course', 'create')->name('create.course');
            Route::post('/store/course', 'store')->name('store.course');
            Route::get('/show/course/{any}', 'show')->name('show.course');
            Route::get('/edit/course/{any}', 'edit')->name('edit.course');
            Route::post('/update/course', 'update')->name('update.course');
            Route::get('/delete/course/{any}', 'destroy')->name('delete.course');

            Route::post('/update/course/image', 'updateImage')->name('update.course_image');

            Route::post('/update/course/video', 'updateVideo')->name('update.video');

            Route::post('/update/course/goal', 'updateCourseGoas')->name('update.course.goal');

            //
            Route::get('/subcategories/{any}','getSubCategory')->name('fetch.subcategory');
        });
        

        /**
         * Route for CourseSectionController Group
         */
        Route::controller(CourseSectionController::class)->group(function() {
            //
            Route::get('/course/sections/{any}', 'getSections')->name('course.section');

            Route::post('/add/course/section/', 'store')->name('add.course.section'); //

            Route::get('/delete/course/section/{any}', 'destroy')->name('delete.course.section');
        });


        /**
         * Route for Course Lecture
        */
        Route::controller(CourseLectureController::class)->group(function() {
            Route::post('add/course/lecture', 'store')->name('add.course.lecture');
        });

    });

});