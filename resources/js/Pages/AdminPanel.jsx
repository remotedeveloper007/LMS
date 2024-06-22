import React, { useState, useEffect } from 'react';
import { router } from "@inertiajs/react";
import Header from '../Layouts/Admin/Header';
import Sidebar from '../Layouts/Admin/Sidebar';
import Footer from '../Layouts/Admin/Footer';
import  '../../css/loader.css';

const AdminPanel = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [loading, setLoading] = useState();

  useEffect(() => {
      router.on("start", () => {
          setLoading(true);
      });

      router.on("finish", () => {
          setLoading(false);
      });
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  

  return (
    <React.Fragment>
      <div className="wrapper">
          {/* <!--sidebar wrapper --> */}
              <Sidebar/>
          {/* <!--end sidebar wrapper --> */}

          {/* <!--start header --> */}
              <Header/>
          {/* <!--end header --> */}

          {/* <!--start page wrapper --> */}
          <div className="page-wrapper">
            {/* <div className="page-content"> */}
              { loading ? (
                    <div className="loader">
                        <div className="dot" id="dot1"></div>
                        <div className="dot" id="dot2"></div>
                        <div className="dot" id="dot3"></div>
                    </div>
              ) : (  children )}
                
            {/* </div> */}
          </div>
          {/* <!--end page wrapper --> */}
        
          {/* <!--start overlay--> */}
      <div className="overlay toggle-icon"></div>
        {/* <!--end overlay--> */}
        {/* <!--Start Back To Top Button--> */}
        {/* <a href="javaScript:;" className="back-to-top"> */}
        <a href="#javaScript:;" className="back-to-top">
          <i className='bx bxs-up-arrow-alt'></i>
        </a>
        {/* <!--End Back To Top Button--> */}
              <Footer/>
        {/* <!--end footer--> */}
      </div>
      {/* <!--end wrapper--> */}


      {/* <!-- search modal --> */}
      <div className="modal" id="SearchModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
          <div className="modal-content">
          <div className="modal-header gap-2">
            <div className="position-relative popup-search w-100">
            <input className="form-control form-control-lg ps-5 border border-3 border-primary" type="search" placeholder="Search"/>
            <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4"><i className='bx bx-search'></i></span>
            </div>
            <button type="button" className="btn-close d-md-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="search-list">
              <p className="mb-1">Html Templates</p>
              <div className="list-group">
                <a href="#javascript:;" className="list-group-item list-group-item-action active align-items-center d-flex gap-2 py-1"><i className='bx bxl-angular fs-4'></i>Best Html Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-vuejs fs-4'></i>Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-magento fs-4'></i>Responsive Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-shopify fs-4'></i>eCommerce Html Templates</a>
              </div>
              <p className="mb-1 mt-3">Web Designe Company</p>
              <div className="list-group">
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-windows fs-4'></i>Best Html Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-dropbox fs-4' ></i>Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-opera fs-4'></i>Responsive Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-wordpress fs-4'></i>eCommerce Html Templates</a>
              </div>
              <p className="mb-1 mt-3">Software Development</p>
              <div className="list-group">
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-mailchimp fs-4'></i>Best Html Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-zoom fs-4'></i>Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-sass fs-4'></i>Responsive Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-vk fs-4'></i>eCommerce Html Templates</a>
              </div>
              <p className="mb-1 mt-3">Online Shoping Portals</p>
              <div className="list-group">
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-slack fs-4'></i>Best Html Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-skype fs-4'></i>Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-twitter fs-4'></i>Responsive Html5 Templates</a>
                <a href="#javascript:;" className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-vimeo fs-4'></i>eCommerce Html Templates</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* <!-- end search modal --> */}




      {/* <!--start switcher--> */}
      <div className="switcher-wrapper">
        <div className="switcher-btn"> <i className='bx bx-cog bx-spin'></i>
        </div>
        <div className="switcher-body">
          <div className="d-flex align-items-center">
            <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
            <button type="button" className="btn-close ms-auto close-switcher" aria-label="Close"></button>
          </div>
          <hr/>
          <h6 className="mb-0">Theme Styles</h6>
          <hr/>
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input className="form-check-input" type="radio" checked={isChecked}name="flexRadioDefault" id="lightmode" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="lightmode">Light</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="darkmode"/>
              <label className="form-check-label" htmlFor="darkmode">Dark</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="semidark"/>
              <label className="form-check-label" htmlFor="semidark">Semi Dark</label>
            </div>
          </div>
          <hr/>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="minimaltheme" name="flexRadioDefault"/>
            <label className="form-check-label" htmlFor="minimaltheme">Minimal Theme</label>
          </div>
          <hr/>
          <h6 className="mb-0">Header Colors</h6>
          <hr/>
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div className="indigator headercolor1" id="headercolor1"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor2" id="headercolor2"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor3" id="headercolor3"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor4" id="headercolor4"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor5" id="headercolor5"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor6" id="headercolor6"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor7" id="headercolor7"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor8" id="headercolor8"></div>
              </div>
            </div>
          </div>
          <hr/>
          <h6 className="mb-0">Sidebar Colors</h6>
          <hr/>
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div className="indigator sidebarcolor1" id="sidebarcolor1"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor2" id="sidebarcolor2"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor3" id="sidebarcolor3"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor4" id="sidebarcolor4"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor5" id="sidebarcolor5"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor6" id="sidebarcolor6"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor7" id="sidebarcolor7"></div>
              </div>
              <div className="col">
                <div className="indigator sidebarcolor8" id="sidebarcolor8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end switcher--> */}


    </React.Fragment>
  )
}

export default AdminPanel
