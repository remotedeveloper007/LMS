import React from 'react'

const ChangePassword = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            {/* <!--breadcrumb--> */}
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Change Password</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Change Password</li>
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
                            <div className="card card-outline-primary">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="{{ (!empty($profile->photo) ? url('assets/upload/admin_images/profile_img/'.$profile->photo) : url('assets/upload/no_image.jpg')) }}" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                        <div className="mt-3">
                                            <h4>
                                                {/* {{ $profile->name }} */}
                                            </h4>
                                            <p className="text-secondary mb-1">
                                                {/* {{ $profile->username }} */}
                                            </p>
                                            <p className="text-muted font-size-sm">
                                                {/* {{ $profile->email }} */}
                                            </p>
                                            {/* {{-- <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button> --}} */}
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                            <span className="text-secondary">https://codervent.com</span>
                                        </li>
                                        
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                            <span className="text-secondary">@codervent</span>
                                        </li>
                                        {/* {{-- <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                            <span className="text-secondary">codervent</span>
                                        </li> --}} */}
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                            <span className="text-secondary">codervent</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h6>Change Password</h6>
                                </div>
                                <form>
                                    {/* @csrf */}
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Old Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="password" name="old_password" className="form-control @error('old_password') is-invalid @enderror" />
                                                {/* @error('old_password')
                                                    <span className="text-danger">{{ $message }}</span>
                                                @enderror */}
                                            </div>

                                        </div>                          
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">New Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="password" name="new_password" className="form-control @error('new_password') is-invalid @enderror" />
                                                {/* @error('new_password')
                                                    <span className="text-danger">{{ $message }}</span>
                                                @enderror                                        */}
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Confirm Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="password" name="new_password_confirmation" className="form-control @error('new_password_confirmation') is-invalid @enderror" />
                                                {/* @error('new_password_confirmation')
                                                    <span className="text-danger">{{ $message }}</span>
                                                @enderror */}
                                            </div>
                                            
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="submit" className="btn btn-primary px-4" value="Save Changes" />
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

export default ChangePassword
