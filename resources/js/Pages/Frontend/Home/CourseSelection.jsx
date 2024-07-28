import React from "react";

const CourseSelection = () => {
    return (
        <section className="course-area pb-120px">
            <div className="container">
                <div className="section-heading text-center">
                    <h5 className="ribbon ribbon-lg mb-2">
                        Choose your desired courses
                    </h5>
                    <h2 className="section__title">
                        The world's largest selection of courses
                    </h2>
                    <span className="section-divider" />
                </div>
                <ul
                    className="nav nav-tabs generic-tab justify-content-center pb-4"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item">
                        <a
                            aria-controls="business"
                            aria-selected="true"
                            className="nav-link active"
                            data-toggle="tab"
                            href="#business"
                            id="business-tab"
                            role="tab"
                        >
                            Business
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            aria-controls="design"
                            aria-selected="false"
                            className="nav-link"
                            data-toggle="tab"
                            href="#design"
                            id="design-tab"
                            role="tab"
                        >
                            Design
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            aria-controls="development"
                            aria-selected="false"
                            className="nav-link"
                            data-toggle="tab"
                            href="#development"
                            id="development-tab"
                            role="tab"
                        >
                            Development
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            aria-controls="drawing"
                            aria-selected="false"
                            className="nav-link"
                            data-toggle="tab"
                            href="#drawing"
                            id="drawing-tab"
                            role="tab"
                        >
                            Drawing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            aria-controls="marketing"
                            aria-selected="false"
                            className="nav-link"
                            data-toggle="tab"
                            href="#marketing"
                            id="marketing-tab"
                            role="tab"
                        >
                            Marketing
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card-content-wrapper bg-gray pt-50px pb-120px">
                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <div
                            aria-labelledby="business-tab"
                            className="tab-pane fade show active"
                            id="business"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img8.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge">
                                                    Bestseller
                                                </div>
                                                <div className="course-badge blue">
                                                    -39%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    12.99{" "}
                                                    <span className="before-price font-weight-medium">
                                                        129.99
                                                    </span>
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img9.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge red">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img10.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img11.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img12.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge green">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    Free
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_1"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img13.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge sky-blue">
                                                    Highest rated
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Business Intelligence
                                                    Analyst Course 2021
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            aria-labelledby="design-tab"
                            className="tab-pane fade"
                            id="design"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img11.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img12.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge green">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    Free
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img13.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge sky-blue">
                                                    Highest rated
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img8.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge">
                                                    Bestseller
                                                </div>
                                                <div className="course-badge blue">
                                                    -39%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    12.99{" "}
                                                    <span className="before-price font-weight-medium">
                                                        129.99
                                                    </span>
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img9.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge red">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_2"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img10.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    Ultimate Adobe Photoshop
                                                    Training: From Beginner to
                                                    Pro
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            aria-labelledby="development-tab"
                            className="tab-pane fade"
                            id="development"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img8.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge">
                                                    Bestseller
                                                </div>
                                                <div className="course-badge blue">
                                                    -39%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    12.99{" "}
                                                    <span className="before-price font-weight-medium">
                                                        129.99
                                                    </span>
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img9.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge red">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img10.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img11.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img12.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge green">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    Free
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_3"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img13.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge sky-blue">
                                                    Highest rated
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete WordPress
                                                    Website Business Course
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            aria-labelledby="drawing-tab"
                            className="tab-pane fade"
                            id="drawing"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img11.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img12.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge green">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    Free
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img13.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge sky-blue">
                                                    Highest rated
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img8.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge">
                                                    Bestseller
                                                </div>
                                                <div className="course-badge blue">
                                                    -39%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    12.99{" "}
                                                    <span className="before-price font-weight-medium">
                                                        129.99
                                                    </span>
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img9.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge red">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_4"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img10.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                Beginner
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Ultimate Drawing Course
                                                    - Beginner to Advanced
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            aria-labelledby="marketing-tab"
                            className="tab-pane fade"
                            id="marketing"
                            role="tabpanel"
                        >
                            <div className="row">
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img8.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge">
                                                    Bestseller
                                                </div>
                                                <div className="course-badge blue">
                                                    -39%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    12.99{" "}
                                                    <span className="before-price font-weight-medium">
                                                        129.99
                                                    </span>
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img9.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge red">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img10.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img11.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img12.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge green">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    Free
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 responsive-column-half">
                                    <div
                                        className="card card-item card-preview"
                                        data-tooltip-content="#tooltip_content_5"
                                    >
                                        <div className="card-image">
                                            <a
                                                className="d-block"
                                                href="course-details.html"
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    className="card-img-top lazy"
                                                    data-src="../../../../assets/frontend/images/img13.jpg"
                                                    src="../../../../assets/frontend/images/img-loading.png"
                                                />
                                            </a>
                                            <div className="course-badge-labels">
                                                <div className="course-badge sky-blue">
                                                    Highest rated
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                All Levels
                                            </h6>
                                            <h5 className="card-title">
                                                <a href="course-details.html">
                                                    The Complete Digital
                                                    Marketing Course - 12
                                                    Courses in 1
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                <a href="teacher-detail.html">
                                                    Jose Portilla
                                                </a>
                                            </p>
                                            <div className="rating-wrap d-flex align-items-center py-2">
                                                <div className="review-stars">
                                                    <span className="rating-number">
                                                        4.4
                                                    </span>
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star" />
                                                    <span className="la la-star-o" />
                                                </div>
                                                <span className="rating-total pl-1">
                                                    (20,230)
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-price text-black font-weight-bold">
                                                    129.99
                                                </p>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="la la-heart-o" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn-box mt-4 text-center">
                        <a className="btn theme-btn" href="course-grid.html">
                            Browse all Courses{" "}
                            <i className="la la-arrow-right icon ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSelection;
