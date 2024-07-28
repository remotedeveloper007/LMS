import React, {useState, useEffect} from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';

const CategoryArea = () => {
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
    <section className="category-area pb-90px">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-9">
                    <div className="category-content-wrap">
                        <div className="section-heading">
                            <h5 className="ribbon ribbon-lg mb-2">Categories</h5>
                            <h2 className="section__title">Popular Categories</h2>
                            <span className="section-divider"></span>
                        </div>
                        {/* <!-- end section-heading --> */}
                    </div>
                </div>
                {/* <!-- end col-lg-9 --> */}
                <div className="col-lg-3">
                    <div className="category-btn-box text-right">
                        <Link href="categories.html" className="btn theme-btn">All Categories <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                    {/* <!-- end category-btn-box--> */}
                </div>
                {/* <!-- end col-lg-3 --> */}
            </div>
            {/* <!-- end row --> */}
            <div className="category-wrapper mt-30px">
                    <div className="row">    
                    {categories.map((category) => (
                         
                            <div key={category.id} className="col-lg-4 responsive-column-half">
                                <div className="category-item">
                                    <img  className="cat__img lazy" src={`/${category.image}`} 
                                    data-src={ `${category.image}` } alt="Category image"/>
                                    <div className="category-content">
                                        <div className="category-inner">
                                            <h3 className="cat__title">
                                                <Link href="#">{category.category_name}</Link>
                                            </h3>
                                            <p className="cat__meta">9 courses</p>
                                            <Link href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Explore<i className="la la-arrow-right icon ml-1"></i></Link>
                                        </div>
                                    </div>
                                    {/* <!-- end category-content --> */}
                                </div>
                                {/* <!-- end category-item --> */}
                            </div>   
                              
                      
                    ))}
                    {/* <!-- end col-lg-4 --> */} 
                 </div> 
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end category-wrapper --> */}
        </div>
        {/* <!-- end container --> */}
    </section>
  )
}

export default CategoryArea
