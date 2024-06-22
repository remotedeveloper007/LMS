import React, { useState} from 'react';
import AdminPanel from '../../AdminPanel';
import { Head, Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

const EditCategory = ({ category }) => {
  const [imagePreview, setImagePreview] = useState(
    category.image ? `/${category.image}` : '../../../../assets/upload/sample.png' // Initialize image preview with existing image or placeholder
  ); 

  // const [editing, setEditing] = useState(false);
  const {data, setData, patch, clearErrors, reset, errors} = useForm({
    id: category.id,
    category_name: category.category_name,
  });  


  const handleChange = (e) => {
    e.persist();

    if (e.target.name === 'image') {
      // Handle image change
      const file = e.target.files[0];
      if (file) {
        // Read image data and set image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }


    // Update form data for other fields
    setData((values) => ({...values, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('category_name', data.category_name);
    formData.append('image', e.target.image.files[0]); // Append image data to form data    

    // Send PATCH request
    patch(route('update.category'), {data: formData,
      onSuccess: () => {
        // setEditing(false);
        Toast.fire({
            icon: 'success',
            title: 'Category updated successfully!',
        })
      }
    })
  }
  
  return (
    <React.Fragment>
      <Head title='ADMIN|Edit Category'/>
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
                  Edit Category
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
              <h5>Edit Category Form</h5>
              </div>
              <div className="card-body p-4">
                
                <form id="myForm" className="row g-3" onSubmit={handleSubmit}>
                  {/* @csrf */}
                  <div className="form-group col-md-12">
                    <label htmlFor="input3" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="category_name"
                      value={data.category_name}
                      className="form-control"
                      id="input3"
                      onChange={handleChange}
                      category=""
                    />
                    
                    {errors.category_name && (
                      <div className="text-danger">{errors.category_name}</div>
                    )}
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <label htmlFor="input4" className="form-label">
                        Category Image
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 ps-4">
                        {/* <img
                          src={ '../../../../assets/upload/sample.png' }
                          alt="Category"
                          className="product-img-2"
                          id="showImage"
                        /> */}
                        <img
                          src={imagePreview}
                          alt="Category"
                          className="product-img-2"
                          id="showImage"
                        />
                      </div>
                      <div className="form-group col-sm-10 text-secondary">
                        <input
                          type="file"
                          name="image"
                          className="form-control"
                          id="image"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center gap-3">
                      <button type="submit" className="btn btn-outline-primary me-1">
                        Update Category
                      </button>
                      <button type="button" onClick={() => {reset(); clearErrors();}} className="btn btn-light ms-1">
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

EditCategory.layout = (page) => <AdminPanel children={page} />

export default EditCategory
