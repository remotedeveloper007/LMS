<?php

namespace App\Models;

use App\Models\CourseLecture;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseSection extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * Get all of the lectures for the CourseSection
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lectures() {
        # code ...
        return $this->hasMany(CourseLecture::class, 'section_id', 'id');
    }

}
