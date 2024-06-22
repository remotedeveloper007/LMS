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
    public function store(Request $request, $id)
    {
        //
        $course = Course::findOrFail($id);
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
