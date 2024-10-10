<?php

namespace App\Http\Controllers\Frontend;

use DB;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Course;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class FrontendController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Frontend');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function fetchCategories()
    {
        //
        $categories = Category::latest()->withCount('courses')->limit(6)->get();
        // Dump the query log
        // dd($categories);
        return response()->json([
            'categories' => $categories,
            'status' => 200
        ]);
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
    public function fetchCourse($id)
    {
        // Determine the query based on the ID
        if ($id === 'all') {
            $courses = Course::where('status', 1)->with('instructor')
                ->orderBy('id', 'ASC')
                ->limit(6)
                ->get();
        } else {
            $courses = Course::where([
                'category_id' => $id,
                'status' => 1
            ])->with('instructor')->orderBy('id', 'ASC')->limit(6)->get();
        }
        // dd($courses);
        return response()->json([
            'courses' => $courses,
            'status' => 200
        ], 200);
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
