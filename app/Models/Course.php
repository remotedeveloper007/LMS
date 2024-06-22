<?php

namespace App\Models;

use App\Models\User;
use App\Models\Category;
use App\Models\CourseGoal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    protected $guarded = [];



    /**
     * Get the category that owns the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    /**
     * Define a one-to-many relationship with the CourseGoal model.
     * Get all of the goals for the Course
     * This method goals() defines a one-to-many relationship, indicating that a course   
     * can have multiple goals.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function goals() {
        return $this->hasMany(CourseGoal::class, 'course_id', 'id');
    }

    /**
     * Define an inverse one-to-many relationship with the User model
     * Get the instructor that owns the Course
     * This method instructor() defines an inverse one-to-many relationship, 
     * indicating that a course goal belongs to a single instructor.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id', 'id');
    }


}
