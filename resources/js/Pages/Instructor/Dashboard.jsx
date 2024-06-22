import React, { useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import InstructorPanel from "../InstructorPanel";
import * as ChatHelper from '../../style';

const Dashboard = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        return () => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
                ChatHelper.chart1(ctx);
            }
        };
    }, []);

    return (
        <React.Fragment>
            {/* <h1>Welcome to Instructor Dashboard</h1> */}
            <div className="page-content">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                    <div className="col">
                        <div className="card radius-10 border-start border-0 border-4 border-info">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">
                                            Total Orders
                                        </p>
                                        <h4 className="my-1 text-info">4805</h4>
                                        <p className="mb-0 font-13">
                                            +2.5% from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons-2 rounded-circle bg-gradient-blues text-white ms-auto">
                                        <i className="bx bxs-cart" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10 border-start border-0 border-4 border-danger">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">
                                            Total Revenue
                                        </p>
                                        <h4 className="my-1 text-danger">
                                            $84,245
                                        </h4>
                                        <p className="mb-0 font-13">
                                            +5.4% from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons-2 rounded-circle bg-gradient-burning text-white ms-auto">
                                        <i className="bx bxs-wallet" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10 border-start border-0 border-4 border-success">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">
                                            Bounce Rate
                                        </p>
                                        <h4 className="my-1 text-success">
                                            34.6%
                                        </h4>
                                        <p className="mb-0 font-13">
                                            -4.5% from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                                        <i className="bx bxs-bar-chart-alt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10 border-start border-0 border-4 border-warning">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">
                                            Total Customers
                                        </p>
                                        <h4 className="my-1 text-warning">
                                            8.4K
                                        </h4>
                                        <p className="mb-0 font-13">
                                            +8.4% from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons-2 rounded-circle bg-gradient-orange text-white ms-auto">
                                        <i className="bx bxs-group" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end row*/}

                <div className="row">
                    <div className="col-12 col-lg-12 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-header">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6 className="mb-0">Sales Overview</h6>
                                    </div>
                                    <div className="dropdown ms-auto">
                                        <Link
                                            className="dropdown-toggle dropdown-toggle-nocaret"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="bx bx-dots-horizontal-rounded font-22 text-option"></i>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="javascript:;"
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="javascript:;"
                                                >
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="javascript:;"
                                                >
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center ms-auto font-13 gap-2 mb-3">
                                    <span className="border px-1 rounded cursor-pointer">
                                        <i
                                            className="bx bxs-circle me-1"
                                            style={{ color: "#14abef" }}
                                        ></i>
                                        Sales
                                    </span>
                                    <span className="border px-1 rounded cursor-pointer">
                                        <i
                                            className="bx bxs-circle me-1"
                                            style={{ color: "#ffc107" }}
                                        ></i>
                                        Visits
                                    </span>
                                </div>
                                <div className="chart-container-1">
                                    {/* <canvas id="chart1"></canvas> */}
                                    <canvas ref={canvasRef}></canvas>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                                <div className="col">
                                    <div className="p-3">
                                        <h5 className="mb-0">24.15M</h5>
                                        <small className="mb-0">
                                            Overall Visitor{" "}
                                            <span>
                                                {" "}
                                                <i className="bx bx-up-arrow-alt align-middle"></i>{" "}
                                                2.43%
                                            </span>
                                        </small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3">
                                        <h5 className="mb-0">12:38</h5>
                                        <small className="mb-0">
                                            Visitor Duration{" "}
                                            <span>
                                                {" "}
                                                <i className="bx bx-up-arrow-alt align-middle"></i>{" "}
                                                12.65%
                                            </span>
                                        </small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3">
                                        <h5 className="mb-0">639.82</h5>
                                        <small className="mb-0">
                                            Pages/Visit{" "}
                                            <span>
                                                {" "}
                                                <i className="bx bx-up-arrow-alt align-middle"></i>{" "}
                                                5.62%
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}

                {/*end row*/}
                <div className="card radius-10">
                    <div className="card-header">
                        <div className="d-flex align-items-center">
                            <div>
                                <h6 className="mb-0">Recent Orders</h6>
                            </div>
                            <div className="dropdown ms-auto">
                                <Link
                                    className="dropdown-toggle dropdown-toggle-nocaret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="javascript:;"
                                        >
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="javascript:;"
                                        >
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="javascript:;"
                                        >
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Photo</th>
                                        <th>Product ID</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Shipping</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Iphone 5</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/01.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#9405822</td>
                                        <td>
                                            <span className="badge bg-gradient-quepal text-white shadow-sm w-100">
                                                Paid
                                            </span>
                                        </td>
                                        <td>$1250.00</td>
                                        <td>03 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-quepal"
                                                    role="progressbar"
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Earphone GL</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/02.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#8304620</td>
                                        <td>
                                            <span className="badge bg-gradient-blooker text-white shadow-sm w-100">
                                                Pending
                                            </span>
                                        </td>
                                        <td>$1500.00</td>
                                        <td>05 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-blooker"
                                                    role="progressbar"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>HD Hand Camera</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/03.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#4736890</td>
                                        <td>
                                            <span className="badge bg-gradient-bloody text-white shadow-sm w-100">
                                                Failed
                                            </span>
                                        </td>
                                        <td>$1400.00</td>
                                        <td>06 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-bloody"
                                                    role="progressbar"
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Clasic Shoes</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/04.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#8543765</td>
                                        <td>
                                            <span className="badge bg-gradient-quepal text-white shadow-sm w-100">
                                                Paid
                                            </span>
                                        </td>
                                        <td>$1200.00</td>
                                        <td>14 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-quepal"
                                                    role="progressbar"
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sitting Chair</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/06.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#9629240</td>
                                        <td>
                                            <span className="badge bg-gradient-blooker text-white shadow-sm w-100">
                                                Pending
                                            </span>
                                        </td>
                                        <td>$1500.00</td>
                                        <td>18 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-blooker"
                                                    role="progressbar"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hand Watch</td>
                                        <td>
                                            <img
                                                src="../../../../assets/backend/images/products/05.png"
                                                className="product-img-2"
                                                alt="product img"
                                            />
                                        </td>
                                        <td>#8506790</td>
                                        <td>
                                            <span className="badge bg-gradient-bloody text-white shadow-sm w-100">
                                                Failed
                                            </span>
                                        </td>
                                        <td>$1800.00</td>
                                        <td>21 Feb 2020</td>
                                        <td>
                                            <div
                                                className="progress"
                                                style={{ height: 6 }}
                                            >
                                                <div
                                                    className="progress-bar bg-gradient-bloody"
                                                    role="progressbar"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Dashboard.layout = (page) => <InstructorPanel children={page} />;

export default Dashboard;
