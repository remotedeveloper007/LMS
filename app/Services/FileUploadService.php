<?php 

namespace App\Services;

// use Intervention\Image\Facades\Image;  // older version
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;

class FileUploadService 
{
    /**
     * Uploads an image to a specified folder and returns the URL of the uploaded image.
     *
     * @param mixed $image The image file to be uploaded.
     * @param string $folder The folder where the image will be saved.
     * @throws Some_Exception_Class A description of the exception that may be thrown.
     * @return string The URL of the uploaded image.
     */
    public function uploadImage($image, $folder) {
        # create image manager with desired driver
        $manager = new ImageManager(new Driver());
        $image_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

        // read image from file system
        $img = $manager->read($image);
        $img = $img->resize(370, 246);
        
        // save modified image in new format 
        $img->toJpeg()->save(public_path("assets/upload/$folder/".$image_name));

        //Image::make($image)->resize(370, 246)->save(public_path("assets/upload/$folder/".$image_name));  // older version
        $image_url = "assets/upload/$folder/".$image_name;

       return $image_url;
    }

    public function uploadVideo($video, $folder){
        # code ... 
        $video_name = $video->hashName(); // Generates a unique filename
        $video->move(public_path("assets/upload/$folder"), $video_name);
        $video_url = "assets/upload/$folder/".$video_name;

        return $video_url;
    }

    public function updateImage($image, $folder, $existingFile) {
        # code ... 
        if ($existingFile && Storage::exists($existingFile)) {
            # code...
            Storage::delete($existingFile);
        }
    }

    public function updateVideo($video, $folder, $existingFile) {
        # code ...
        if ($existingFile && Storage::exists($existingFile)) {
            # code...
            Storage::delete($existingFile);
        }
        
    }
}




