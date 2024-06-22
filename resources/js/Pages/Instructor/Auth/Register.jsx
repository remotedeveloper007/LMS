import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState)
    }

    const toggleConfirmPasswordVisible = () => {
        setConfirmPasswordVisible((prevState) => !prevState)
    }

    return (
        <React.Fragment>

            {/* <div className="wrapper"> */}
                <div className="section-authentication-cover">
                    <div className="">
                        <div className="row g-0">
                            <div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex">
                                <div className="card shadow-none bg-transparent shadow-none rounded-0">
                                    <div className="card-body">
                                        <img
                                            src="./../../../assets/backend/images/login-images/register-cover.svg"
                                            className="img-fluid auth-img-cover-login"
                                            width={450}
                                            alt=""
                                        />
                                        <div className="col-12">
                                            <div className="text-center">
                                                <p className="mb-0">
                                                    Already have an
                                                    account?{" "}
                                                    <Link href={route('instructor.request.login')}>
                                                        Sign in here
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="login-separater text-center">
                                                {" "}
                                            <span>
                                                OR SIGN UP WITH EMAIL
                                            </span>
                                            <hr/>
                                        </div>
                                        <div className="list-inline contacts-social text-center">
                                            <Link
                                                // href="javascript:;"
                                                href="#javascript:;"
                                                className="list-inline-item bg-facebook text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-facebook" />
                                            </Link>
                                            <Link
                                                // href="javascript:;"
                                                href="#javascript:;"
                                                className="list-inline-item bg-twitter text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-twitter" />
                                            </Link>
                                            <Link
                                                // href="javascript:;"
                                                href="#javascript:;"
                                                className="list-inline-item bg-google text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-google" />
                                            </Link>
                                            <Link
                                                // href="javascript:;"
                                                href="#javascript:;"
                                                className="list-inline-item bg-linkedin text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-linkedin" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
                                <div className="card rounded-0 m-3 shadow-none bg-transparent">
                                    <div className="card-body p-sm-5">
                                        <div className="">
                                            <div className="text-center mb-4">
                                                <h5 className="">
                                                    <img
                                                        src="./../../../assets/backend/images/logo-icon.png"
                                                        width={60}
                                                        alt=""
                                                    /> &nbsp;&nbsp;
                                                    Rocker Instructor
                                                </h5>
                                                <p className="mb-0">
                                                    Please fill the below
                                                    details to create your
                                                    account
                                                </p>
                                            </div>
                                            <div className="form-body">
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="inputUsername"
                                                            className="form-label"
                                                        >
                                                            Username
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputUsername"
                                                            name="name"
                                                            placeholder="Jhon"
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="inputEmailAddress"
                                                            className="form-label"
                                                        >
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmailAddress"
                                                            name="email"
                                                            placeholder="example@user.com"
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="inputChoosePassword"
                                                            className="form-label"
                                                        > Password
                                                        </label>
                                                        <div
                                                            className="input-group"
                                                            id="show_hide_password"
                                                        >
                                                            <input
                                                                type={passwordVisible ? "text" : "password"}
                                                                className="form-control border-end-0"
                                                                id="inputChoosePassword"
                                                                name="password"
                                                            
                                                                placeholder="Enter Password"
                                                            />{" "}
                                                    
                                                            <Link
                                                                type="button"
                                                                className="input-group-text bg-transparent"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                <i className={passwordVisible ? "bx bx-show" : "bx bx-hide"} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="inputChoosePassword"
                                                            className="form-label"
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        <div
                                                            className="input-group"
                                                            id="show_hide_password"
                                                        >
                                                            <input
                                                                type={confirmPasswordVisible ? "text" : "password"}
                                                                className="form-control border-end-0"
                                                                id="inputChoosePassword"
                                                                name="password_confirmation"
                                                                placeholder="Enter Password"
                                                            />{" "}
                                                            <Link
                                                                className="input-group-text bg-transparent"
                                                                onClick={toggleConfirmPasswordVisible}
                                                            >
                                                                <i className={confirmPasswordVisible ? "bx bx-show" : "bx bx-hide"} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-12">
                                                        <label
                                                            htmlFor="inputSelectCountry"
                                                            className="form-label"
                                                        >
                                                            Country
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="inputSelectCountry"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected="">
                                                                India
                                                            </option>
                                                            <option value={1}>
                                                                United Kingdom
                                                            </option>
                                                            <option value={2}>
                                                                America
                                                            </option>
                                                            <option value={3}>
                                                                Dubai
                                                            </option>
                                                        </select>
                                                    </div> */}
                                                    <div className="col-12">
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
                                                                I read and agree
                                                                to Terms &amp;
                                                                Conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <div className="d-grid">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Sign up
                                                            </button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                            {/* <div className="login-separater text-center mb-2">
                                                {" "}
                                                <span>
                                                    OR SIGN UP WITH EMAIL
                                                </span>
                                                <hr />
                                            </div>
                                            <div className="list-inline contacts-social text-center">
                                                <Link
                                                    // href="javascript:;"
                                                    href="#javascript:;"
                                                    className="list-inline-item bg-facebook text-white border-0 rounded-3"
                                                >
                                                    <i className="bx bxl-facebook" />
                                                </Link>
                                                <Link
                                                    // href="javascript:;"
                                                    href="#javascript:;"
                                                    className="list-inline-item bg-twitter text-white border-0 rounded-3"
                                                >
                                                    <i className="bx bxl-twitter" />
                                                </Link>
                                                <Link
                                                    // href="javascript:;"
                                                    href="#javascript:;"
                                                    className="list-inline-item bg-google text-white border-0 rounded-3"
                                                >
                                                    <i className="bx bxl-google" />
                                                </Link>
                                                <Link
                                                    // href="javascript:;"
                                                    href="#javascript:;"
                                                    className="list-inline-item bg-linkedin text-white border-0 rounded-3"
                                                >
                                                    <i className="bx bxl-linkedin" />
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
            {/* </div> */}
        </React.Fragment>
    );
};

export default Register;
