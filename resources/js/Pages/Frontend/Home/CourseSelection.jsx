import React, { useState, useEffect } from "react";
import Tooltips from "../Common/Tooltips";
import axios from "axios";
import $ from 'jquery';
import 'tooltipster';

const CourseSelection = ({categories}) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [courses, setCourses] = useState([])

    useEffect(() => {
      // Fetch courses based on selected category
      const fetchCourses = async () => {
        const response = await axios.get(`/courses/${selectedCategory}`);
        setCourses(response.data.courses)
      };
    
      fetchCourses();
    }, [selectedCategory])
    

    useEffect(() => {
        // Initialize tooltips after the component mounts
        // $('[data-toggle="tooltip"]').tooltip;
        
        const cardPreview = $('.card-preview');

        // if ($(cardPreview).length) {
        //     $(cardPreview).tooltipster({
        //         contentCloning: true,
        //         interactive: true,
        //         side: 'right',
        //         delay: 100,
        //         animation: 'swing',
        //         // trigger: 'click'
        //     });
        // }
        $('.card-preview').tooltipster({
            contentCloning: true,
            interactive: true,
            side: 'right',
            delay: 100,
            animation: 'swing',
        });
    }, [courses]);

    const hasCourses = courses.length > 0;

    const listItemStyle = { cursor: 'pointer' };
    const fwCat = { fontWeight: 'bolder' }

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
                        <span
                            aria-controls="all"
                            aria-selected={selectedCategory === 'all'}
                            className={`nav-link ${selectedCategory === 'all' ? 'active' : ''} `}
                            data-toggle="tab"
                            href="#all"
                            id="all-tab" 
                            role="tab"
                            onClick={() => setSelectedCategory('all')}
                            style={listItemStyle}
                        > All </span>
                    </li>
                    {categories.map((category) => (
                        <li key={category.id} className="nav-item">
                            <span
                                aria-controls={category.id}
                                aria-selected={selectedCategory === category.id}
                                className={`nav-link ${selectedCategory === category.id ? 'active' : ''}`}
                                data-toggle="tab"
                                href={`#${selectedCategory}`}
                                id={`${selectedCategory}-tab`}
                                role="tab"
                                onClick={() => setSelectedCategory(category.id)}
                                style={listItemStyle}
                            >
                                {category.category_name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-content-wrapper bg-gray pt-50px pb-120px">
                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade ${selectedCategory === 'all' ? 'show active' : ''}`} id="all" role="tabpanel"  aria-labelledby="all-tab">
                            <div className="row">
                                {courses.map((course) => (
                                    <div key={course.id} className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a
                                                    className="d-block"
                                                    href="course-details.html"
                                                >
                                                    <img
                                                        alt="Card image cap"
                                                        className="card-img-top lazy"
                                                        data-src={`${course.course_image}`}        
                                                        src={`/${course.course_image}`}
                                                    />
                                                </a>
                                                <div className="course-badge-labels">
                                                    {course.bestseller == 1 ? (
                                                        <div className="course-badge">
                                                            Bestseller
                                                        </div>
                                                    ) : (<div></div>)}
                                                    
                                                    {course.discount_price == null ? (
                                                        <div className="course-badge blue">
                                                          New   
                                                        </div>
                                                    ) : (
                                                        <div className="course-badge blue">
                                                        {Math.round(course.selling_price - course.discount_price/100)} %  
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                    {course.label}
                                                </h6>
                                                <h5 className="card-title">
                                                    <a href="course-details.html">
                                                        {course.course_name}
                                                    </a>
                                                </h5>
                                                <p className="card-text">
                                                    <a href="teacher-detail.html">
                                                        {course.instructor.name}
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
                                                    {course.discount_price == null ? (
                                                        <p className="card-price text-black font-weight-bold">
                                                        ${course.selling_price} </p>
                                                    ) : (
                                                        <p className="card-price text-black font-weight-bold"> ${course.discount_price}       <span className="before-price font-weight-medium">    ${course.selling_price} </span>
                                                        </p>
                                                    )}
                                                    
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
                                ))}
                            </div>
                            {/* Render the Tooltips component */}
                            <Tooltips courses={courses} />
                        </div> 

                        <div className={`tab-pane fade ${selectedCategory !== 'all' ? 'show active' : ''}`} id={`#${selectedCategory}`} role="tabpanel" aria-labelledby={`${selectedCategory}-tab`}>
                            <div className="row">
                                {courses.length > 0 ? 
                                    (courses.map((course) => (
                                            <div key={course.id} className="col-lg-4 responsive-column-half">
                                                <div className="card card-item card-preview" data-tooltip-content={`#tooltip_content_${selectedCategory}`}>
                                                    <div className="card-image">
                                                        <a
                                                            className="d-block"
                                                            href="course-details.html"
                                                        >
                                                            <img
                                                                alt="Card image cap"
                                                                className="card-img-top lazy"
                                                                data-src={`${course.course_image}`}        
                                                                src={`/${course.course_image}`}
                                                            />
                                                        </a>
                                                        <div className="course-badge-labels">
                                                            {course.bestseller == 1 ? (
                                                                <div className="course-badge">
                                                                    Bestseller
                                                                </div>
                                                            ) : (<div></div>)}
                                                            
                                                            {course.discount_price == null ? (
                                                                <div className="course-badge blue">
                                                                New   
                                                                </div>
                                                            ) : (
                                                                <div className="course-badge blue">
                                                                {Math.round(course.selling_price - course.discount_price/100)} %  
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">
                                                            {course.label}
                                                        </h6>
                                                        <h5 className="card-title">
                                                            <a href="course-details.html">
                                                                {course.course_name}
                                                            </a>
                                                        </h5>
                                                        <p className="card-text">
                                                            <a href="teacher-detail.html">
                                                                {course.instructor.name}
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
                                                            {course.discount_price == null ? (
                                                                <p className="card-price text-black font-weight-bold">
                                                                ${course.selling_price} </p>
                                                            ) : (
                                                                <p className="card-price text-black font-weight-bold"> ${course.discount_price}       <span className="before-price font-weight-medium">    ${course.selling_price} </span>
                                                                </p>
                                                            )}
                                                            
                                                            <div
                                                                className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                                title="Add to Wishlist"
                                                            >
                                                                <i className="la la-heart-o" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tooltip Content */}
                                                {/* <div id={`tooltip_content_${course.id}`} className="tooltip_templates">
                                                    <div className="card card-item">
                                                        <div className="card-body">
                                                            <p className="card-text pb-2">By <a href="teacher-detail.html">{course.instructor.name}</a></p>
                                                            <h5 className="card-title pb-1"><a href="course-details.html">{course.course_name}</a></h5>
                                                            <div className="d-flex align-items-center pb-1">
                                                                <h6 className="ribbon fs-14 mr-2">Bestseller</h6>
                                                                <p className="text-success fs-14 font-weight-medium">Updated<span className="font-weight-bold pl-1">November 2020</span></p>
                                                            </div>
                                                            <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center fs-14">
                                                                <li>23 total hours</li>
                                                                <li>All Levels</li>
                                                            </ul>
                                                            <p className="card-text pt-1 fs-14 lh-22">The skills you need to become a BI Analyst - Statistics, Database theory, SQL, Tableau – Everything is included</p>
                                                            <ul className="generic-list-item fs-14 py-3">
                                                                <li><i className="la la-check mr-1 text-black"></i> Become an expert in Statistics, SQL, Tableau, and problem solving</li>
                                                                <li><i className="la la-check mr-1 text-black"></i> Boost your resume with in-demand skills</li>
                                                                <li><i className="la la-check mr-1 text-black"></i> Gather, organize, analyze and visualize data</li>
                                                            </ul>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <a href="#" className="btn theme-btn flex-grow-1 mr-3"><i className="la la-shopping-cart mr-1 fs-18"></i> Add to Cart</a>
                                                                <div className="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist">
                                                                    <i className="la la-heart-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>
                                        ))
                                    ) : (
                                        categories.map((category) => (
                                            category.id === selectedCategory ? (
                                                <div key={category.id} className="d-flex flex-grow-1 justify-content-center h2">
                                                    <div className="text-center">
                                                        <p className="ribbon ribbon-lg mb-2 h2">No Courses available in <span style={fwCat}>{category.category_name}</span> category</p>
                                                    </div>
                                                </div>
                                            ) : null
                                        ))                             
                                    )
                                }  
                            </div>
 
                        </div>
                    </div>

                    <div className="more-btn-box mt-4 text-center">
                        <a className="btn theme-btn" href="course-grid.html">
                            Browse all Courses
                            <i className="la la-arrow-right icon ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Render the Tooltips component */}
            <Tooltips courses={courses} selectedCategory={selectedCategory} />
        </section>
    );
};

export default CourseSelection;
