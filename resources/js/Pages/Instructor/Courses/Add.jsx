import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InstructorPanel from "../../InstructorPanel";
import InputError from "../../../Components/InputError";
import axios from "axios";

const AddCourse = ({ categories, flash }) => {
    //
    let { data, setData, post, errors, reset } = useForm({
        //
        course_goals: {}, // Initialize course_goals as an empty object
        subcategory_id: "", // Initialize subcategory_id in form data
    });

    const [goalFields, setGoalFields] = useState([{ id: uuidv4(), value: "" }]); // Initialize with a unique ID
    const [subcategories, setSubcategories] = useState([]);
    // const [imagePreview, setImagePreview] = useState();

    useEffect(() => {
        //
        $("#course_image").change(function (e) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $("#showImage").attr("src", e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        });

        return () => {};
    }, []);

    const handleAddGoalField = () => {
        const newId = uuidv4(); // Generate a unique ID
        setGoalFields([...goalFields, { id: newId, value: "" }]);
    };

    const handleRemoveGoalField = (id) => {
        const updatedFields = goalFields.filter((field) => field.id !== id);
        setGoalFields(updatedFields);
    };

    const handleChange = (e) => {
        e.persist();

        if (e.target.name === "category_id") {
            fetchSubcategories(e.target.value);
        }

        if (e.target.name === "course_image") {
            // Handle image change
            const file = e.target.files[0];
            if (file) {
                // Read image data and set image preview
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }

        setData((values) => ({ ...values, [e.target.name]: e.target.value }));
    };

    const fetchSubcategories = (categoryId) => {
        try {
            axios.get(`/instructor/subcategories/${categoryId}`).then((res) => {
                if (res.data.status === 200) {
                    // console.log(res.data)
                    setSubcategories(res.data.subcategories);
                }
            });
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // Object.keys(data).forEach((key) => {
        //     formData.append(key, data[key]);
        // });

        //
        post(route("store.course"), {
            onSuccess: () => {
                reset();
            },
        });
    };


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
                                    <Link href={route("instructor.dashboard")}>
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Add Course
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
                                        Add Course Form
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
                                                        value={data.subcategory_id}
                                                        onChange={handleChange}
                                                    >
                                                     <option value="" disabled=""> Select CourseSubCategory</option>
                                                        {subcategories.map((subcategory) => ( <option value={subcategory.id} key={subcategory.id}>{subcategory.subcategory_name}
                                                        </option>))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course SubCategory  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="col-sm-12">
                                                <label
                                                    htmlFor="course_image"
                                                    className="form-label"
                                                >Course Image:
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-2 ps-4">
                                                        <img
                                                            src={"../../../../../assets/upload/sample.png"}
                                                            alt="Category"
                                                            className="product-img-2"
                                                            id="showImage"
                                                        />
                                                    </div>
                                                    <div className="col-sm-10 text-secondary ps-0">
                                                        <input
                                                            type="file"
                                                            name="course_image"
                                                            onChange={(e) => setData("course_image",
                                                                    e.target.files[0])}
                                                            // onChange={handleChange}
                                                            className="form-control"
                                                            id="course_image"
                                                        />
                                                        {/* <InputError message={errors.course_image} /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Category Image  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="input3"
                                                    className="form-label"
                                                >
                                                    Course Intro Video:
                                                </label>
                                                <div className="col-sm-12">
                                                    <input
                                                        type="file"
                                                        name="video"
                                                        id="video"
                                                        accept="video/mp4, video/webm"
                                                        className={`form-control ${
                                                            errors.video
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        onChange={(e) =>
                                                            setData("video", e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                        // onChange={handleChange}
                                                    />
                                                    <span className="la la-video input-icon" />
                                                    <InputError
                                                        message={errors.video}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Course Intro Video  */}

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
                                                    >
                                                        <option
                                                            value=""
                                                            disabled=""
                                                        >
                                                            Select Option
                                                        </option>
                                                        <option value="Yes">
                                                            Yes
                                                        </option>
                                                        <option value="No">
                                                            No
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
                                                        // onChange={(e) => handleEditorChange(e, 'prerequisite')}
                                                        onChange={(
                                                            e,
                                                            editor
                                                        ) => {
                                                            data =
                                                                editor.getData();
                                                            // setData((prev) => {return {...prev, prerequisite: data }})
                                                            setData(
                                                                "prerequisite",
                                                                data
                                                            );
                                                        }}
                                                    />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        {/* -- //End Prerequisite  */}

                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="course_description" className="form-label">
                                                    Description:
                                                </label>
                                                <div className="form-group ms-1">
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={ data.course_description }
                                                        id="course_description"
                                                        //  onChange={(e) => handleEditorChange(e, 'course_description')}
                                                        onChange={(e, editor) => { 
                                                            data = editor.getData();
                                                            setData("course_description", data);
                                                        }}
                                                    />
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
                                                    value={data.best_seller}
                                                    id="best_seller"
                                                    defaultValue={1}
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
                                                    value={data.featured}
                                                    id="featured"
                                                    defaultValue={1}
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
                                                    value={data.highest_rated}
                                                    id="highest_rated"
                                                    defaultValue={1}
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
                                    {/*   //////////// Goal Option /////////////// */}
                                    <p className="mt-3">Course Goals:</p>

                                    {/* ======================== */}

                                    <div className="row form-group add_item mt-2">
                                        <div className="col-sm-10">
                                            {goalFields.map((field, index) => (
                                                <div
                                                    className="row mb-2"
                                                    key={field.id}
                                                >
                                                    <div className="col-sm-3">
                                                        <label
                                                            htmlFor={`goals${field.id}`}
                                                            className="form-label"
                                                        >
                                                            Goals:
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-8 mt-1">
                                                        <input
                                                            type="text"
                                                            name={`course_goals[${field.id}]`}
                                                            id={`goals${field.id}`}
                                                            className="form-control"
                                                            value={
                                                                data
                                                                    .course_goals[
                                                                    `${field.id}`
                                                                ]
                                                            }
                                                            placeholder="Goals"
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>

                                                    {index !== 0 && (
                                                        // Conditionally render the remove button
                                                        <div className="col-sm-1 mt-1">
                                                            <span
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    handleRemoveGoalField(
                                                                        field.id
                                                                    )
                                                                }
                                                            >
                                                                <i className="text-danger bx bx-trash h3" />
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div
                                            className="col-sm-2 h4"
                                            style={{ margin: "float-left" }}
                                        >
                                            <span
                                                className="btn btn-outline-success ms-0"
                                                onClick={handleAddGoalField}
                                            >
                                                <i className="bx bx-plus h3" />
                                                Add
                                            </span>
                                        </div>
                                    </div>
                                    {/* ======================== */}

                                    {/*-end row*/}
                                    {/*   //////////// End Goal Option /////////////// */}
                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-outline-primary me-1"
                                    >
                                        Add Course
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
            {/*========== Start of add multiple class with ajax ==============*/}
        </React.Fragment>
    );
};

AddCourse.layout = (page) => <InstructorPanel children={page} />;

export default AddCourse;
