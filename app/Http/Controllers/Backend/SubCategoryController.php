<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $subcategories = SubCategory::with('category:id,category_name')->latest()->get();

        return Inertia::render('Admin/SubCategory/SubCategory', get_defined_vars());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $categories = Category::latest()->get();

        return Inertia::render('Admin/SubCategory/Add', get_defined_vars());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        SubCategory::insert([
            'category_id' => $request->category_id,
            'subcategory_name' => $request->subcategory_name,
            // 'category_slug' => strtolower(str_replace(' ', '-', $request->category_name)),
            'subcategory_slug' => Str::slug($request->subcategory_name)
        ]);

        // $notification = array(
        //     'message' => 'SubCategory added successfully.',
        //     'alert-type' => 'success'
        // );

        // return redirect()->route('all.subcategory')->with($notification);
        return redirect()->route('all.subcategory');
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
        $categories = Category::latest()->get();
        $subcategory = SubCategory::findOrFail($id);

        return Inertia::render('Admin/SubCategory/Edit', get_defined_vars());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $subcategory = SubCategory::findOrFail($request->id);
        $subcategory->category_id = $request->category_id;
        $subcategory->subcategory_name = $request->subcategory_name;
        $subcategory->subcategory_slug = Str::slug($request->subcategory_name);
        $subcategory->save();
            
        // $notification = array(
        //     'message' => 'SubCategory updated successfully.',
        //     'alert-type' => 'success'
        // );

        // return redirect()->route('all.subcategory')->with($notification);
        return redirect()->route('all.subcategory');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
