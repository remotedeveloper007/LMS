import React, {useState} from 'react';
import { useForm } from "@inertiajs/react";

const UpdateImageForm  = ({ course}) => {
    const {data, setData, post, reset} = useForm({
        course_id: course.id,
        course_image: course.course_image ? `/${course.course_image}` : "../../../../assets/upload/sample.png"
    });
    
    // const [imagePreview, setImagePreview] = useState(
    //     course.course_image
    //         ? `/${course.course_image}`
    //         : "../../../../assets/upload/sample.png" // Initialize image preview with existing image or placeholder
    // );
    const [imagePreview, setImagePreview] = useState(data.course_image);

    // const handleImageChange = (e) => {
        
    //     if (e.target.name === "course_image") {
    //         const file = e.target.files[0];
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setData("course_image", file);
    //             setImagePreview(reader.result);
    //         };

    //         if (file) {
    //             reader.readAsDataURL(file);
    //         }
    //     }
    // };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setData((prevData) => ({ ...prevData, course_image: file }));
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };    

    const handleSubmitImage = (e) => {
        e.preventDefault();
        
       /*
        // Check if files are selected
        if (e.target.files && e.target.files.length > 0) {
            // You can access the uploaded file using e.target.files[0]
            const formData = new FormData();
            formData.append("course_id", course.id);
            formData.append("old_image", course.course_image);
            formData.append("course_image", data.course_image);

            // post(route('update.course_image'), formData, {})

            // Make your API call to update the course image with formData
            axios.post(route("/instructor/update/course/image"), formData)
                    .then((res) => {
                        // Handle success
                        if (res.data.status === 200) {
                            {
                                flash.message &&
                                    Toast.fire({
                                        icon: flash.type,
                                        title: flash.message,
                                    });
                            }
                        } else {
                            {
                                flash.message &&
                                    Toast.fire({
                                        icon: flash.type,
                                        title: flash.message,
                                    });
                            }
                        }
                        // console.log('Image uploaded successfully');
                    })
                    .catch((error) => {
                        // Handle error
                        {
                            flash.message &&
                                Toast.fire({
                                    icon: flash.type,
                                    title: flash.message,
                                });
                        }
                        console.error('Error uploading image:', error);
                    });
            } else {
                Toast.fire({
                    icon: flash.type,
                    title: "No file selected",
                });
                console.error("No file selected");
            }
        */

        post(route('update.course_image'), {
            onSuccess: () => {
                reset();
            },
        });
    };

  return (
    <React.Fragment>
        <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmitImage}>
                <div className="card">
                    <div className="card-header">Update Course Image</div>
                    <div className="card-body">
                        
                            <div className="col-md-12 mb-4">
                                <div className="col-sm-12">
                                    <div className="row mb-3">
                                        <div className="col-sm-12 d-flex justify-content-center">
                                            <img
                                                src={imagePreview}
                                                alt="Category"
                                                width="300" height="200"
                                                // className="form-control"
                                                id="showImage"
                                            />
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-sm-10 text-secondary ps-0">
                                            <input type="hidden" value={data.course_id} name="course_id"/>
                                            <input
                                                type="file"
                                                name="course_image"
                                                // onChange={(e) => handleImageChange("course_image", e.target.files[0])}
                                                onChange={handleImageChange}
                                                className="form-control"
                                                id="course_image"
                                            />
                                            {/* <InputError message={errors.course_image} /> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-sm btn-outline-primary me-1"
                        >
                            Update Image
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
    </React.Fragment>
  )
}

export default UpdateImageForm 
