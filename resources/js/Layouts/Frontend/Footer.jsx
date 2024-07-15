import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <React.Fragment>
        <section className="footer-area pt-100px">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                <Link   href="index.html">
                    <img
                    src="../../../../assets/frontend/images/logo.png"
                    alt="footer logo"
                    className="footer__logo"
                    />
                </Link  >
                <ul className="generic-list-item pt-4">
                    <li>
                    <Link   href="tel:+1631237884">+163 123 7884</Link  >
                    </li>
                    <li>
                    <Link   href="mailto:support@wbsite.com">support@website.com</Link  >
                    </li>
                    <li>Melbourne, Australia, 105 South Park Avenue</li>
                </ul>
                <h3 className="fs-20 font-weight-semi-bold pt-4 pb-2">We are on</h3>
                <ul className="social-icons social-icons-styled">
                    <li className="mr-1">
                    <Link   href="#" className="facebook-bg">
                        <i className="la la-facebook" />
                    </Link  >
                    </li>
                    <li className="mr-1">
                    <Link   href="#" className="twitter-bg">
                        <i className="la la-twitter" />
                    </Link  >
                    </li>
                    <li className="mr-1">
                    <Link   href="#" className="instagram-bg">
                        <i className="la la-instagram" />
                    </Link  >
                    </li>
                    <li className="mr-1">
                    <Link   href="#" className="linkedin-bg">
                        <i className="la la-linkedin" />
                    </Link  >
                    </li>
                </ul>
                </div>
                {/* end footer-item */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                <h3 className="fs-20 font-weight-semi-bold">Company</h3>
                <span className="section-divider section--divider" />
                <ul className="generic-list-item">
                    <li>
                    <Link   href="#">About us</Link  >
                    </li>
                    <li>
                    <Link   href="#">Contact us</Link  >
                    </li>
                    <li>
                    <Link href="#" onClick={() => window.open(route('instructor.request.login'), "_blank")}>Teach on Aduca</Link  >
                    </li>
                    <li>
                    <Link   href="#">Support</Link  >
                    </li>
                    <li>
                    <Link   href="#">FAQs</Link  >
                    </li>
                    <li>
                    <Link   href="#">Blog</Link  >
                    </li>
                </ul>
                </div>
                {/* end footer-item */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                <h3 className="fs-20 font-weight-semi-bold">Courses</h3>
                <span className="section-divider section--divider" />
                <ul className="generic-list-item">
                    <li>
                    <Link   href="#">Web Development</Link  >
                    </li>
                    <li>
                    <Link   href="#">Hacking</Link  >
                    </li>
                    <li>
                    <Link   href="#">PHP Learning</Link  >
                    </li>
                    <li>
                    <Link   href="#">Spoken English</Link  >
                    </li>
                    <li>
                    <Link   href="#">Self-Driving Car</Link  >
                    </li>
                    <li>
                    <Link   href="#">Garbage Collectors</Link  >
                    </li>
                </ul>
                </div>
                {/* end footer-item */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                <h3 className="fs-20 font-weight-semi-bold">Download App</h3>
                <span className="section-divider section--divider" />
                <div className="mobile-app">
                    <p className="pb-3 lh-24">
                    Download our mobile app and learn on the go.
                    </p>
                    <Link   href="#" className="d-block mb-2 hover-s">
                    <img
                        src="../../../../assets/frontend/images/appstore.png"
                        alt="App store"
                        className="img-fluid"
                    />
                    </Link  >
                    <Link   href="#" className="d-block hover-s">
                    <img
                        src="../../../../assets/frontend/images/googleplay.png"
                        alt="Google play store"
                        className="img-fluid"
                    />
                    </Link  >
                </div>
                </div>
                {/* end footer-item */}
            </div>
            {/* end col-lg-3 */}
            </div>
            {/* end row */}
        </div>
        {/* end container */}
        <div className="section-block" />
        <div className="copyright-content py-4">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <p className="copy-desc">
                    © 2021 Aduca. All Rights Reserved. by{" "}
                    <Link   href="https://techydevs.com/">TechyDevs</Link  >
                </p>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                <div className="d-flex flex-wrap align-items-center justify-content-end">
                    <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                    <li className="mr-3">
                        <Link   href="terms-and-conditions.html">Terms &amp; Conditions</Link  >
                    </li>
                    <li className="mr-3">
                        <Link   href="privacy-policy.html">Privacy Policy</Link  >
                    </li>
                    </ul>
                    <div className="select-container select-container-sm">
                    <select className="select-container-select">
                        <option value={1}>English</option>
                        <option value={2}>Deutsch</option>
                        <option value={3}>Español</option>
                        <option value={4}>Français</option>
                        <option value={5}>Bahasa Indonesia</option>
                        <option value={6}>Bangla</option>
                        <option value={7}>日本語</option>
                        <option value={8}>한국어</option>
                        <option value={9}>Nederlands</option>
                        <option value={10}>Polski</option>
                        <option value={11}>Português</option>
                        <option value={12}>Română</option>
                        <option value={13}>Русский</option>
                        <option value={14}>ภาษาไทย</option>
                        <option value={15}>Türkçe</option>
                        <option value={16}>中文(简体)</option>
                        <option value={17}>中文(繁體)</option>
                        <option value={17}>Hindi</option>
                    </select>
                    </div>
                </div>
                </div>
                {/* end col-lg-6 */}
            </div>
            {/* end row */}
            </div>
            {/* end container */}
        </div>
        {/* end copyright-content */}
        </section>   
    </React.Fragment>
  )
}

export default Footer
