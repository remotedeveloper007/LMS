import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import InstructorPanel from "../../InstructorPanel";
import InputError from "../../../Components/InputError";

const ShowCourse = ({ course, description, sections }) => {
    const { flash } = usePage().props;
    const { data, setData, post, reset, errors } = useForm({
        course_id: course.id,
        section_title: "",
        lecture_title: "",
        url: "",
    });

    const [showModal, setShowModal] = useState(false);
    const [lectureForms, setLectureForms] = useState({});

    useEffect(() => {
        if (flash.message) {
            window.Toast.fire({
                icon: flash.status,
                title: flash.message,
            });
            reset();
            closeModal();
        }
        return () => {};
    }, [flash]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        e.persist();
        setData((values) => ({ ...values, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("add.course.section"), {
            onSuccess: () => {
                reset();
                closeModal();
            },
            onError: (errors) => {
                // Keep the modal open to display validation errors
                if (errors) {
                    setShowModal(true);
                }
            }
        });
    };

    const addLectureDiv = (sectionId) => {
        setLectureForms((prevForms) => ({
            ...prevForms,
            [sectionId]: [
                ...(prevForms[sectionId] || []),
                { lecture_title: "", url: "" },
            ],
        }));
    };

    const handleLectureChange = (e, sectionId, index) => {
        const { name, value } = e.target;
        setLectureForms((prevForms) => {
            const updatedForms = { ...prevForms };
            updatedForms[sectionId][index][name] = value;
            return updatedForms;
        });
    };

    const handleLectureSubmit = (e, sectionId, index) => {
        e.preventDefault();
        const lectureData = lectureForms[sectionId][index];
        const formData = new FormData();
        formData.append("course_id", data.course_id);
        formData.append("section_id", sectionId);
        formData.append("lecture_title", lectureData.lecture_title);
        formData.append("url", lectureData.url);

        post(route("add.lecture"), {
            data: formData,
            onSuccess: () => {
                reset();
                closeModal();
            },
        });
    };

    const removeLectureDiv = (sectionId, index) => {
        setLectureForms((prevForms) => {
            const updatedForms = { ...prevForms };
            updatedForms[sectionId].splice(index, 1);
            return updatedForms;
        });
    };

    const handleSectionDelete = (sectionId, e) => {
        e.preventDefault();
        console.log(sectionId);
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
                                    <div
                                        className="ms-auto"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <Link
                                            href="#"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#sectionModal"
                                            onClick={openModal}
                                        >
                                            Add Section
                                        </Link>
                                    </div>
                                </div>
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
                                                <span className="btn" style={{border: "none", cursor: "pointer", outline: "none"}} onClick={(e) => handleSectionDelete(section.id, e)}>
                                                    <i className="text-danger bx bx-trash h3" />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="courseHide" id={`lectureContainer${index}`}>
                                            {lectureForms[section.id] && lectureForms[section.id].map((lecture, lectureIndex) => (
                                                <div className="lectureDiv mb-3" key={lectureIndex}>
                                                    <hr />
                                                    <div className="d-flex justify-content-center">
                                                        <div className="mt-4 col-md-7">
                                                            <div class="card">
                                                            <div className="card-header d-flex  justify-content-center"> <strong>Add Lecture Form</strong></div>
                                                                <div class="card-body">
                                                    <form onSubmit={(e) => handleLectureSubmit(e, section.id, lectureIndex)}>
                                                        <input type="hidden" name="course_id" className="form-control" value={data.course_id}/>
                                                        <input type="hidden" name="section_id" className="form-control" value={section.id}/>
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
                                                        </div>
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

            {/* Modal */}
            {showModal && (
                <div className="modal fade show" tabIndex="-1" id="sectionModal" role="dialog" aria-labelledby="sectionModalLabel" aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="sectionModalLabel">
                                        Add Section
                                    </h5>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="col-md-12 mb-3">
                                        <div className="row form-group">
                                            <div className="col-sm-3">
                                                <label
                                                    htmlFor="section_title"
                                                    className="form-label"
                                                >
                                                    Section Title:
                                                </label>
                                            </div>
                                            <div className="form-group col-sm-9">
                                                <input
                                                    type="hidden"
                                                    name="course_id"
                                                    className="form-controll"
                                                    id="course_id"
                                                    value={data.course_id}
                                                />
                                                <input
                                                    type="text"
                                                    name="section_title"
                                                    value={data.section_title}
                                                    className={`form-control ${errors.section_title ? 'is-invalid' : ''}`}
                                                    id="section_title"
                                                    onChange={handleChange}
                                                />
                                                <InputError message={errors.section_title} className="mt-2"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">
                                        Save section
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

ShowCourse.layout = (page) => <InstructorPanel children={page} />;

export default ShowCourse;
