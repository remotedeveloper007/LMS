import React, {useState, useEffect} from 'react';
import Footer from '../Layouts/Frontend/Footer';
import Header from '../Layouts/Frontend/Header';
import HeroSection from '../Layouts/Frontend/HeroSection';
import FeatureArea from '../Layouts/Frontend/FeatureArea';
import CategoryArea from './Frontend/Home/CategoryArea';
import CourseSelection from './Frontend/Home/CourseSelection';
import StudentViewing from './Frontend/Home/StudentViewing';
import Funfact from './Frontend/Home/Funfact';
import axios from 'axios';

const Frontend = ({children}) => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
      // Fetch categories when the component mounts
      const fetchCategories = async () => {
          try {
              const response = await axios.get('/categories')        // Ensure the response structure matches your expectations
              if (response.data.status === 200) {
                setCategories(response.data.categories || []); // Set categories to an empty array if not present
              } 
          } catch (error) {
              console.error('Error fetching categories: ', error);
          }
      }
      fetchCategories();
  }, [])

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

        <CategoryArea categories={categories} /> {/* <!-- end category-area --> */}

      {/* ============================ START COURSE AREA - 1 =================== */}
        <CourseSelection  categories={categories} /> {/* <!-- end courses-selection-area --> */}
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
