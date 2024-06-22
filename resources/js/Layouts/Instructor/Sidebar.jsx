import React, {useState} from "react";
import { Link, usePage } from "@inertiajs/react";

const Sidebar = () => {
    const { instructor } = usePage().props;

    // State variable to control the visibility of submenus
    const [menuOpen, setMenuOpen] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the visibility of the submenu
    const toggleMenu = (key) => {
        // Toggle the menuOpen state for the given key
        setMenuOpen({ ...menuOpen, [key]: !menuOpen[key] });
    };

    const toggleSidebar = () => {
        // setSidebarOpen(!sidebarOpen);
        setSidebarOpen(prevSidebarOpen => !prevSidebarOpen);
    };    

    return (
        <div className={`sidebar-wrapper ${sidebarOpen ? "" : "sidebar-closed"}`}  data-simplebar="true">
            <div className="sidebar-header">
                <div>
                    <img
                        src="../../../../assets/backend/images/logo-icon.png"
                        className="logo-icon"
                        alt="logo icon"
                    />
                </div>
                <div>
                    <h4 className="logo-text">Instructor</h4>
                </div>
                <div className="toggle-icon ms-auto">
                    <i className="bx bx-arrow-back" onClick={toggleSidebar} />
                </div>
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
                <li className={route().current('instructor.dashboard') ? `mm-active` : ``}>
                    <Link href={ route('instructor.dashboard') }>
                        <div className="parent-icon">
                            <i className="bx bx-home-alt" />
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </Link>
                </li>
                 
                <li className="menu-label">UI Elements</li>

                {instructor.status == 1 ? (
                    // Render only if user is an instructor and status is 1
                    <React.Fragment>
                        <li>
                            <Link href="javascript:;" className="has-arrow" onClick={() => toggleMenu('courses')} aria-expanded={menuOpen['courses'] ? `true` : `false`}>
                                <div className="parent-icon">
                                    <i className="bx bx-list" />
                                </div>
                                <div className="menu-title">Manage Courses</div>
                            </Link>
                            <ul className={menuOpen['courses'] ? "mm-collapse mm-show" : "mm-collapse"}>
                                <li>
                                    <Link href={ route('all.course') }>
                                        <i className="bx bx-radio-circle" />
                                        All Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ route('create.course') }>
                                        <i className="bx bx-radio-circle" />
                                        Add Course
                                    </Link>
                                </li>
                            </ul>
                        </li>
                  
                        <li className="menu-label">Charts &amp; Maps</li>
                        <li>
                            <Link className="has-arrow"  onClick={() => toggleMenu('chart')} aria-expanded={menuOpen['chart'] ? "true" : "false"} href="javascript:;">
                                <div className="parent-icon">
                                    <i className="bx bx-line-chart" />
                                </div>
                                <div className="menu-title">Charts</div>
                            </Link>
                            <ul className={menuOpen['chart'] ? "mm-collapse mm-show" : "mm-collapse"}>
                                <li>
                                    <Link href="charts-apex-chart.html">
                                        <i className="bx bx-radio-circle" />
                                        Apex
                                    </Link>
                                </li>
                                <li>
                                    <Link href="charts-chartjs.html">
                                        <i className="bx bx-radio-circle" />
                                        Chartjs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="charts-highcharts.html">
                                        <i className="bx bx-radio-circle" />
                                        Highcharts
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="has-arrow"  onClick={() => toggleMenu('map')} aria-expanded={menuOpen['map'] ? "true" : "false"} href="javascript:;">
                                <div className="parent-icon">
                                    <i className="bx bx-map-alt" />
                                </div>
                                <div className="menu-title">Maps</div>
                            </Link>
                            <ul className={menuOpen['map'] ? "mm-collapse mm-show" : "mm-collapse"}>
                                <li>
                                    <Link href="map-google-maps.html">
                                        <i className="bx bx-radio-circle" />
                                        Google Maps
                                    </Link>
                                </li>
                                <li>
                                    <Link href="map-vector-maps.html">
                                        <i className="bx bx-radio-circle" />
                                        Vector Maps
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </React.Fragment> ) : (<li></li>)             
                }



                <li>
                    <Link
                        href="https://themeforest.net/user/codervent"
                        target="_blank"
                    >
                        <div className="parent-icon">
                            <i className="bx bx-support" />
                        </div>
                        <div className="menu-title">Support</div>
                    </Link>
                </li>
            </ul>
            {/*end navigation*/}
        </div>
    );
};

export default Sidebar;
