import React, { useRef, useState, useEffect } from 'react'
import { useForm } from '@inertiajs/react'


const UpdateVideoForm = ({ course }) => {
    const { data, setData, post, reset, errors } = useForm({
        course_id: course.id,
        video: course.video ? `/${course.video}` : ''
    });

    const [videoPreview, setVideoPreview] = useState(data.video);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const videoRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        videoRef.current.play();
        // setIsPlaying(true);
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        // setIsPlaying(false);
    };

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        setData((prevData) => ({ ...prevData, video: file }));
        setVideoPreview(reader.result);
    };
    if (file) {
        reader.readAsDataURL(file);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('update.video'), {
        onSuccess: () => {
            reset();
            setIsFormSubmitted(true);
        }
    })
  }

  useEffect(() => {
    setIsFormSubmitted(false);
  }, [isFormSubmitted, videoPreview]);

  return (
    <React.Fragment>
        <div className="col-md-6">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">Course Intro Video</div>
                    <div className="card-body">
                    <div className="col-md-12 mb-3">
                                <div className="col-sm-12">
                                {/* <label htmlFor="input3" className="form-label"> Course Intro Video: </label> */}
                                    <div className="row mb-4">
                                        <div className="col-sm-12 d-flex justify-content-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                            {/* Display existing video */}
                                            <video ref={videoRef} width={300} height={200} controls>
                                                <source src={ videoPreview } type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            {/* {isPlaying && <div className="progress-bar" style={{ backgroundColor: 'red', height: '5px' }}></div>} */}
                                        </div>
                                        
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-sm-10 text-secondary ps-0">
                                            <input type="hidden" value={data.course_id} name="course_id"/>
                                            <input type="file"  name="video" id="video" accept="video/mp4, video/webm" className={`form-control ${ errors.video ? "is-invalid" : "" }`}  
                                                // onChange={(e) => setData("video", e.target.files[0])} 
                                                onChange={handleChange}
                                            />
                                            {/* <InputError message={errors.course_image} /> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>                       
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-sm btn-outline-primary me-1">
                            Update Image </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary ms-1">
                            Reset </button>
                    </div>
                </div>
            </form>
        </div>     
    </React.Fragment>
  )
}

export default UpdateVideoForm
