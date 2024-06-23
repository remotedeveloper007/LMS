import React, {useEffect} from "react";
import { Link } from "@inertiajs/react";
import AdminPanel from "../../AdminPanel";

const SubCategory = ({ subcategories }) => {

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
  }, []); // Empty dependency array ensures this effect runs only once on 

    return (
        <React.Fragment>
            <div className="page-content">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link href={route("admin.dashboard")}>
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    All SubCategory
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">
                        <div className="bth-group">
                            <Link
                                href={route("add.subcategory")}
                                className="btn btn-primary"
                            >
                                Add SubCategory
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
                                className="table table-striped table-bordered"
                            >
                                <thead>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Category Name</th>
                                        <th>SubCategory Name</th>
                                        <th>SubCategory Slug</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subcategories.map((subcategory, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ subcategory.category.category_name }</td>
                                            <td>{subcategory.subcategory_name}</td>
                                            <td>{subcategory.subcategory_slug}</td>
                                            <td>
                                                <Link
                                                    href={route(
                                                        "edit.subcategory",
                                                        subcategory.id
                                                    )}
                                                >
                                                    <i className="text-primary bx bx-edit h4" />
                                                </Link>
                                                <span className="h4">|</span>
                                                <span
                                                    href={route(
                                                        "delete.subcategory",
                                                        subcategory.id
                                                    )}
                                                    id="delete"
                                                >
                                                    <i className="text-danger bx bx-trash h4" />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Category Name</th>
                                        <th>SubCategory Name</th>
                                        <th>SubCategory Slug</th>
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

SubCategory.layout = (page) => <AdminPanel children={page} />;

export default SubCategory;
