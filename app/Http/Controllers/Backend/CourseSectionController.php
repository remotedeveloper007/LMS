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
    public function getSections($id)
    {
        //
        $sections = CourseSection::where('course_id', $id)->with('lectures')->get();

        return response()->json([
            'status' => 200,
            'sections' => $sections
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $course_section = new CourseSection();
        $course_section->course_id = $request->course_id;
        $course_section->section_title = $request->section_title;
    
        if ($course_section->save()) {
            return redirect()->route('show.course',$request->course_id)
            ->with('message', 'Course Section added successfully')
            ->with('status', 'success');
        }
    
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
    public function destroy($id)
    {
        //
        $courseSection = CourseSection::findOrFail($id);

        //Delete all course section related lectures
        $courseSection->lectures()->delete();
        // dd($section);

        //Delete course section
        $courseSection->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Course Section deleted successfully!'
        ]);
    }
}
