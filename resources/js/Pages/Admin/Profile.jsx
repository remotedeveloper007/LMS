import React, { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminPanel from '../AdminPanel';

const Profile = ({ profile }) => {
    const {data, setData, patch, errors, clearErrors} = useForm({});

    //
    useEffect(() => {
       //
      return () => {
        // $(document).ready(function () {
            $('#image').change(function (e) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    $('#showImage').attr('src', e.target.result);
                }
                reader.readAsDataURL(e.target.files['0']);
            })
        // })
      }
    }, []);

  const handleChange = (e) => {
    e.persist();

    setData((values) => ({...values, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    patch(route('admin.profile.update'), {
        onSuccess: () => {
            Toast.fire({
                icon: 'success',
                title: 'Profile updated successfully!',
            })       
          }
    })
  }
    
  return (
    <React.Fragment>
        <div className="page-content">
            {/* <!--breadcrumb--> */}
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                {/* <div className="breadcrumb-title pe-3">User Profile</div> */}
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><Link href={route('admin.dashboard')}><i className="bx bx-home-alt"></i></Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Admin Profile</li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
            
                </div>
            </div>
            {/* <!--end breadcrumb--> */}
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-primary card-outline">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={ profile.photo ? `/assets/upload/admin_images/profile_img/${profile.photo}` : '../../../../assets/upload/no_image.jpg' } alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                        <div className="mt-3">
                                            <h4>{ profile.name }</h4>
                                            <p className="text-secondary mb-1">{ profile.role }</p>
                                            <p className="text-muted font-size-sm">{ profile.email }</p>
                                            {/* <button className="btn btn-outline-primary me-1">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button> */}
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                            <span className="text-secondary">https://codervent.com</span>
                                        </li>
                                        
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                            <span className="text-secondary">@codervent</span>
                                        </li>
                                        {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                            <span className="text-secondary">codervent</span>
                                        </li> */}
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                            <span className="text-secondary">codervent</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <form onSubmit={handleSubmit}>
                                    {/* @csrf */}
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="name" className="form-control" value={ profile.name } onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="username" className="form-control" value={ profile.username } onChange={handleChange} />
                                            </div>
                                        </div>                           
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="email" name="email" className="form-control" value={ profile.email } onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="phone" className="form-control" value={ profile.phone } onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" name="address" className="form-control" value={ profile.address } onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Profile Image</h6>
                                            </div>
                                            <div className="col-sm-1">
                                                <img src={ profile.photo ? `/assets/upload/admin_images/profile_img/${profile.photo}` : '../../../../assets/upload/sample.jpg' } alt="Admin" className="product-img-2" id="showImage" />
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                <input type="file" name="photo" className="form-control" id="image" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="submit" className="btn btn-outline-primary px-4" value="Save Changes" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

Profile.layout = (page) => <AdminPanel children={page} />

export default Profile;
