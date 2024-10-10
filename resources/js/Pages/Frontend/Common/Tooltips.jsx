import React from "react";

const Tooltips = ({courses, selectedCategory}) => {
    return (
        <>
            {courses.map((course) => (
                <div key={course.id} className="tooltip_templates">
                    <div id={`tooltip_content_${selectedCategory == 'all' ? course.id : selectedCategory}`}>
                        <div className="card card-item">
                            <div className="card-body">
                                <p className="card-text pb-2">
                                    By{" "}
                                    <a href="teacher-detail.html">
                                        {course.instructor.name}
                                    </a>
                                </p>
                                <h5 className="card-title pb-1">
                                    <a href="course-details.html">
                                        {course.course_name}
                                    </a>
                                </h5>
                                <div className="d-flex align-items-center pb-1">
                                    <h6 className="ribbon fs-14 mr-2">
                                        Bestseller
                                    </h6>
                                    <p className="text-success fs-14 font-weight-medium">
                                        Updated
                                        <span className="font-weight-bold pl-1">
                                            November 2020
                                        </span>
                                    </p>
                                </div>
                                <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center fs-14">
                                    <li>23 total hours</li>
                                    <li>All Levels</li>
                                </ul>
                                <p className="card-text pt-1 fs-14 lh-22">
                                    The skills you need to become a BI Analyst -
                                    Statistics, Database theory, SQL, Tableau –
                                    Everything is included
                                </p>
                                <ul className="generic-list-item fs-14 py-3">
                                    <li>
                                        <i className="la la-check mr-1 text-black"></i>{" "}
                                        Become an expert in Statistics, SQL,
                                        Tableau, and problem solving
                                    </li>
                                    <li>
                                        <i className="la la-check mr-1 text-black"></i>{" "}
                                        Boost your resume with in-demand skills
                                    </li>
                                    <li>
                                        <i className="la la-check mr-1 text-black"></i>{" "}
                                        Gather, organize, analyze and visualize
                                        data
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a
                                        href="#"
                                        className="btn theme-btn flex-grow-1 mr-3"
                                    >
                                        <i className="la la-shopping-cart mr-1 fs-18"></i>{" "}
                                        Add to Cart
                                    </a>
                                    <div
                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                        title="Add to Wishlist"
                                    >
                                        <i className="la la-heart-o"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Tooltips;
