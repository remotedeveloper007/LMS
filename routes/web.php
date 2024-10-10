<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\FrontendController;

// Route::get('/', function () {
//     return view('welcome');
// });



require __DIR__.'/admin.php';
require __DIR__.'/instructor.php';


Route::get('/', [FrontendController::class, 'index']);
Route::get('/categories', [FrontendController::class, 'fetchCategories']);
Route::get('/courses/{any}', [FrontendController::class, 'fetchCourse']);



// require __DIR__.'./user.php';



require __DIR__.'/auth.php';
