import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import InstructorPanel from "../../InstructorPanel";
import AddLectureForm from "./AddLectureForm";
import SectionForm from "./SectionForm";
import axios from "axios";


const ShowCourse = ({ course, description }) => {
    const { flash } = usePage().props;
    
    const { data, setData, post, reset } = useForm({
        course_id: course.id,
        section_id: "",
        lecture_title: "",
        url: "",
    });

    const [sections, setSections] = useState([]);

    const [showSectionForm, setShowSectionForm] = useState(false);
    const [lectureForms, setLectureForms] = useState({});
    

    useEffect(() => {
        if (flash.message) {
            window.Toast.fire({
                icon: flash.status,
                title: flash.message,
            });
            reset();
            setShowSectionForm(false);
        }

        axios.get(`/instructor/course/sections/${course.id}`).then(res => {
            if (res.data.status === 200) {
                setSections(res.data.sections);
            }
        });

        setSections(sections);
        return () => {};
    }, [flash, course.id]);

    const toggleSectionForm = () => {
        setShowSectionForm(!showSectionForm)
    }

    const addLectureDiv = (sectionId) => {
        setLectureForms((prevForms) => ({
            ...prevForms,
            [sectionId]: [
                ...(prevForms[sectionId] || []),
                { lecture_title: "", url: "" },
            ],
        }));
    };

    const removeLectureDiv = (sectionId, index) => {
        setLectureForms((prevForms) => {
            const updatedForms = { ...prevForms };
            updatedForms[sectionId].splice(index, 1);
            return updatedForms;
        });
    };


    //
    const handleSectionDelete = (e, id) => {
        e.preventDefault();
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
                axios.get(`/instructor/delete/course/section/${id}`).then((res) => {
                    if (res.data.status === 200) {
                        // Filter out the deleted section from sections array
                        const updatedSections = sections.filter((section) => section.id !== id);
                        setSections(updatedSections); // Update sections state with new array
                        //
                        Toast.fire({
                            icon: 'success',
                            title: 'Course Section deleted successfully!',
                        });
                    } else {
                        //
                        Swal.fire("Error!", "Failed to delete course section. Please try again later.", "error");
                    }
                }).catch(() => {
                    //
                    Swal.fire("Error!", "An error occurred while deleting the course section.", "error");
                    // console.error('Error deleting course:', error);
                });
            }
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
                                    Course Details
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
                    <div className="col-12 col-lg-12 mx-auto">
                        <div className="card card-outline-primary">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={`/${course.course_image}`}
                                        className="rounded-circle p-1 border"
                                        width="90"
                                        height="90"
                                        alt="..."
                                    />
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mt-0">
                                            {course.course_name}
                                        </h5>
                                        <p className="mb-0">
                                            {description}
                                        </p>
                                    </div>

                                    <div className="ms-auto" style={{ whiteSpace: "nowrap" }}>
                                        {!showSectionForm && (
                                            <button className="btn btn-outline-primary" onClick={toggleSectionForm}>Add Section</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* Add Section form */}

                            {showSectionForm && (
                               <SectionForm courseId={course.id} toggleSectionForm={toggleSectionForm} />
                            )}
                                {/* End Add Section form */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render sections */}
                {sections.map((section, index) => (
                    <div className="container" key={index}>
                        <div className="main-body">
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <div className="card">
                                        <div className="card-body p-4 d-flex justify-content-between">
                                            <h6>{section.section_title}</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="btn btn-outline-primary"
                                                    onClick={() => addLectureDiv(section.id)}>
                                                    Add Lecture
                                                </span>
                                                <span className="btn cursor-pointer" style={{border: "none",outline: "none"}} onClick={(e) => handleSectionDelete(e, section.id)} id="delete">
                                                    <i className="text-danger bx bx-trash h3" />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="courseHide" id={`lectureContainer${index}`}>
                                            {lectureForms[section.id] && lectureForms[section.id].map((lecture, lectureIndex) => (
                                                <div className="lectureDiv mb-3" key={lectureIndex}>
                                                    <hr />
                                                    <div className="d-flex justify-content-center">
                                                        {/* <div className="mt-4 col-md-7">
                                                            <div className="card">
                                                                <div className="card-header d-flex  justify-content-center"> <strong>Add Lecture Form</strong></div>
                                                                <div className="card-body">
                                                                    <form onSubmit={(e) => handleLectureSubmit(e, section.id, lectureIndex)}>
                                                                        <input type="hidden" name="course_id" className="form-control" value={data.course_id}/>
                                                                        
                                                                        <input type="hidden" name="section_id"  value={section.id} onChange={e => setData('section_id', e.target.value)}className="form-control"/>

                                                                        <div className="row mb-3">
                                                                            <label htmlFor="lecture_title" className="form-label"> Lecture Title:</label>
                                                                            <div className="col-md-12">
                                                                            <input type="text" name="lecture_title" value={lecture.lecture_title} className="form-control" onChange={(e) => handleLectureChange(e, section.id, lectureIndex )} placeholder="Add Lecture Title"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mb-3">
                                                                            <label htmlFor="url" className="form-label">
                                                                            Lecture Url: </label>
                                                                            <div className="col-sm-12">
                                                                                <input type="text" name="url" value={lecture.url} className="form-control" onChange={(e) => handleLectureChange(e, section.id, lectureIndex)} placeholder="Add Lecture Video Url"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-center">
                                                                            <button type="submit" className="btn btn-outline-primary">Save Lecture </button>
                                                                            <button type="button" className="btn btn-outline-secondary ms-2" onClick={() => removeLectureDiv( section.id, lectureIndex)}> Cancle </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <AddLectureForm lecture={lecture} courseId={course.id} sectionId={section.id} lectureIndex={lectureIndex} removeLectureDiv={removeLectureDiv}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* End rendering sections */}
            </div>
        </React.Fragment>
    );
};

ShowCourse.layout = (page) => <InstructorPanel children={page} />;

export default ShowCourse;
