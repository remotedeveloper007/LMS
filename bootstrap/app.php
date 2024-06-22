<?php

use Intervention\Image\Facades\Image;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AdminAuthenticate;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\InstructorAuthenticate;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\AdminRedirectIfAuthenticated;
use App\Http\Middleware\InstructorRedirectIfAuthenticated;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
        $middleware->alias([
            'admin.guest' => AdminRedirectIfAuthenticated::class,
            'admin.auth' => AdminAuthenticate::class,
            'instructor.guest' => InstructorRedirectIfAuthenticated::class,
            'instructor.auth' => InstructorAuthenticate::class,
            'Image' => Image::class
        ]);
        $middleware->redirectTo(
            guests: '/user/login',
            users: '/user/dashboard',
        );

        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
