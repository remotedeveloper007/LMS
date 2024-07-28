import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import YouTubeVideo from "react-modal-video";
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';

const HeroSection = () => {
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    //
    useEffect(() => {
        const owl = $(".hero-slider").owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          navText: [
            '<i class="la la-arrow-left"></i>',
            '<i class="la la-arrow-right"></i>',
          ],
        });
    
        return () => {
          owl.trigger("destroy.owl.carousel");
        };
      }, []); // Empty dependency array ensures useEffect runs only once


    // Function to open modal and set video source
    const openModal = (videoId, e) => {
        e.preventDefault();
        setVideoId(videoId);
        setOpen(true);
    };
    
    // const closeModal = () => {
    //     setVideoId("");
    //     setOpen(false);
    // };


    return (
        <React.Fragment>
            <section className="hero-area">
                <div className="hero-slider owl-carousel owl-theme">
                    <div className="hero-slider-item hero-bg-1">
                        <div className="container">
                            <div className="hero-content">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">
                                        We Help You Learn
                                        <br />
                                        What You Love
                                    </h2>
                                    <p className="section__desc text-white pb-4">
                                        Emply dummy text of the printing and
                                        typesetting industry orem Ipsum has been
                                        the
                                        <br />
                                        industry's standard dummy text ever
                                        sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1">
                                    <Link
                                        className="btn theme-btn mr-4 mb-4"
                                        href="admission.html"
                                    >
                                        Join with Us
                                        <i className="la la-arrow-right icon ml-1" />
                                    </Link>
                                    <Link
                                        preserveScroll
                                        className="btn-text video-play-btn mb-4"
                                        data-fancybox=""
                                        data-src="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                                        onClick={(e) => openModal("cRXm1p-CNyk", e)}
                                    >
                                        Watch Preview
                                        <i className="la la-play icon-btn ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slider-item hero-bg-2">
                        <div className="container">
                            <div className="hero-content text-center">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">
                                        Join Aduca & Get
                                        <br />
                                        Your Free Courses!
                                    </h2>
                                    <p className="section__desc text-white pb-4">
                                        Emply dummy text of the printing and
                                        typesetting industry orem Ipsum has been
                                        the
                                        <br />
                                        industry's standard dummy text ever
                                        sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1 justify-content-center">
                                    <Link
                                        className="btn theme-btn mr-4 mb-4"
                                        href="admission.html"
                                    >
                                        Get Started
                                        <i className="la la-arrow-right icon ml-1" />
                                    </Link>
                                    <Link 
                                        preserveScroll
                                        className="btn-text video-play-btn mb-4"
                                        data-fancybox=""
                                        data-src="https://www.youtube.com/watch?v=ZQeSeYNEwHM"
                                        onClick={(e) => openModal("ZQeSeYNEwHM", e)}
                                    >
                                        Watch Preview
                                        <i className="la la-play icon-btn ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slider-item hero-bg-3">
                        <div className="container">
                            <div className="hero-content text-right">
                                <div className="section-heading">
                                    <h2 className="section__title text-white fs-65 lh-80 pb-3">
                                        Learn Anything,
                                        <br />
                                        Anytime, Anywhere
                                    </h2>
                                    <p className="section__desc text-white pb-4">
                                        Emply dummy text of the printing and
                                        typesetting industry orem Ipsum has been
                                        the
                                        <br />
                                        industry's standard dummy text ever
                                        sinceprinting and typesetting industry.
                                    </p>
                                </div>
                                <div className="hero-btn-box d-flex flex-wrap align-items-center pt-1 justify-content-end">
                                    <Link 
                                        preserveScroll
                                        className="btn-text video-play-btn mr-4 mb-4"
                                        data-fancybox=""
                                        data-src="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                        onClick={(e) => openModal("YE7VzlLtp-4", e)}
                                    >
                                        <i className="la la-play icon-btn mr-2" />
                                        Watch Preview
                                    </Link>
                                    <Link
                                        className="btn theme-btn mb-4"
                                        href="admission.html"
                                    >
                                        <i className="la la-arrow-left icon mr-1" />
                                        Get Enrolled
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>

                {/* Modal for video play */}
                <YouTubeVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId}
                    onClose={() => setOpen(false)}
                />
    
        </React.Fragment>
    );
};

export default HeroSection;
