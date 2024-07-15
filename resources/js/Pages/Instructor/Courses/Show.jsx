import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import InstructorPanel from "../../InstructorPanel";
import AddLectureForm from "./AddLectureForm";
import SectionForm from "./SectionForm";
import axios from "axios";
import EditLectureForm from "./EditLectureForm";


const ShowCourse = ({ course, description }) => {
    const { flash } = usePage().props;
    
    const { data, setData, reset } = useForm({
        course_id: course.id,
        section_id: "",
        lecture_title: "",
        url: "",
    });

    const [sections, setSections] = useState([]);

    const [showSectionForm, setShowSectionForm] = useState(false);
    const [lectureForms, setLectureForms] = useState({});
    const [editingLecture, setEditingLecture] = useState(null); // Track which lecture is being edited
    

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

    const editLectureDiv = (sectionId, lectureId) => {
        // const lectureId = sections[sectionId].lectureId;
        setEditingLecture({ sectionId, lectureId });
    };

    const cancelEditLecture = () => {
        setEditingLecture(null);
    };

    //
    const handleSectionDelete = (e, id) => {
        e.preventDefault();
        //
        Swal.fire({
            title: "Are you sure?",
            text: "Delete This Section?",
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
    
    //
    const handleLectureDelete = (e, lectureId, sectionId) => {
        e.preventDefault();
        //
        Swal.fire({
            title: "Are you sure?",
            text: "Delete This Lecture?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`/instructor/delete/course/lecture/${lectureId}`).then((res) => {
                    if (res.data.status === 200) {
                        // Filter out the deleted lecture from the corresponding section
                        const updatedSections = sections.map((section) => {
                            if (section.id === sectionId) {
                                // Filter out the deleted lecture
                                const updatedLectures = section.lectures.filter((lecture) => lecture.id !== lectureId);
                                return { ...section, lectures: updatedLectures };
                            }
                            return section;
                        });

                        setSections(updatedSections); // Update sections state with new array
                        //
                        Toast.fire({
                            icon: 'success',
                            title: res.data.message,
                        });
                    } else {
                        //
                        Swal.fire("Error!", "Failed to delete course lecture. Please try again later.", "error");
                    }
                }).catch(() => {
                    //
                    Swal.fire("Error!", "An error occurred while deleting the course lecture.", "error");
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
                                        </div> {/* //Lecture seationtitle end here  */}

                                        <div className="courseHide" id={`lectureContainer${index}`}>
                                            {lectureForms[section.id] && lectureForms[section.id].map((lecture, lectureIndex) => (
                                                <div className="lectureDiv mb-3" key={lectureIndex}>
                                                    <hr />
                                                    <div className="d-flex justify-content-center">
                                                        <AddLectureForm lecture={lecture} courseId={course.id} sectionId={section.id} lectureIndex={lectureIndex} removeLectureDiv={removeLectureDiv}/>
                                                    </div>
                                                  
                                                </div>
                                            ))}
                                            
                                        </div>   {/* //Lecture seation Form end here  */}
                                        {/* Render lectures for the section */}
                                        <div className="container">
                                            {/* Render sections related lectures */}
                                            {section.lectures.map((lecture, lectureIndex) => (
                                                <div className="d-flex-1 align-items-center" key={lectureIndex}> <hr />
                                                    <div className="row flex mb-3">
                                                        <div className="col-md-10 d-flex-1">
                                                            <strong>{lectureIndex + 1}. {lecture.lecture_title}</strong>
                                                        </div>
                                                        <div className="d-flex col-md-2 align-tems-right me-0">
                                                            <div className="me-2">
                                                                <span className="btn cursor-pointer"  tabIndex="0" data-bs-toggle="tooltip" data-bs-placement="auto" title="Edit Lecture" style={{ border: "none" }} onClick={() => editLectureDiv(section.id, lecture.id)} >
                                                                    <i className="text-primary bx bx-edit h3" />
                                                                </span>
                                                                <span className="btn cursor-pointer" style={{ border: "none" }} onClick={(e) => handleLectureDelete(e, lecture.id, section.id)} title="Delete" id="delete">
                                                                    <i className="text-danger bx bx-trash h3" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                                                                                                                        {/* Editable lecture form */}
                                                    {editingLecture && editingLecture.sectionId === section.id && editingLecture.lectureId === lecture.id && (
                                                        <div className="lectureDiv mb-3">
                                                            {/* <hr /> */}
                                                            <div className="d-flex justify-content-center">
                                                                <EditLectureForm
                                                                    lecture={lecture}
                                                                    lectureId={editingLecture.lectureId}
                                                                    sectionId={section.id}
                                                                    lectureIndex={lectureIndex} 
                                                                    onCancel={cancelEditLecture}
                                                                    cancelEditLecture={cancelEditLecture}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
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
