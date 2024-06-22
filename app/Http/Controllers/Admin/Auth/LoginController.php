<?php

namespace App\Http\Controllers\Admin\Auth;

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
        return Inertia::render('Admin/Auth/Login');
    }

    public function login(Request $request) {
        # code... 
        $attributes = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (Auth::guard('admin')->attempt($attributes, $request->remember)) {
            //
            if (Auth::guard('admin')->user()->role != 'admin') {
                # code...
                Auth::guard('admin')->logout();
                // $request->session()->invalidate();

                // return redirect()->route('admin.request.login')->with([
                //     'message' => "You aren't authorized as an Admin",
                //     'status' => 'error'
                // ]);
                return redirect()->back()->with([
                    'message' => "You aren't authorized as an Admin",
                    'status' => 'danger'
                ]);
            }

            $request->session()->regenerate();
 
            // return redirect()->intended(route('admin.dashboard'));
            return redirect()->route('admin.dashboard');
        } else {
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }
    }
}
