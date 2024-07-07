import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddLectureForm = ({ courseId, sectionId, lectureIndex, removeLectureDiv }) => {
    const props = usePage().props
    const { data, setData, post, reset } = useForm({
        course_id: courseId,
        section_id: sectionId,
        lecture_title: '',
        content: '',
        url: ''
    });

    const handleLectureChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleEditorChange = (e, editor) => {
        const content = editor.getData();
        setData({ ...data, content: content });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //
        post(route("add.course.lecture"), {
            _token: props.csrf_token,
            data: data,
            onSuccess: () => {
                reset();
            }
        });
    };

    const handleCancel = () => {
        removeLectureDiv(sectionId, lectureIndex);
    };

    return (
        <React.Fragment>
            <div className="mt-4 col-md-7">
                <div className="card">
                    <div className="card-header d-flex justify-content-center">
                        <strong>Add Lecture Form</strong>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="course_id" value={data.course_id} className="form-control" />

                            <input type="hidden" name="section_id" value={data.section_id} className="form-control" />

                            <div className="row mb-3">
                                <label htmlFor="lecture_title" className="form-label">Lecture Title:</label>
                                <div className="col-md-12">
                                    <input type="text" name="lecture_title" value={data.lecture_title} className="form-control" onChange={handleLectureChange} placeholder="Add Lecture Title" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="lecture_content" className="form-label">Lecture Content:</label>
                                <div className="col-md-12">
                                    <CKEditor editor={ClassicEditor} data={data.content} onChange={handleEditorChange}  id="lecture_content"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="url" className="form-label">Lecture Url:</label>
                                <div className="col-sm-12">
                                    <input type="text" name="url" value={data.url} className="form-control" onChange={handleLectureChange} placeholder="Add Lecture Video Url" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-outline-primary">Save Lecture</button>
                                <button type="button" className="btn btn-outline-secondary ms-2" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddLectureForm;
