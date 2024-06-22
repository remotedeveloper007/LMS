import React from 'react';
import { Link } from '@inertiajs/react';

const Header = () => {
  return (
    <React.Fragment>
        <header className="header-menu-area bg-white">
            <div className="header-top pr-150px pl-150px border-bottom border-bottom-gray py-1">
                <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="header-widget">
                        <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                        <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                            <i className="la la-phone mr-1" />
                            <Link href="tel:00123456789">
                                  (00) 123 456 789
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="la la-envelope-o mr-1" />
                            <Link href="mailto:contact@aduca.com">
                                  contact@aduca.com
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="header-widget d-flex flex-wrap align-items-center justify-content-end">
                        <div className="theme-picker d-flex align-items-center">
                        <button
                            className="theme-picker-btn dark-mode-btn"
                            title="Dark mode"
                        >
                            <svg
                            id="moon"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </button>
                        <button
                            className="theme-picker-btn light-mode-btn"
                            title="Light mode"
                        >
                            <svg
                            id="sun"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            >
                            <circle
                                cx="12"
                                cy="12"
                                r="5"
                            />
                            <line
                                x1="12"
                                x2="12"
                                y1="1"
                                y2="3"
                            />
                            <line
                                x1="12"
                                x2="12"
                                y1="21"
                                y2="23"
                            />
                            <line
                                x1="4.22"
                                x2="5.64"
                                y1="4.22"
                                y2="5.64"
                            />
                            <line
                                x1="18.36"
                                x2="19.78"
                                y1="18.36"
                                y2="19.78"
                            />
                            <line
                                x1="1"
                                x2="3"
                                y1="12"
                                y2="12"
                            />
                            <line
                                x1="21"
                                x2="23"
                                y1="12"
                                y2="12"
                            />
                            <line
                                x1="4.22"
                                x2="5.64"
                                y1="19.78"
                                y2="18.36"
                            />
                            <line
                                x1="18.36"
                                x2="19.78"
                                y1="5.64"
                                y2="4.22"
                            />
                            </svg>
                        </button>
                        </div>
                        <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                        <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                            <i className="la la-sign-in mr-1" />
                            <Link href="login.html">
                                  Login
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="la la-user mr-1" />
                            <Link href="sign-up.html">
                                  Register
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="header-menu-content pr-150px pl-150px bg-white">
                <div className="container-fluid">
                <div className="main-menu-content">
                    <Link
                    className="down-button"
                    href="#"
                    >
                    <i className="la la-angle-down" />
                    </Link>
                    <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className="logo-box">
                        <Link
                            className="logo"
                            href="index.html"
                        >
                            <img
                            alt="logo"
                            src="../../../../assets/frontend/images/logo.png"
                            />
                        </Link>
                        <div className="user-btn-action">
                            <div
                            className="search-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Search"
                            >
                            <i className="la la-search" />
                            </div>
                            <div
                            className="off-canvas-menu-toggle cat-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Category menu"
                            >
                            <i className="la la-th-large" />
                            </div>
                            <div
                            className="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Main menu"
                            >
                            <i className="la la-bars" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="menu-wrapper">
                        <div className="menu-category">
                            <ul>
                            <li>
                                <Link href="#">
                                Categories      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <ul className="cat-dropdown-menu">
                                <li>
                                    <Link href="course-grid.html">
                                    Development      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Mobile Apps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Game Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Databases
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Programming Languages
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Software Testing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Software Engineering
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        E-Commerce
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    business      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Finance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Entrepreneurship
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Real Estate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Home Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Communications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Industry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    IT & Software      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All IT & Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        IT Certification
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Hardware
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Network & Security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Operating Systems
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    Finance & Accounting      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                              All Finance & Accounting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Accounting & Bookkeeping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Cryptocurrency & Blockchain
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Economics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Investing & Trading
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other Finance & Economics
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    design      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Graphic Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Web Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Design Tools
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        3D & Animation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        User Experience
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    Personal Development      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Personal Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Personal Transformation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Productivity
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Leadership
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Personal Finance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Career Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Parenting & Relationships
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Happiness
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    Marketing      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Search Engine Optimization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Social Media Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Branding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Video & Mobile Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Affiliate Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Growth Hacking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    Health & Fitness      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Health & Fitness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Fitness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Sports
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Dieting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Self Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Meditation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Mental Health
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Yoga
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Dance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="course-grid.html">
                                    Photography      
                                    <i className="la la-angle-right" />
                                    </Link>
                                    <ul className="sub-menu">
                                    <li>
                                        <Link href="#">
                                        All Photography
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Digital Photography
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Photography Fundamentals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Commercial Photography
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Video Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Photography Tools
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        Other
                                        </Link>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <form method="post">
                            <div className="form-group mb-0">
                            <input
                                className="form-control form--control pl-3"
                                name="search"
                                placeholder="Search for anything"
                                type="text"
                            />
                            <span className="la la-search search-icon" />
                            </div>
                        </form>
                        <nav className="main-menu">
                            <ul>
                            <li>
                                <Link href="#">
                                Home      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <ul className="dropdown-menu-item">
                                <li>
                                    <Link href="index.html">
                                    Home One
                                    </Link>
                                </li>
                                <li>
                                    <Link href="home-2.html">
                                    Home Two
                                    </Link>
                                </li>
                                <li>
                                    <Link href="home-3.html">
                                    Home Three
                                    </Link>
                                </li>
                                <li>
                                    <Link href="home-4.html">
                                    Home four
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#">
                                courses      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <ul className="dropdown-menu-item">
                                <li>
                                    <Link href="course-grid.html">
                                    course grid
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-list.html">
                                    course list
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-grid-left-sidebar.html">
                                    grid left sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-grid-right-sidebar.html">
                                    grid right sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-list-left-sidebar.html">
                                    list left sidebar      
                                    <span className="ribbon ribbon-blue-bg">
                                        New
                                    </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-list-right-sidebar.html">
                                    list right sidebar      
                                    <span className="ribbon ribbon-blue-bg">
                                        New
                                    </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="course-details.html">
                                    course details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="lesson-details.html">
                                    lesson details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="my-courses.html">
                                    My courses
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#">
                                Student      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <ul className="dropdown-menu-item">
                                <li>
                                    <Link href="student-detail.html">
                                    student detail
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-quiz.html">
                                    take quiz
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-quiz-results.html">
                                    quiz results
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-quiz-result-details.html">
                                    quiz details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-quiz-result-details-2.html">
                                    quiz details 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-path.html">
                                    path details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-path-assessment.html">
                                    Skill Assessment
                                    </Link>
                                </li>
                                <li>
                                    <Link href="student-path-assessment-result.html">
                                    Skill result
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            <li className="mega-menu-has">
                                <Link href="#">
                                pages      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <div className="dropdown-menu-item mega-menu">
                                <ul className="row no-gutters">
                                    <li className="col-lg-3">
                                    <Link href="dashboard.html">
                                        dashboard      
                                        <span className="ribbon">
                                        Hot
                                        </span>
                                    </Link>
                                    <Link href="about.html">
                                        about
                                    </Link>
                                    <Link href="teachers.html">
                                        Teachers
                                    </Link>
                                    <Link href="teacher-detail.html">
                                        Teacher detail
                                    </Link>
                                    <Link href="categories.html">
                                        categories
                                    </Link>
                                    <Link href="terms-and-conditions.html">
                                        Terms & conditions
                                    </Link>
                                    <Link href="privacy-policy.html">
                                        privacy policy
                                    </Link>
                                    <Link href="invite.html">
                                        invite friend
                                    </Link>
                                    </li>
                                    <li className="col-lg-3">
                                    <Link href="careers.html">
                                        careers
                                    </Link>
                                    <Link href="career-details.html">
                                        career details
                                    </Link>
                                    <Link href="become-a-teacher.html">
                                        become an instructor
                                    </Link>
                                    <Link href="faq.html">
                                        FAQs
                                    </Link>
                                    <Link href="admission.html">
                                        admission
                                    </Link>
                                    <Link href="gallery.html">
                                        gallery
                                    </Link>
                                    <Link href="pricing-table.html">
                                        pricing tables
                                    </Link>
                                    <Link href="contact.html">
                                        contact
                                    </Link>
                                    </li>
                                    <li className="col-lg-3">
                                    <Link href="for-business.html">
                                        for business
                                    </Link>
                                    <Link href="sign-up.html">
                                        sign-up
                                    </Link>
                                    <Link href="login.html">
                                        login
                                    </Link>
                                    <Link href="recover.html">
                                        recover
                                    </Link>
                                    <Link href="shopping-cart.html">
                                        cart
                                    </Link>
                                    <Link href="checkout.html">
                                        checkout
                                    </Link>
                                    <Link href="error.html">
                                        page 404
                                    </Link>
                                    </li>
                                    <li className="col-lg-3">
                                    <div className="menu-banner position-relative h-100">
                                        <div className="overlay rounded-rounded opacity-4" />
                                        <div className="menu-banner-content p-4 position-absolute bottom-0 left-0">
                                        <h4 className="fs-20 font-weight-bold pb-3 text-white">
                                            30 days free trail for new users
                                        </h4>
                                        <Link
                                            className="btn theme-btn theme-btn-sm theme-btn-white"
                                            href="sign-up.html"
                                        >
                                            Start Learning      
                                            <i className="la la-arrow-right icon ml-1" />
                                        </Link>
                                        </div>
                                        <img
                                        alt="menu banner image"
                                        className="w-100 h-100 rounded-rounded"
                                        src="../../../../assets/frontend/images/menu-banner-img.jpg"
                                        />
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="#">
                                blog      
                                <i className="la la-angle-down fs-12" />
                                </Link>
                                <ul className="dropdown-menu-item">
                                <li>
                                    <Link href="blog-full-width.html">
                                    blog full width      
                                    </Link>
                                </li>
                                <li>
                                    <Link href="blog-no-sidebar.html">
                                    blog no sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="blog-left-sidebar.html">
                                    blog left sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="blog-right-sidebar.html">
                                    blog right sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="blog-single.html">
                                    blog detail
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </nav>
                        <div className="shop-cart mr-4">
                            <ul>
                            <li>
                                <p className="shop-cart-btn d-flex align-items-center">
                                <i className="la la-shopping-cart" />
                                <span className="product-count">
                                    2
                                </span>
                                </p>
                                <ul className="cart-dropdown-menu">
                                <li className="media media-card">
                                    <Link
                                    className="media-img"
                                    href="shopping-cart.html"
                                    >
                                    <img
                                        alt="Cart image"
                                        src="../../../../assets/frontend/images/small-img.jpg"
                                    />
                                    </Link>
                                    <div className="media-body">
                                    <h5>
                                        <Link href="course-details.html">
                                        The Complete JavaScript Course 2021: From Zero to Expert!
                                        </Link>
                                    </h5>
                                    <span className="d-block lh-18 py-1">
                                        Kamran Ahmed
                                    </span>
                                    <p className="text-black font-weight-semi-bold lh-18">
                                        $12.99      
                                        <span className="before-price fs-14">
                                        $129.99
                                        </span>
                                    </p>
                                    </div>
                                </li>
                                <li className="media media-card">
                                    <Link
                                    className="media-img"
                                    href="shopping-cart.html"
                                    >
                                    <img
                                        alt="Cart image"
                                        src="../../../../assets/frontend/images/small-img.jpg"
                                    />
                                    </Link>
                                    <div className="media-body">
                                    <h5>
                                        <Link href="course-details.html">
                                        The Complete JavaScript Course 2021: From Zero to Expert!
                                        </Link>
                                    </h5>
                                    <span className="d-block lh-18 py-1">
                                        Kamran Ahmed
                                    </span>
                                    <p className="text-black font-weight-semi-bold lh-18">
                                        $12.99      
                                        <span className="before-price fs-14">
                                        $129.99
                                        </span>
                                    </p>
                                    </div>
                                </li>
                                <li className="media media-card">
                                    <div className="media-body fs-16">
                                    <p className="text-black font-weight-semi-bold lh-18">
                                        Total:      
                                        <span className="cart-total">
                                        $12.99
                                        </span>
                                              
                                        <span className="before-price fs-14">
                                        $129.99
                                        </span>
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                    className="btn theme-btn w-100"
                                    href="shopping-cart.html"
                                    >
                                    Got to cart      
                                    <i className="la la-arrow-right icon ml-1" />
                                    </Link>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="nav-right-button">
                            <Link
                            className="btn theme-btn d-none d-lg-inline-block"
                            href="admission.html"
                            >
                            <i className="la la-user-plus mr-1" />
                                  Admission
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu">
                <div
                className="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
                data-placement="left"
                data-toggle="tooltip"
                title="Close menu"
                >
                <i className="la la-times" />
                </div>
                <ul className="generic-list-item off-canvas-menu-list pt-90px">
                <li>
                    <Link href="#">
                    Home
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="index.html">
                        Home One
                        </Link>
                    </li>
                    <li>
                        <Link href="home-2.html">
                        Home Two
                        </Link>
                    </li>
                    <li>
                        <Link href="home-3.html">
                        Home Three
                        </Link>
                    </li>
                    <li>
                        <Link href="home-4.html">
                        Home four
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                    courses
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="course-grid.html">
                        course grid
                        </Link>
                    </li>
                    <li>
                        <Link href="course-list.html">
                        course list
                        </Link>
                    </li>
                    <li>
                        <Link href="course-grid-left-sidebar.html">
                        grid left sidebar
                        </Link>
                    </li>
                    <li>
                        <Link href="course-grid-right-sidebar.html">
                        grid right sidebar
                        </Link>
                    </li>
                    <li>
                        <Link href="course-list-left-sidebar.html">
                        list left sidebar      
                        <span className="ribbon ribbon-blue-bg">
                            New
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="course-list-right-sidebar.html">
                        list right sidebar      
                        <span className="ribbon ribbon-blue-bg">
                            New
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="course-details.html">
                        course details
                        </Link>
                    </li>
                    <li>
                        <Link href="lesson-details.html">
                        lesson details
                        </Link>
                    </li>
                    <li>
                        <Link href="my-courses.html">
                        My courses
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                    Student
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="student-detail.html">
                        student detail
                        </Link>
                    </li>
                    <li>
                        <Link href="student-quiz.html">
                        take quiz
                        </Link>
                    </li>
                    <li>
                        <Link href="student-quiz-results.html">
                        quiz results
                        </Link>
                    </li>
                    <li>
                        <Link href="student-quiz-result-details.html">
                        quiz details
                        </Link>
                    </li>
                    <li>
                        <Link href="student-quiz-result-details-2.html">
                        quiz details 2
                        </Link>
                    </li>
                    <li>
                        <Link href="student-path.html">
                        path details
                        </Link>
                    </li>
                    <li>
                        <Link href="student-path-assessment.html">
                        Skill Assessment
                        </Link>
                    </li>
                    <li>
                        <Link href="student-path-assessment-result.html">
                        Skill result
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                    pages
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="dashboard.html">
                        dashboard      
                        <span className="ribbon">
                            Hot
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="about.html">
                        about
                        </Link>
                    </li>
                    <li>
                        <Link href="teachers.html">
                        Teachers
                        </Link>
                    </li>
                    <li>
                        <Link href="teacher-detail.html">
                        Teacher detail
                        </Link>
                    </li>
                    <li>
                        <Link href="careers.html">
                        careers
                        </Link>
                    </li>
                    <li>
                        <Link href="career-details.html">
                        career details
                        </Link>
                    </li>
                    <li>
                        <Link href="categories.html">
                        categories
                        </Link>
                    </li>
                    <li>
                        <Link href="terms-and-conditions.html">
                        Terms & conditions
                        </Link>
                    </li>
                    <li>
                        <Link href="privacy-policy.html">
                        privacy policy
                        </Link>
                    </li>
                    <li>
                        <Link href="for-business.html">
                        for business
                        </Link>
                    </li>
                    <li>
                        <Link href="become-a-teacher.html">
                        become an instructor
                        </Link>
                    </li>
                    <li>
                        <Link href="faq.html">
                        FAQs
                        </Link>
                    </li>
                    <li>
                        <Link href="admission.html">
                        admission
                        </Link>
                    </li>
                    <li>
                        <Link href="gallery.html">
                        gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="pricing-table.html">
                        pricing tables
                        </Link>
                    </li>
                    <li>
                        <Link href="contact.html">
                        contact
                        </Link>
                    </li>
                    <li>
                        <Link href="sign-up.html">
                        sign-up
                        </Link>
                    </li>
                    <li>
                        <Link href="login.html">
                        login
                        </Link>
                    </li>
                    <li>
                        <Link href="recover.html">
                        recover
                        </Link>
                    </li>
                    <li>
                        <Link href="shopping-cart.html">
                        cart
                        </Link>
                    </li>
                    <li>
                        <Link href="checkout.html">
                        checkout
                        </Link>
                    </li>
                    <li>
                        <Link href="error.html">
                        page 404
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                    blog
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="blog-full-width.html">
                        blog full width      
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-no-sidebar.html">
                        blog no sidebar
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-left-sidebar.html">
                        blog left sidebar
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-right-sidebar.html">
                        blog right sidebar
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-single.html">
                        blog detail
                        </Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
            <div className="off-canvas-menu custom-scrollbar-styled category-off-canvas-menu">
                <div
                className="off-canvas-menu-close cat-menu-close icon-element icon-element-sm shadow-sm"
                data-placement="left"
                data-toggle="tooltip"
                title="Close menu"
                >
                <i className="la la-times" />
                </div>
                <ul className="generic-list-item off-canvas-menu-list pt-90px">
                <li>
                    <Link href="course-grid.html">
                    Development
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Web Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Mobile Apps
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Game Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Databases
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Programming Languages
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Software Testing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Software Engineering
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        E-Commerce
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    business
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Business
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Finance
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Entrepreneurship
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Strategy
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Real Estate
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Home Business
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Communications
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Industry
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    IT & Software
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All IT & Software
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        IT Certification
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Hardware
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Network & Security
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Operating Systems
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    Finance & Accounting
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                              All Finance & Accounting
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Accounting & Bookkeeping
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Cryptocurrency & Blockchain
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Economics
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Investing & Trading
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other Finance & Economics
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    design
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Design
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Graphic Design
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Web Design
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Design Tools
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        3D & Animation
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        User Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    Personal Development
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Personal Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Personal Transformation
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Productivity
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Leadership
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Personal Finance
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Career Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Parenting & Relationships
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Happiness
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    Marketing
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Digital Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Search Engine Optimization
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Social Media Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Branding
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Video & Mobile Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Affiliate Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Growth Hacking
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    Health & Fitness
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Health & Fitness
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Fitness
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Sports
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Dieting
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Self Defense
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Meditation
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Mental Health
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Yoga
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Dance
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link href="course-grid.html">
                    Photography
                    </Link>
                    <ul className="sub-menu">
                    <li>
                        <Link href="#">
                        All Photography
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Digital Photography
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Photography Fundamentals
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Commercial Photography
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Video Design
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Photography Tools
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        Other
                        </Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
            <div className="mobile-search-form">
                <div className="d-flex align-items-center">
                <form
                    className="flex-grow-1 mr-3"
                    method="post"
                >
                    <div className="form-group mb-0">
                    <input
                        className="form-control form--control pl-3"
                        name="search"
                        placeholder="Search for anything"
                        type="text"
                    />
                    <span className="la la-search search-icon" />
                    </div>
                </form>
                <div className="search-bar-close icon-element icon-element-sm shadow-sm">
                    <i className="la la-times" />
                </div>
                </div>
            </div>
            <div className="body-overlay" />
        </header>      
    </React.Fragment>
  )
}

export default Header
