import React, {useState} from 'react';
import { useForm } from "@inertiajs/react";
import InputError from '../../../Components/InputError';

const SectionForm = ({ courseId, toggleSectionForm }) => {
  const {data, setData, post} = useForm({
    course_id: courseId,
    section_title: '',
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear validation error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data before submission
    if (!data.section_title.trim()) {
        setErrors({ section_title: 'The section title field is required.' });
        return;
    }

    // Proceed with form submission if validation passes
    submitForm();
  }

  const submitForm = () => {
    // Handle form submission logic here (e.g., post data to backend)
    // Example using Inertia.js
    post(route('add.course.section'), data);
  };

  const handleCancel = () => {
    toggleSectionForm(); // Call toggleSectionForm method from props
  };

  return (
    <React.Fragment>
        <div className="container">
            <div className="main-body">
                <div className="row">
                <div className="col-lg-12 mx-auto">
                    <div className="mb-3">
                    <hr />
                    <div className="d-flex justify-content-center">
                        <div className="mt-4 col-md-7">
                        <div className="card">
                            <div className="card-header d-flex justify-content-center">
                            <strong>Add Section Form</strong>
                            </div>
                            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="course_id" value={data.course_id} className="form-control" onChange={handleChange}/>
                <div className="mb-3 row">
                <label htmlFor="section_title" className="col-sm-3 col-form-label"> Section Title:
                </label>
                <div className="col-sm-9">
                    <input type="text" name="section_title" value={data.section_title}
                    className={`form-control ${errors.section_title ? "is-invalid" : ""}`}
                    onChange={handleChange}/>
                    {/* <InputError message={errors.section_title} className="mt-2"/> */}
                    {errors.section_title && (
                        <InputError message={errors.section_title} className="mt-2" />
                    )}
                </div>
                </div>
                <div className="d-flex justify-content-center">
                <button 
                    className="btn btn-outline-primary">
                    Save Section
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                </div>
            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>      
    </React.Fragment>
  )
}

export default SectionForm
