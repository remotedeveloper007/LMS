import React, { useEffect } from "react";
import AdminPanel from "../../AdminPanel";
import { Head, Link } from "@inertiajs/react";

const Category = ({ categories }) => {

    useEffect(() => {
        // Initialize DataTable when the component mounts
        const table = $("#example2").DataTable({
            lengthChange: false,
            buttons: ["copy", "excel", "pdf", "print"]
        });

        // Append the DataTable buttons container to the desired location
        table.buttons().container().appendTo("#example2_wrapper .col-md-6:eq(0)");

        // Cleanup function to destroy DataTable when the component unmounts
        return () => table.destroy();
    }, []); // Empty dependency array ensures this effect runs only once on mount  
    return (
        <React.Fragment>
            <Head title="ADMIN|All Category"/>
            <div className="page-content">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href={ route('admin.dashboard') }>
                                        <i className="bx bx-home-alt" />
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    All Category
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="bth-group">
                            <Link
                                href={ route('add.category') }
                                className="btn btn-primary"
                            >
                                Add Category
                            </Link>
                        </div>
                    </div>
                </div>
                {/*end breadcrumb*/}
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                id="example2"
                                className="table table-striped table-bordered table-hover"
                            >
                                <thead>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Image</th>
                                        <th>Category Name</th>
                                        <th>Category Slug</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                src={`/${category.image}`}
                                                alt="Category"
                                                className="product-img-2"
                                                id="showImage"
                                            />
                                        </td>
                                        <td>{category.category_name}</td>
                                        <td>{category.category_slug}</td>
                                        <td>
                                            <Link href={ route('edit.category',category.id) }>
                                                <i className="text-primary bx bx-edit h4" />
                                            </Link>
                                            <span className="h4">|</span>
                                            <a
                                                href={ route('delete.category',category.id) }
                                                id="delete"
                                            >
                                                <i className="text-danger bx bx-trash h4" />
                                            </a>
                                        </td>
                                    </tr>
                                  ))}

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Image</th>
                                        <th>Category Name</th>
                                        <th>Category Slug</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Category.layout = (page) => <AdminPanel children={page} />;

export default Category;
