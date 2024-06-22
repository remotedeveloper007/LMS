<?php

namespace App\Http\Controllers\Instructor\Auth;

use App\Models\User;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Show the application's login form.
     *
     * @return \Illuminate\View\View
     */
    public function showLoginForm()
    {
        return Inertia::render('Instructor/Auth/Login');
    }

    public function login(Request $request) {
        # code... 
        $attributes = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (Auth::guard('instructor')->attempt($attributes, $request->remember)) {
            //
            if (Auth::guard('instructor')->user()->role != 'instructor') {
                # code...
                Auth::guard('instructor')->logout();
                //
                // return redirect()->route('instructor.request.login')->with([
                //     'message' => "You're not an authorized instructor.",
                //     'status' => 'error'
                // ]);
                return redirect()->back()->with([
                    'message' => "You're not authorized as an instructor.",
                    'status' => 'danger'
                ]);
            }

            $request->session()->regenerate();
 
            return redirect()->route('instructor.dashboard');
        } else {
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }
    }
}
