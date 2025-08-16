import React, { useState } from "react";
import AdminPanel from "../../AdminPanel";
// import { useForm } from "@inertiajs/react";
import axios from 'axios';

const ManageInstructor = ({ instructors: initialInstructors }) => {
    // const { post } = useForm({});
    const [instructors, setInstructors] = useState(initialInstructors);

    const handleStatusChange = (id, currentStatus) => {
        const newStatus = currentStatus === '1' ? '0' : '1';
        
        let data = {
            id: id,
            status: newStatus,
        };
        
        axios.post(route('update.user.status'), data)
        .then(() => {
            // Update the local instructors state
            setInstructors(prev =>
                prev.map(instructor =>
                    instructor.id === id
                        ? { ...instructor, status: newStatus.toString() } // convert to string to match original format
                        : instructor
                )
            );

            Toast.fire({
                icon: 'success',
                title: 'Instructor status updated!',
            });
        })
        .catch(error => {
            console.error(error);
            Toast.fire({
                icon: 'error',
                title: 'Failed to update status',
            });
        });  
        /*
            post(route('update.user.status'), {data: data}, {
                preserveScroll: true,
                onSuccess: () => {
                    // Update the local instructors state
                    setInstructors(prev =>
                        prev.map(instructor =>
                            instructor.id === id
                                ? { ...instructor, status: newStatus.toString() } // convert to string to match original format
                                : instructor
                        )
                    );

                    // Show success message
                    Toast.fire({
                        icon: 'success',
                        title: 'Instructor status updated!',
                    });
                }
            });
        */  
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
                                    <a href={route("admin.dashboard")}>
                                        <i className="bx bx-home-alt"></i>
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    All Instructors
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* end breadcrumb */}
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
                                        <th>Name</th>
                                        <th>UserName</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {instructors.map((instructor, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{instructor.name}</td>
                                            <td>{instructor.username}</td>
                                            <td>{instructor.email}</td>
                                            <td>{instructor.phone}</td>
                                            <td>
                                                <span className={`badge ${instructor.status === '1' ? 'bg-success' : 'bg-danger'}`}>
                                                    {instructor.status === '1' ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col-sm-3"></div>
                                                    <div className="col-sm-9 form-check form-switch 2 form-check-success ">
                                                        <input
                                                            className="form-check-input large-chkbox status-toggle mt-2 h6"
                                                            type="checkbox"
                                                            name="status"
                                                            role="switch"
                                                            id={`flexSwitchCheck_${index}`}
                                                            checked={instructor.status === '1'}
                                                            onChange={() => handleStatusChange(instructor.id, instructor.status)}
                                                        />
                                                        <span className="h5 ms-1 me-1"> | </span>
                                                        <a href="#" id="delete">
                                                            <i className="text-danger bx bx-trash h5"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Name</th>
                                        <th>UserName</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Status</th>
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

ManageInstructor.layout = (page) => <AdminPanel children={page} />;

export default ManageInstructor;