<?php

namespace App\Http\Controllers\Instructor;

use App\Http\Controllers\Controller;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Instructor/Dashboard');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function profile()
    {
        //
        return Inertia::render('Instructor/Profile');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $id = $this->guard()->user()->id;
        //
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;

        if ($request->file('photo')) {
            # code...
            $file = $request->file('photo');

            $oldImg = public_path('assets/upload/instructor_images/profile_img/'. $user->photo);
            if ($oldImg) {
                # code...
                @unlink($oldImg);
            }
            
            $fileName = date('YmdHis').$file->getClientOriginalName();
            $file->move(public_path('assets/upload/instructor_images/profile_img/'), $fileName);
            $user->photo = $fileName;
        }

        $user->save();

        return $data;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        // Auth::guard()->logout();
        $this->guard()->logout();

        // $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('instructor.request.login');
    }


    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('instructor');
    }

}
