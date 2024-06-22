import React, { useState, useEffect } from "react";
import { Link, useForm, Head, usePage } from "@inertiajs/react";
import InputError from '../../../Components/InputError';

const Login = () => {
    const {flash} = usePage().props
    const {data, setData, post, reset, processing, errors} = useForm({
        email: '',
        password: '',
        remember: false
    })

    // State to manage flash message display
    const [message, setMessage] = useState(null);

    useEffect(() => {
        //
        // Display flash message when it changes
        if (flash.message) {
            setMessage({
                type: flash.type || 'info',
                content: flash.message
            });
            // Clear flash message after displaying it
            setTimeout(() => {
                setMessage(null);
                // Optionally, clear flash on route change or any specific event
                usePage().props.flush();
            }, 8000); // Clear message after 3 seconds (adjust as needed)
        }

        return () => {
            //
            $("#show_hide_password a").on('click', function (event) {
                event.preventDefault();
                if ($('#show_hide_password input').attr("type") == "text") {
                    $('#show_hide_password input').attr('type', 'password');
                    $('#show_hide_password i').addClass("bx-hide");
                    $('#show_hide_password i').removeClass("bx-show");
                } else if ($('#show_hide_password input').attr("type") == "password") {
                    $('#show_hide_password input').attr('type', 'text');
                    $('#show_hide_password i').removeClass("bx-hide");
                    $('#show_hide_password i').addClass("bx-show");
                }
            });        
        }
    }, [flash]);

    const handleChange = (e) => {
        e.persist()
        setData(e.target.name, e.target.type == 'checkbox' ? e.target.checked : e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //
        post(route('instructor.login'), {
            onSuccess: () => {
                reset();
            }
        })
    }

    // if (flash.message) {
    //     Toast.fire({
    //         icon: flash.type,
    //         title: flash.message,
    //     });
    //     // Clear flash message after displaying it
    //     usePage().props.flush();
    // }

    // {flash.message && (
    //     Toast.fire({
    //         icon: flash.type,
    //         title: flash.message,
    //     })    
    // )};

    return (
      <React.Fragment>
        <Head title="Instructor|Login"/>
        
        <div className="row g-0">
            <div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex">
                <div className="card shadow-none bg-transparent shadow-none rounded-0 mb-0">
                    <div className="card-body">
                        <img
                            src="../../../../assets/backend/images/login-images/login-cover.svg"
                            className="img-fluid auth-img-cover-login"
                            width="550"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
                <div className="card rounded-0 m-3 shadow-none bg-transparent mb-0">
                    <div className="card-body p-sm-5">
                        <div className="">
                            {message && (
                                <div className={`d-flex justify-content-center  alert alert-${message.type}  `} role="alert">
                                    <b>{message.content}</b>
                                </div>
                            )}
                            <div className="mb-1 text-center">
                                <img
                                    src="../../../../assets/backend/images/logo-icon.png"
                                    width="60"
                                    alt=""
                                />
                            </div>
                            <div className="text-center mb-2">
                                <h5 className="">Rocker Instructor</h5>
                                <p className="mb-0">
                                    Please log in to your account
                                </p>
                            </div>
                            <div className="form-body">
                                <form
                                    onSubmit={handleSubmit}
                                    className="row g-3"
                                >
                                    <div className="col-12">
                                        <label
                                            htmlFor="inputEmailAddress"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            onChange={handleChange}
                                            placeholder="jhon@example.com"
                                        />
                                        <InputError message={errors.email}/>
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="inputChoosePassword"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <div
                                            className="input-group"
                                            id="show_hide_password"
                                        >
                                            <input
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className={`form-control border-end-0 ${errors.password ? 'is-invalid' : ''}`}
                                                id="password"
                                                onChange={handleChange}
                                                placeholder="Enter Password"
                                            />

                                            <Link
                                                href="#"
                                                className="input-group-text bg-transparent"
                                            >
                                                <i className="bx bx-hide"></i>
                                            </Link>
                                        </div>
                                        <InputError message={errors.password}/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked"
                                            >
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <Link href="authentication-forgot-password.html">
                                            Forgot Password ?
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center ">
                                            <p className="mb-0">
                                                Don't have an account yet?    
                                                <Link href={ route('instructor.request.register') }>  Sign up here </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="login-separater text-center mb-2">
                                <span>OR SIGN IN WITH</span>
                                <hr />
                            </div>
                            <div className="list-inline contacts-social text-center">
                                <Link
                                    href="#"
                                    className="list-inline-item bg-facebook text-white border-0 rounded-3"
                                >
                                    <i className="bx bxl-facebook"></i>
                                </Link>
                                <Link
                                    href="#"
                                    className="list-inline-item bg-twitter text-white border-0 rounded-3"
                                >
                                    <i className="bx bxl-twitter"></i>
                                </Link>
                                <Link
                                    href="#"
                                    className="list-inline-item bg-google text-white border-0 rounded-3"
                                >
                                    <i className="bx bxl-google"></i>
                                </Link>
                                <Link
                                    href="#"
                                    className="list-inline-item bg-linkedin text-white border-0 rounded-3"
                                >
                                    <i className="bx bxl-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
};

export default Login;
