import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    // State variable to control the visibility of submenus
    const [menuOpen, setMenuOpen] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the visibility of the submenu
    const toggleMenu = (key) => {
        // Toggle the menuOpen state for the given key
        setMenuOpen({ ...menuOpen, [key]: !menuOpen[key] });
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <React.Fragment>
            <div className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img
                            src="../../../../assets/backend/images/logo-icon.png"
                            className="logo-icon"
                            alt="logo icon"
                        />
                    </div>
                    <div>
                        <h4 className="logo-text">Admin</h4>
                    </div>
                    <div className="toggle-icon ms-auto" onClick={toggleSidebar}>
                        <i className="bx bx-arrow-back"></i>
                    </div>
                    {/* <div className="toggle-icon ms-auto" onClick={toggleSidebar}>
                        <i className={`bx ${sidebarOpen ? 'bx-arrow-back' : 'bx-arrow-forward'}`}></i>
                    </div>                     */}
                </div>
                {/* <!--navigation--> */}
                <ul className="metismenu" id="menu">
                    <li className={route().current('admin.dashboard') ? `mm-active` : ``}>
                        <Link href={route('admin.dashboard')}>
                            <div className="parent-icon">
                                <i className="bx bx-home-alt"></i>
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </Link>
                    </li>

                    <li className="menu-label">UI Elements</li>

                    <li>
                        <Link className="has-arrow" onClick={() => toggleMenu('category')} aria-expanded={menuOpen['category'] ? `true` : `false`}>
                            <div className="parent-icon">
                                <i className="bx bx-cart"></i>
                            </div>
                            <div className="menu-title">Manage Category</div>
                        </Link>
                        <ul className={menuOpen['category'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href={route("all.category")}>
                                    <i className="bx bx-radio-circle"></i>All
                                    Category
                                </Link>
                            </li>
                            <li>
                                <Link href={route("all.subcategory")}>
                                    <i className="bx bx-radio-circle"></i>All
                                    SubCategory
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#" className="has-arrow" onClick={() => toggleMenu('instructor')} aria-expanded={menuOpen['instructor'] ? "true" : "false"}>
                            <div className="parent-icon">
                                <i className="bx bx-cart"></i>
                            </div>
                            <div className="menu-title">Manage Instructors</div>
                        </Link>
                        <ul className={menuOpen['instructor'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href={route('all.instructor')}>
                                    <i className="bx bx-radio-circle"></i>All
                                    Instructors
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#" className="has-arrow" onClick={() => toggleMenu('product')} aria-expanded={menuOpen['product'] ? "true" : "false"}>
                            <div className="parent-icon">
                                <i className="bx bx-cart"></i>
                            </div>
                            <div className="menu-title">eCommerce</div>
                        </Link>
                        <ul className={menuOpen['product'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href="ecommerce-products.html">
                                    <i className="bx bx-radio-circle"></i>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="ecommerce-products-details.html">
                                    <i className="bx bx-radio-circle"></i>
                                    Product Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" href="#" onClick={() => toggleMenu('d')} aria-expanded={menuOpen['d'] ? "true" : "false"}>
                            <div className="parent-icon">
                                <i className="bx bx-bookmark-heart"></i>
                            </div>
                            <div className="menu-title">Components</div>
                        </Link>
                        <ul className={menuOpen['d'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href="component-alerts.html">
                                    <i className="bx bx-radio-circle"></i>Alerts
                                </Link>
                            </li>
                            <li>
                                <Link href="component-accordions.html">
                                    <i className="bx bx-radio-circle"></i>
                                    Accordions
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-label">Charts & Maps</li>
                    <li>
                        <Link className="has-arrow" href="#" onClick={() => toggleMenu('chart')} aria-expanded={menuOpen['chart'] ? "true" : "false"}>
                            <div className="parent-icon">
                                <i className="bx bx-line-chart"></i>
                            </div>
                            <div className="menu-title">Charts</div>
                        </Link>
                        <ul className={menuOpen['chart'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href="charts-apex-chart.html">
                                    <i className="bx bx-radio-circle"></i>Apex
                                </Link>
                            </li>
                            <li>
                                <Link href="charts-chartjs.html">
                                    <i className="bx bx-radio-circle"></i>
                                    Chartjs
                                </Link>
                            </li>
                            <li>
                                <Link href="charts-highcharts.html">
                                    <i className="bx bx-radio-circle"></i>
                                    Highcharts
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" href="#" onClick={() => toggleMenu('map')}aria-expanded={menuOpen['map'] ? "true" : "false"}>
                            <div className="parent-icon">
                                <i className="bx bx-map-alt"></i>
                            </div>
                            <div className="menu-title">Maps</div>
                        </Link>
                        <ul className={menuOpen['map'] ? "mm-collapse mm-show" : "mm-collapse"}>
                            <li>
                                <Link href="map-google-maps.html">
                                    <i className="bx bx-radio-circle"></i>Google
                                    Maps
                                </Link>
                            </li>
                            <li>
                                <Link href="map-vector-maps.html">
                                    <i className="bx bx-radio-circle"></i>Vector
                                    Maps
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="https://themeforest.net/user/codervent"
                            target="_blank"
                        >
                            <div className="parent-icon">
                                <i className="bx bx-support"></i>
                            </div>
                            <div className="menu-title">Support</div>
                        </Link>
                    </li>
                </ul>
                {/* <!--end navigation--> */}
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
