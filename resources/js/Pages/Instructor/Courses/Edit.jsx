import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InstructorPanel from "../../InstructorPanel";
// import InputError from "../../../Components/InputError";
import axios from "axios";
import UpdateImageForm from "./UpdateImageForm ";
import UpdateVideoForm from "./UpdateVideoForm";
import EditCourseGoals from "./EditCourseGoals";

const EditCourse = ({ course, categories, goals, flash }) => {
    //
    let { data, setData, post, errors, reset } = useForm({
        //
        course_id: course.id,
        course_name: course.course_name,
        course_title: course.course_title,
        category_id: course.category_id,
        subcategory_id: course.subcategory_id,
        certificate: course.certificate,
        course_label: course.label,
        selling_price: course.selling_price,
        discount_price: course.discount_price,
        duration: course.duration,
        resources: course.resources,
        prerequisite: course.prerequisite,
        course_description: course.description,
        best_seller: course.best_seller,
        featured: course.featured,
        highest_rated: course.highest_rated,
    });

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        //
        // $("#course_image").change(function (e) {
        //     let reader = new FileReader();
        //     reader.onload = function (e) {
        //         $("#showImage").attr("src", e.target.result);
        //         setImagePreview(e.target.result); // Update image preview directly
        //     };
        //     reader.readAsDataURL(e.target.files[0]);
        // });

        //
        fetchSubcategories(data.category_id);
    }, [data.category_id]);

    const handleChange = (e) => {
        e.persist();
        setData((values) => ({ ...values, [e.target.name]: e.target.value }));
    };

    const fetchSubcategories = async (categoryId) => {
        try {
            const res = await axios.get(
                `/instructor/subcategories/${categoryId}`
            );
            if (res.data.status === 200) {
                setSubcategories(res.data.subcategories);
            }
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("update.course"), {
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                console.error("Error updating course:", errors);
            },
        });
    };

    {
        flash.message &&
            Toast.fire({
                icon: flash.type,
                title: flash.message,
            });
    }




    return (
        <React.Fragment>
            <div className="page-content mb-0">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link href={route("instructor.dashboard")}>
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Edit Course
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="bth-group">
                            <Link
                                href={route("all.course")}
                                className="btn btn-primary"
                            >
                                All Course
                            </Link>
                        </div>
                    </div>
                </div>
                {/*end breadcrumb*/}

                <div className="row">
                    <div className="col-xl-12 mx-auto">
                        <form id="myForm" onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="d-flex justify-content-center">
                                        Edit Course Form
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="input3"
                                                    className="form-label"
                                                >
                                                    Course Name:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="course_name"
                                                        value={data.course_name}
                                                        className="form-control"
                                                        id="input3"
                                                        category=""
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="hidden"
                                                        value={data.course_id}
                                                        name="course_id"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Name  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="input3"
                                                    className="form-label"
                                                >
                                                    Course Title:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="course_title"
                                                        value={
                                                            data.course_title
                                                        }
                                                        className="form-control"
                                                        id="input3"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Title  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="category_id"
                                                    className="form-label"
                                                >
                                                    Course Category:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <select
                                                        name="category_id"
                                                        id="category_id"
                                                        className="form-select"
                                                        value={data.category_id}
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value=""
                                                            disabled=""
                                                        >
                                                            Select Course
                                                            Category
                                                        </option>
                                                        {categories.map(
                                                            (category) => (
                                                                <option
                                                                    value={
                                                                        category.id
                                                                    }
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    {...(course.category_id ===
                                                                    category.id
                                                                        ? "selected"
                                                                        : "")}
                                                                >
                                                                    {
                                                                        category.category_name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Categor  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="input3"
                                                    className="form-label"
                                                >
                                                    Course SubCategory:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <select
                                                        name="subcategory_id"
                                                        id="subcategory_id"
                                                        className="form-select"
                                                        value={
                                                            data.subcategory_id
                                                        }
                                                        onChange={handleChange}
                                                        {...(data.subcategory_id
                                                            ? "selected"
                                                            : "")}
                                                    >
                                                        <option
                                                            value=""
                                                            disabled=""
                                                        >
                                                            Select Course
                                                            SubCategory
                                                        </option>
                                                        {subcategories.map(
                                                            (subcategory) => (
                                                                <option
                                                                    value={
                                                                        subcategory.id
                                                                    }
                                                                    key={
                                                                        subcategory.id
                                                                    }
                                                                >
                                                                    {
                                                                        subcategory.subcategory_name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course SubCategory  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="certificate"
                                                    className="form-label"
                                                >
                                                    Certificate:
                                                </label>
                                                <div className="col-sm-12">
                                                    <select
                                                        name="certificate"
                                                        id="certificate"
                                                        className="form-select"
                                                        onChange={handleChange}
                                                        value={data.certificate}
                                                    >
                                                        <option
                                                            value=""
                                                            disabled=""
                                                        >
                                                            Select Option
                                                        </option>
                                                        <option value="Yes">
                                                            {" "}
                                                            Yes{" "}
                                                        </option>
                                                        <option value="No">
                                                            {" "}
                                                            No{" "}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Certificate  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="course_label"
                                                    className="form-label"
                                                >
                                                    Course Label:
                                                </label>
                                                <div className="col-sm-12">
                                                    <select
                                                        name="course_label"
                                                        id="course_label"
                                                        value={
                                                            data.course_label
                                                        }
                                                        className="form-select"
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value=""
                                                            disabled=""
                                                        >
                                                            Select Course Label
                                                        </option>
                                                        <option value="Beginner">
                                                            Beginner
                                                        </option>
                                                        <option value="Intermediate">
                                                            Intermediate
                                                        </option>
                                                        <option value="Advance">
                                                            Advance
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Label  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="selling_price"
                                                    className="form-label"
                                                >
                                                    Course Price:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="selling_price"
                                                        value={
                                                            data.selling_price
                                                        }
                                                        className="form-control"
                                                        id="selling_price"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Price  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="discount_price"
                                                    className="form-label"
                                                >
                                                    Discount Price:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="discount_price"
                                                        value={
                                                            data.discount_price
                                                        }
                                                        className="form-control"
                                                        id="discount_price"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Discount Price  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="duration"
                                                    className="form-label"
                                                >
                                                    Duration:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="duration"
                                                        value={data.duration}
                                                        className="form-control"
                                                        id="duration"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Duration  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="resources"
                                                    className="form-label"
                                                >
                                                    Resources:
                                                </label>
                                                <div className="form-group col-sm-12">
                                                    <input
                                                        type="text"
                                                        name="resources"
                                                        value={data.resources}
                                                        className="form-control"
                                                        id="resources"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Resources  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="prerequisite"
                                                    className="form-label"
                                                >
                                                    Prerequisite:
                                                </label>
                                                <div className="form-group ms-1">
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={data.prerequisite}
                                                        id="prerequisite"
                                                        onChange={(
                                                            e,
                                                            editor
                                                        ) => {
                                                            const text =
                                                                editor.getData();
                                                            setData({
                                                                ...data,
                                                                prerequisite:
                                                                    text,
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Prerequisite  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="course_description"
                                                    className="form-label"
                                                >
                                                    Description:
                                                </label>
                                                <div className="form-group ms-1">
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={
                                                            data.course_description
                                                        }
                                                        id="course_description"
                                                        //  onChange={(e) => handleEditorChange(e, 'course_description')}
                                                        onChange={(
                                                            e,
                                                            editor
                                                        ) => {
                                                            const desc =
                                                                editor.getData();
                                                            setData({
                                                                ...data,
                                                                course_description:
                                                                    desc,
                                                            });
                                                        }}
                                                    />
                                                    {/*  */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Description  */}
                                    </div>

                                    <div className="row mb-3">
                                        <div className="row ms-2 ps-4">
                                            <div className="form-check col-md-4">
                                                <input
                                                    type="checkbox"
                                                    name="best_seller"
                                                    checked={data.best_seller}
                                                    id="best_seller"
                                                    className="form-check-input h5"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="best_seller"
                                                    className="form-check-label mt-1 fw-bold"
                                                >
                                                    Best Seller
                                                </label>
                                            </div>
                                            <div className="form-check col-md-4">
                                                <input
                                                    type="checkbox"
                                                    name="featured"
                                                    checked={data.featured}
                                                    id="featured"
                                                    className="form-check-input h5"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="featured"
                                                    className="form-check-label fw-bold mt-1"
                                                >
                                                    Featured
                                                </label>
                                            </div>
                                            <div className="form-check col-md-4">
                                                <input
                                                    type="checkbox"
                                                    name="highest_rated"
                                                    checked={data.highest_rated}
                                                    id="highest_rated"
                                                    className="form-check-input h5"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="highest_rated"
                                                    className="form-check-label fw-bold mt-1"
                                                >
                                                    Highest Rated
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-outline-primary me-1"
                                    >
                                        Update Course
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary ms-1"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* //update image section */}
            <div className="page-content mt-0">
                <div className="row">
                    <UpdateImageForm course={course} />
                    {/* //End udate Image */}
                    <UpdateVideoForm course={course}/>
                </div>
            </div>
            {/* //update image section end */}

            {/*========== Start of add multiple class with ajax ==============*/}
            {/* Edit Course Goals Section */}
            <div className="page-content mt-0">
            <EditCourseGoals course={course} goals={goals} />
            </div>
        </React.Fragment>
    );
};

EditCourse.layout = (page) => <InstructorPanel children={page} />;

export default EditCourse;
