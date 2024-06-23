<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;

use App\Models\Course;
use App\Models\CourseLecture;
use Illuminate\Http\Request;

class CourseLectureController extends Controller
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
        # code... 
        $lecture = new CourseLecture();
        $lecture->course_id = $request->course_id;
        $lecture->section_id = $request->section_id;
        $lecture->lecture_title = $request->lecture_title;
        $lecture->content = $request->content;
        $lecture->url = $request->url;

        if ($lecture->save()) {
            # code...
            return redirect()->back()
                    ->with('message', 'Course lecture added successfully')
                    ->with('status', 'success');
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(CourseLecture $courseLecture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseLecture $courseLecture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseLecture $courseLecture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseLecture $courseLecture)
    {
        //
    }
}
