<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    // protected $rootView = 'app';  // default
    protected $rootView = 'layouts/app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        //
        $sharedData = parent::share($request);

        // Check if the user is authenticated
        if (Auth::guard('admin')->check()) {
            // Pass admin login details
            $sharedData['admin'] = Auth::guard('admin')->user()->only('id', 'name', 'email', 'role', 'photo');
        } elseif (Auth::guard('instructor')->check()) {
            // Pass instructor login details
            $sharedData['instructor'] = Auth::guard('instructor')->user()->only('id', 'name', 'email', 'username', 'role', 'photo', 'phone', 'address', 'status');
        } else {
            // Pass vendor login details
            $sharedData['auth'] = Auth::user();//->only('id', 'name', 'email', 'role', 'photo');
        }

        // Include flash message
        $sharedData['flash'] = [
            'type' => $request->session()->get('status'),
            'message' => $request->session()->get('message'),
        ];

        // Clear the session flash after it's been retrieved
        // Session::forget('message');
        // Session::forget('status');
       
        return $sharedData;

        /* 
        //default code below
        return array_merge(parent::share($request), [
            //
        ]);  */
    }
}
