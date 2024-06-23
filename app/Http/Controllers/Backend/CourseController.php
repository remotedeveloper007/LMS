<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;

use App\Models\Course;
use App\Models\Category;
use App\Models\CourseGoal;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use Illuminate\Support\Facades\DB;
use App\Services\FileUploadService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {    //sleep(10);
        $user_id = Auth::guard('instructor')->user()->id;
        $status = Auth::guard('instructor')->user()->status;
        $courses = Course::with('category:id,category_name')->where('instructor_id', $user_id)->orderBy('id','desc')->get();

        return Inertia::render('Instructor/Courses/index', get_defined_vars());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $categories = Category::latest()->get();
        $subcategories = SubCategory::latest()->get();

        return Inertia::render('Instructor/Courses/Add', get_defined_vars());
    }

    public function getSubCategory($category_id) {
        $subcategories = SubCategory::where('category_id', $category_id)->orderBy('subcategory_name', 'ASC')->get();

        //
        return response()->json([
            'status' => 200,
            'subcategories' => $subcategories
        ]);
    }    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, FileUploadService $fileUploadService)
    {   
        //
        $request->validate([
            'video' => 'required|max:100000',
        ]);
        // dd($request->all());
        
        /* This initiates a database transaction. Transactions are used to ensure data consistency, allowing all database operations to succeed or fail together. */
        DB::beginTransaction();

        
        try {
            # Upload course image  course_image
            if ($request->file('course_image')) {  //dd($request->course_image);
                # code ... 
                $folder = 'course/thumbnail';
                $image = $request->file('course_image');
                $image_url = $fileUploadService->uploadImage($image, $folder);
            }
            
            # Upload course video
            if ($request->hasFile('video')) { //dd($request->video);
                # code ...
                $folder = 'course/video';
                $video = $request->file('video');
                $video_url = $fileUploadService->uploadVideo($video, $folder);
            }
            
            /*
             1. This creates a new course record in the database using Laravel's Eloquent ORM.
             2. It automatically sets the 'instructor_id' field to the authenticated user's ID using the Auth::user() helper.
            */
            $user = Auth::guard('instructor')->user();
            $course = $user->courses()->create([
                'category_id' => $request->category_id,
                'subcategory_id' => $request->subcategory_id,
                //'instructor_id' => It automatically sets the 'instructor_id' field to the authenticated user's ID using the Auth::user() helper.
                'course_name' => $request->course_name,
                'course_name_slug' => strtolower(str_replace(' ', '-', $request->course_name)),
                'course_title' => $request->course_title,
                'course_image' => $image_url,
                'description' => $request->course_description,
                'video' => $video_url,
                // Add other fields here        
                'label' => $request->course_label,
                'duration' => $request->duration,
                'resources' => $request->resources,
                'certificate' => $request->certificate,
                'selling_price' => $request->selling_price,
                'discount_price' => $request->discount_price,
                'prerequisite' => $request->prerequisite,
                'bestseller' => $request->best_seller,
                'featured' => $request->featured,
                'highest_rated' => $request->highest_rated
            ]);
            
            /** If the request contains 'course_goals', it iterates over each goal and  
             *  creates a new 'CourseGoal' record associated with the created course. 
            */
            if ($request->has('course_goals')) {
                # code...
                foreach ($request->course_goals as $goal) {
                    # code...
                    $course->goals()->create(['goal_name' => $goal]);
                }
            }         
            
            /* If all database operations within the transaction block are successful, then only this commits the changes to the database, ensuring data consistency. */
            DB::commit();            
            //exit;

            $notification = [
                'status' => 'success',
                'message' => 'Course created successfully!',
            ];

            //
            return redirect()->route('all.course')->with($notification);
        } catch (\Throwable $e) {
            # code ...
            /*If any exception occurs during the process, the transaction is rolled back without making any changes to the database to maintain data consistency. */
            DB::rollback();
            // dd($e->getMessage());
            return redirect()->back()->with([
                'message' => $e->getMessage(),
                'status' => 'error'
            ]);
        }

        //return $request->all();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $course = Course::findOrFail($id);

        return Inertia::render('Instructor/Courses/Show', [
            'course' => $course,
            'description' => strip_tags($course->description)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        // $course = Course::findOrFail($id)->with();
        $course = Course::findOrFail($id);
        $goals = CourseGoal::where('course_id', $id)->get();
        $categories = Category::latest()->get();

        return Inertia::render('Instructor/Courses/Edit', get_defined_vars());

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $course_id = $request->course_id;
                
        try {
            $course = Course::findOrFail($course_id);
            
            // Update other fields
            $course->category_id = $request->category_id;
            $course->subcategory_id = $request->subcategory_id;
            $course->course_name = $request->course_name;
            $course->course_name_slug = strtolower(str_replace(' ', '-', $request->course_name));
            $course->course_title = $request->course_title;
            $course->description = $request->course_description;
            // Add other fields here
            $course->label = $request->course_label;
            $course->duration = $request->duration;
            $course->resources = $request->resources;
            $course->certificate = $request->certificate;
            $course->selling_price = $request->selling_price;
            $course->discount_price = $request->discount_price;
            $course->prerequisite = $request->prerequisite;
            $course->bestseller = $request->best_seller;
            $course->featured = $request->featured;
            $course->highest_rated = $request->highest_rated;

            $course->save();

            return redirect()->route('all.course')->with([
                'message' => 'Course updated successfully',
                'status' => 'success'
            ]);

        } catch (\Exception $e) {
            return redirect()->back()->with([
                'message' => $e->getMessage(),
                'status' => 'error'
            ]);
        }
    }

    /**
     * update course image
     */
    public function updateImage(Request $request, FileUploadService $fileUploadService) {
        # code ...   
        $course_id = $request->course_id;
        $course = Course::findOrFail($course_id);
        $oldImg = $course->course_image;

        if ($request->file('course_image')) {
            # code...
            // dd($request->all());
            if (file_exists($oldImg)) {
                # code...
                unlink($oldImg);
            }

            $folder = 'course/thumbnail';
            $image = $request->file('course_image');
            $image_url = $fileUploadService->uploadImage($image, $folder);

            $course->update([
                'course_image' => $image_url
            ]);

            return redirect()->back()->with([
                'message' => 'Course image updated successfully.',
                'status' => 'success'
            ]);
        } else {
            # code...
            return redirect()->back()->with([
                'message' => 'Select image to update!',
                'status' => 'error'
            ]);
        }

        return $request->all();
    }

    public function updateVideo(Request $request, FileUploadService $fileUploadService) {
        $course_id = $request->course_id;
        $course = Course::findOrFail($course_id);
        $oldVid = $course->video;
        
        if ($request->file('video')) {
            # code... //dd($request->all());
            if (file_exists($oldVid)) {
                # code...
                unlink($oldVid);
            }

            $folder = 'course/video';
            $video = $request->file('video');
            $video_url = $fileUploadService->uploadVideo($video, $folder);

            $course->update([
                'video' => $video_url
            ]);

            return redirect()->back()->with([
                'message' => 'Course video updated successfully.',
                'status' => 'success'
            ]);
        } else {
            # code...
            return redirect()->back()->with([
                'message' => 'Select video to update!',
                'status' => 'error'
            ]);
        }  
    }

    public function updateCourseGoas(Request $request) {
        $cid = $request->id;

        if($request->course_goals == NULL) {
            return redirect()->back();
        } else {
            CourseGoal::where('course_id', $cid)->delete();

            $goals = count($request->course_goals);
            if ($goals != NULL) {
                # code...
                for ($i=0; $i < $goals; $i++) { 
                    # code...
                    $cgoal = new CourseGoal();
                    $cgoal->course_id = $cid;
                    $cgoal->goal_name = $request->course_goals[$i];
                    $cgoal->save();
                }
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Find the course by ID
        $course = Course::findOrFail($id); 

        // Delete associated goals
        // $course->goals()->delete();

        // Optionally, delete associated files
        $img = $course->course_image;
        $video = $course->video;
        @unlink($img);
        @unlink($video);

        // Delete the course
        $course->delete();

        // Delete associated course goals
        $courseGoals = CourseGoal::where('course_id', $id)->get();
        foreach ($courseGoals as $row) {
            # code...
            $goalId = $row->id;
            CourseGoal::where('course_id', $id)->delete();
        }

        // Set a success message
        // $notification = array(
        //     'message' => 'Course deleted successfully!',
        //     'alert-type' => 'success'
        // );

        // Redirect back with the success message
        // return redirect()->route('all.course')->with($notification);
        return response()->json([
            'status' => 200,
            'message' => 'Course deleted successfully!'
        ]);
    }
}
