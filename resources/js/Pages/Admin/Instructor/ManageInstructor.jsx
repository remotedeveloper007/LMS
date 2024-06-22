import React, {useState, useEffect} from "react";
import AdminPanel from "../../AdminPanel";
import { useForm } from "@inertiajs/react";

const ManageInstructor = ({ instructors }) => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     console.log("Instructors received:", instructors); // Log the received instructors
    //     setData(instructors); // Set the instructors to state
    // }, [instructors])    

    const {data, setData, post } = useForm({
        status: '',
    });

    // const handleChange = (id, status) => {
    //     const updatedInstructors = instructors.map(instructor => {
    //         if (instructor.id === id) {
    //             // Toggle status
    //             const newStatus = status === 1 ? 0 : 1;
    //             return { ...instructor, status: newStatus };
    //         }
    //         return instructor;
    //     });

    //     // Update the UI with the new list of instructors
    //     setData(updatedInstructors);
    // }

    const handleChange = (e, id, status) => {
        e.persist();
        const newStatus = status == 1 ? 0 : 1;
        setData({ id, status: newStatus });
        // setData(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
    }    

    // const handleChange = (id, status) => {
    //     const updatedInstructors = data.map(instructor => {
    //         if (instructor.id === id) {
    //             // Toggle status
    //             const newStatus = status === 1 ? 0 : 1;
    //             return { ...instructor, status: newStatus };
    //         }
    //         return instructor;
    //     });
    //     setData(updatedInstructors); // Update the instructor data in state
    // }

    const handleSubmit = (id, status) => {
        // const newStatus = status == 1 ? 0 : 1;
        // console.log(id)
        // console.log(newStatus)

        // Prepare form data
        // const formData = new FormData();
        // formData.append('id', id);
        // formData.append('status', newStatus);

        // Make API call to update user status
        post(route('update.user.status'), {data,
            onSuccess: () => {
                // Show success message
                Toast.fire({
                    icon: 'success',
                    title: 'Instructor status updated!',
                });
            }
        });
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
                                                {/* {instructor.status == 1 ? (
                                                    <span className="badge bg-success">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-danger">
                                                        Inactive
                                                    </span>
                                                )} */}
                                                <span className={`badge ${instructor.status == 1 ? 'bg-success' : 'bg-danger'}`}>
                                                    {instructor.status == 1 ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col-sm-3"></div>
                                                    <div className="col-sm-9 form-check form-switch 2 form-check-success ">
                                                        <input type="hidden" name="id" value={data.id} onChange={handleChange} />
                                                        <input
                                                            className="form-check-input large-chkbox status-toggle mt-2 h6"
                                                            type="checkbox"
                                                            name="status"
                                                            role="switch"
                                                            id={`flexSwitchCheck_${index}`}
                                                            value={data.status}
                                                            checked={instructor.status == 1}
                                                            // onChange={() => handleChange(instructor.id, instructor.status)}
                                                            onChange={handleChange}
                                                            onClick={(e) => {
                                                                e.preventDefault();handleSubmit(instructor.id, instructor.status); }
                                                            }
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
