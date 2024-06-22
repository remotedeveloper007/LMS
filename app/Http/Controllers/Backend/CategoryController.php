<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
// use Intervention\Image\Facades\Image;
use App\Services\FileUploadService;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::latest()->get();

        return Inertia::render('Admin/Category/Category', get_defined_vars());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Category/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, FileUploadService $fileUploadService)
    {
        $request->validate([
            'category_name' => 'required',
            'image' => 'required',
        ]);

        // return $request->all();
        //

        if ($request->file('image')) {
            # code...
            $image = $request->file('image');
            $folder = 'category';
            $image_url = $fileUploadService->uploadImage($image, $folder);


            // $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            // Image::make($image)->resize(370, 246)->save('assets/upload/category/'.$name_gen);
            // $image_url = 'assets/upload/category/'.$name_gen;
        }

        Category::insert([
            'category_name' => $request->category_name,
            // 'category_slug' => strtolower(str_replace(' ', '-', $request->category_name)),
            'category_slug' => Str::slug($request->category_name),
            'image' => $image_url
        ]);

        // $notification = array(
        //     'message' => 'Category added successfully.',
        //     'alert-type' => 'success'
        // );

        // return redirect()->route('all.category')->with($notification);
        return redirect()->route('all.category');        
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
        $category = Category::findOrFail($id);

        return Inertia::render('Admin/Category/Edit', get_defined_vars());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $category = Category::findOrFail($request->id);
        $category->category_name = $request->category_name;
        $category->category_slug = Str::slug($request->category_name);

        if ($request->file('image')) {
            # code...
            
            $catImg = public_path($category->image);

            if ($catImg) {
                # code...
                @unlink($catImg);
            }

            $image = $request->file('image');
            $folder = 'category';
            $image_url = $fileUploadService->uploadImage($image, $folder);

            // $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            // Image::make($image)->resize(370, 246)->save('assets/upload/category/'.$name_gen);
            // $category->image = 'assets/upload/category/'.$name_gen;

            $category->image = $image_url;
        }
        $category->save();

        // return redirect()->route('all.category')->with($notification);
        return redirect()->route('all.category');        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

    }
}
