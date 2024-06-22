import React, { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import InstructorPanel from '../../InstructorPanel';
import axios from 'axios';

const Courses = ({ courses }) => {
    const {flash} = usePage().props
    //
    useEffect(() => {
        // Initialize DataTable when the component mounts
        const table = $("#example2").DataTable({
            lengthChange: false,
            buttons: ["copy", "excel", "pdf", "print"]
        });
  
        // Append the DataTable buttons container to the desired location
        table.buttons().container().appendTo("#example2_wrapper .col-md-6:eq(0)");
  
        // Cleanup function to destroy DataTable when the component unmounts
        return () => table.destroy();
    }, []); // Empty dependency array ensures this effect runs only once on 

    const handleDelete = (e, id) => {
        e.preventDefault();
        const thisCourse = e.currentTarget;
        //
        Swal.fire({
            title: "Are you sure?",
            text: "Delete This Data?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`/instructor/delete/course/${id}`).then((res) => {
                    if (res.data.status === 200) {
                        // Remove the row from the DataTable
                        const table = $("#example2").DataTable();
                        // thisCourse.closest("tr").remove()
                        table.row(thisCourse.closest("tr")).remove().draw();
                        //
                        Toast.fire({
                            icon: 'success',
                            title: 'Course deleted successfully!',
                        });
                    } else {
                        //
                        Swal.fire("Error!", "Failed to delete course. Please try again later.", "error");
                    }
                }).catch(error => {
                    //
                    Swal.fire("Error!", "An error occurred while deleting the course.", "error");
                    // console.error('Error deleting course:', error);
                });
            }
        });        
    }

    { flash.message && Toast.fire({
        icon: flash.type,
        title: flash.message,
    })}
    

    return (
        <React.Fragment>
            <div className="page-content">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link href={ route('instructor.dashboard') }>
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    All Category
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="bth-group">
                            <Link
                                href={ route('create.course') }
                                className="btn btn-primary"
                            >
                                Add Course
                            </Link>
                        </div>
                    </div>
                </div>
                {/*end breadcrumb*/}
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                id="example2"
                                className="table table-striped table-bordered table-hover"
                            >
                                <thead>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Image</th>
                                        <th>Course Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*?php //dd($courses); ?*/}
                                    {courses.map((course, index) => (
                                        <tr key={index}>
                                            <td> { index + 1} </td>
                                            <td>
                                                <img
                                                    src={ `/${course.course_image}` }
                                                    alt="Course"
                                                    className="product-img-2"
                                                    id="showImage"
                                                />
                                            </td>
                                            <td> { course.course_name} </td>
                                            <td> { course.category.category_name } </td>
                                            <td> { course.selling_price} </td>
                                            <td> { course.discount_price} </td>
                                            <td>
                                                <Link href={ route('edit.course', course.id) }>
                                                    <i className="text-primary bx bx-edit h4" />
                                                </Link>
                                                <span className="h4">|</span>
                                                <Link href={ route('show.course', course.id) } title="Show Course">
                                                    {/* <i className="text-info bx bx-list-ol h4" /> */}
                                                    <span className="h4"><i className="text-info lni lni-eye"></i></span>
                                                </Link>
                                                <span className="h4">|</span>
                                                <span onClick={(e) => handleDelete(e, course.id)} id="delete" className="cursor-pointer">
                                                    <i className="text-danger bx bx-trash h4" />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Courses.layout = (page) => <InstructorPanel children={page}/>

export default Courses;
