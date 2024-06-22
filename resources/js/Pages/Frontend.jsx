import React from 'react';
import Footer from '../Layouts/Frontend/Footer';
import Header from '../Layouts/Frontend/Header';
import HeroSection from '../Layouts/Frontend/HeroSection';
import FeatureArea from '../Layouts/Frontend/FeatureArea';

const Frontend = ({children}) => {
  return (
    <React.Fragment>
        {/* start cssload-loader */}
        {/* <div className="preloader">
            <div className="loader">
              <svg className="spinner" viewBox="0 0 50 50">
                <circle
                  className="path"
                  cx={25}
                  cy={25}
                  r={20}
                  fill="none"
                  strokeWidth={5}
                />
              </svg>
            </div>
          </div> */}
        {/* end cssload-loader */}      
      {/* <!-- ===================  START HEADER AREA ================== --> */}

        <Header/>

      {/* <!-- ===================  END HEADER AREA ==================== --> */}

      {/* <!-- =================== START HERO AREA ======================--> */}

        <HeroSection/>

      {/* <!-- =================== END HERO AREA ======================--> */}
  
      {/* <!--======================== START FEATURE AREA =============-->     */}

          <FeatureArea/>

      {/* <!--======================== END FEATURE AREA =============-->     */}


       <h1>Welcome to Laravel, Inertia And React js Application</h1>



      {/* <!-- =================== START FOOTER AREA ================== --> */}

        <Footer/>

      {/* <!-- =================== END FOOTER AREA ==================== --> */}
    </React.Fragment>
  )
}

export default Frontend
