<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Admin/Dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function profile()
    {
        //
        $id = $this->guard()->user()->id;
        $profile = User::find($id);

        return Inertia::render('Admin/Profile', get_defined_vars());
        // return view('admin.profile', get_defined_vars());
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
    public function show(string $id)
    {
        //
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
    public function update(Request $request, User $user)
    {
        //
        $id = $this->guard()->user()->id;
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;

        if ($request->file('photo')) {
            # code...
            $file = $request->file('photo');

            $oldImg = public_path('assets/upload/admin_images/profile_img/'. $user->photo);

            if ($oldImg) {
                # code...
                @unlink($oldImg);
            }

            $fileName = date('YmdHis').$file->getClientOriginalName();
            $file->move(public_path('assets/upload/admin_images/profile_img/'), $fileName);
            $user->photo = $fileName;
        }

        $user->save();

        $notification = array(
            'message' => 'Admin Profile Updated Successfully.',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);
    }

    public function changePassword() {
        # code... 
        // $id = $this->guard()->user()->id;
        // $profile = User::find($id);
        // return view('admin.auth.change_password', get_defined_vars());
    }

    public function updatePassword(Request $request) {
        #code...
        $request->validate([
            'old_password' => 'required',
            'new_password' => ['required', 'confirmed', Rules\Password::defaults()]
        ]);

        if (!Hash::check($request->old_password, $this->guard()->user()->password)) {
            # code...
            $notification = array(
                'message' => 'Old password does not match.',
                'alert-type' => 'error'
            );

            return  redirect()->back()->with($notification);
        }

        // update new password
        User::whereId($this->guard()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        $notification = array(
            'message' => 'Password updated successfully.',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);
    }

    public function manageInstructor() {
        # code... 
        $instructors = User::where('role', 'instructor')->latest()->get();

        return Inertia::render('Admin/Instructor/ManageInstructor', get_defined_vars());
    }

    public function updateStatus(Request $request){
        # code ...
        $user_id = $request->id;
        $is_check = $request->status;

        $user = User::findOrFail($user_id);

        if ($user) {
            # code...
            $user->status = $is_check;
            $user->save();
        }


        return redirect()->route('all.instructor');     
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
        // Auth::guard('admin')->logout();
        $this->guard()->logout();

        // $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('admin.request.login');
    }


    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('admin');
    }

}
