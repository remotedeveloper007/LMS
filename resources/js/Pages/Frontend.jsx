import React from 'react';
import Footer from '../Layouts/Frontend/Footer';
import Header from '../Layouts/Frontend/Header';
import HeroSection from '../Layouts/Frontend/HeroSection';
import FeatureArea from '../Layouts/Frontend/FeatureArea';
import CategoryArea from './Frontend/Home/CategoryArea';
import CourseSelection from './Frontend/Home/CourseSelection';
import StudentViewing from './Frontend/Home/StudentViewing';
import Funfact from './Frontend/Home/Funfact';

const Frontend = ({children}) => {
  return (
    <React.Fragment>     
      {/* <!-- ===================  START HEADER AREA ================== --> */}

        <Header/>

      {/* <!-- ===================  END HEADER AREA ==================== --> */}

      {/* <!-- =================== START HERO AREA ======================--> */}

        <HeroSection/>

      {/* <!-- =================== END HERO AREA ======================--> */}
  
      {/* <!--======================== START FEATURE AREA =============-->     */}

          <FeatureArea/>

      {/* <!--======================== END FEATURE AREA =============-->     */}

      {/* ============================ START CATEGORY AREA ================= */}

        <CategoryArea/> {/* <!-- end category-area --> */}

      {/* ============================ START COURSE AREA - 1 =================== */}
        <CourseSelection/> {/* <!-- end courses-selection-area --> */}
      {/* ============================ END COURSE AREA - 1 ===================== */}

      {/* ============================ START COURSE AREA - 2 =================== */}
        {/* <StudentViewing/> */}
      {/* ============================ END COURSE AREA - 2 ===================== */}

      {/* ============================ START FUNFACT AREA =================== */}
        <Funfact/>
      {/* ============================ END FUNFACT AREA =================== */}
 

      {/* <!-- =================== START FOOTER AREA ================== --> */}

        <Footer/>

      {/* <!-- =================== END FOOTER AREA ==================== --> */}
    </React.Fragment>
  )
}

export default Frontend
