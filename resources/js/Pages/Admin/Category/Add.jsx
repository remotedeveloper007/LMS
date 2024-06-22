import React, {useState} from 'react'
import AdminPanel from '../../AdminPanel'
import { Head, Link, useForm } from '@inertiajs/react'
import InputError from '../../../Components/InputError';

const AddCategory = () => {
  const {data, setData, post, errors, clearErrors, reset} = useForm({
    category_name: ''
  });

  const [imagePreview, setImagePreview] = useState('');  

  // useEffect(() => {
  
  //   return () => {
  //     $('#image').change(function (e) {
  //         let reader = new FileReader();
  //         reader.onload = function (e) {
  //             $('#showImage').attr('src', e.target.result);
  //         }
  //         reader.readAsDataURL(e.target.files['0']);
  //     })
  //   }
  // }, []);
  
  const handleChange = (e) => {
    e.persist();

    if (e.target.name === 'image') {
      // Handle image change
      const file = e.target.files[0];

      // Update image preview
      if (file) {
        // Read image data and set image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }

    setData((values) => ({...values, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('store.category'), {
      onSuccess: () => {
        Toast.fire({
            icon: 'success',
            title: 'Category added successfully!',
        })       
      }
    })
  }

  return (
    <React.Fragment>
      <Head title='ADMIN|Add Category'/>
      <div className="page-content">
        {/*breadcrumb*/}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href={ route('admin.dashboard') }>
                    <i className="bx bx-home-alt" />
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Category
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="bth-group">
              <Link href={ route('all.category') } className="btn btn-primary">
                All Category
              </Link>
            </div>
          </div>
        </div>
        {/*end breadcrumb*/}
        <div className="row">
          <div className="col-xl-6 mx-auto">
            <div className="card">
              <div className="card-header text-center">
              <h5>Add Category Form</h5>
              </div>
              <div className="card-body p-4">
                
                <form id="myForm" onSubmit={handleSubmit} className="row g-3" >
                  {/* @csrf */}
                  <div className="form-group col-md-12">
                    <label htmlFor="input3" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="category_name"
                      value={data.category_name}
                      className={`form-control ${errors.category_name ? 'is-invalid' : ''}`}
                      id="input3"
                      onChange={handleChange}
                      placeholder="Enter Category Name"
                    />
                    <InputError message={errors.category_name}/>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <label htmlFor="input4" className="form-label">
                        Category Image
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 ps-4">
                        <img
                          src={imagePreview || '../../../../assets/upload/sample.png'}
                          alt="Category"
                          className="product-img-2"
                          id="showImage"
                        />
                      </div>
                      <div className="form-group col-sm-10 text-secondary">
                        <input
                          type="file"
                          name="image"
                          className={`form-control ${errors.image} ? 'is-invalid' : ''`}
                          id="image"
                          onChange={handleChange}
                        />
                        <InputError message={errors.image}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center gap-3">
                      <button type="submit" className="btn btn-outline-primary me-1">
                        Add Category
                      </button>
                      <button type="button" className="btn btn-light ms-1">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

AddCategory.layout = (page) => <AdminPanel children={page} />

export default AddCategory
