<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;

use Inertia\Inertia;
use App\Models\CourseSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        // $request->validate([
        //     'section_title' => 'required',
        // ]);
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'section_title' => 'required',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator); // Pass validation errors to the view
                //->withInput(); // Keep user input in the session
        }
        //
        $course_section = new CourseSection();
        $course_section->course_id = $request->course_id;
        $course_section->section_title = $request->section_title;
        // dd($course_section);
        $course_section->save();
        
        return redirect()->back()->with([
            'message' => 'Course Section added successfully',
            'status' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CourseSection $courseSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseSection $courseSection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseSection $courseSection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseSection $courseSection)
    {
        //
    }
}
