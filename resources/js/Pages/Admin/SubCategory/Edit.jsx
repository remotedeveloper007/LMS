import React, { useState } from "react";
import AdminPanel from "../../AdminPanel";
import { Link, useForm } from "@inertiajs/react";

const EditSubCategory = ({ categories, subcategory }) => {
  const[cat] = useState(
    categories.id === subcategory.category_id ? 'selected' : ''
  );

  const {data, setData, patch, errors, clearErrors, reset} = useForm({
    id: subcategory.id,
    category_id: subcategory.category_id,
    subcategory_name: subcategory.subcategory_name
  });

  const handleChange = (e) => {
    e.persist();

    // Update form data for other fields
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    patch(route('update.subcategory'), {data, 
      onSuccess: () => {
        Toast.fire({
            icon: 'success',
            title: 'SubCategory updated successfully!',
        })
      }
    })
  }

    return (
        <React.Fragment>
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
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Edit SubCategory
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="bth-group">
                            <Link
                                href={ route('all.subcategory') }
                                className="btn btn-primary"
                            >
                                All SubCategory
                            </Link>
                        </div>
                    </div>
                </div>
                {/*end breadcrumb*/}
                <div className="row">
                    <div className="col-xl-6 mx-auto">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Edit SubCategory Form</h5>
                            </div>
                            <div className="card-body p-4">
                                <form id="myForm"  onSubmit={handleSubmit} className="row g-3">
                                    <div className="form-group col-md-12 mb-2">
                                        <label
                                            htmlFor="input39"
                                            className="form-label"
                                        >
                                            Select Category
                                        </label>
                                        <div>
                                          
                                            <select name="category_id" className="form-select" id="input39" value={data.category_id} onChange={handleChange}>
                                              <option disabled>Select Category</option>
                                              {categories.map((category) => (
                                                <option
                                                  key={category.id}
                                                  value={category.id}
                                                  {...cat}
                                                >
                                                  {category.category_name}
                                                </option>
                                              ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 mb-3">
                                        <label
                                            htmlFor="input3"
                                            className="form-label"
                                        >
                                            SubCategory Name
                                        </label>
                                        <input
                                            type="text"
                                            name="subcategory_name"
                                            value={data.subcategory_name}
                                            className="form-control"
                                            id="input3"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="text-center gap-3 ">
                                            <button
                                                type="submit"
                                                className="btn btn-outline-primary me-1"
                                            >
                                                Update SubCategory
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-light ms-1"
                                                onClick={() => {reset(); clearErrors();}}
                                            >
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
    );
};

EditSubCategory.layout = (page) => <AdminPanel children={page} />;

export default EditSubCategory;
