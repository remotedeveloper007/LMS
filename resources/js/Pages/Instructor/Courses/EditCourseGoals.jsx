import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { v4 as uuidv4 } from "uuid";

const EditCourseGoals = ({ course, goals }) => {
    let { data, setData, post, errors, reset } = useForm({
        //
        // course_goals: Object.fromEntries(goals.map(goal => [goal.id, ''])),
        //course_goals: Object.fromEntries(goals.map(goal => [goal.id, goal.goal_name])),
        course_goals: goals, // Initialize course_goals as an empty object
        course_id: course.id, // Initialize subcategory_id in form data
    });

    const [goalFields, setGoalFields] = useState([{ id: uuidv4(), value: "" }]); // Initialize with a unique ID

    const handleAddGoalField = () => {
        const newId = uuidv4(); // Generate a unique ID
        setGoalFields([...goalFields, { id: newId, value: "" }]);
    };

    const handleRemoveGoalField = (id) => {
        const updatedFields = goalFields.filter((field) => field.id !== id);
        setGoalFields(updatedFields);
    };

    const handleChange = (e) => {
        e.persist();

        setData((prevData) => ({...prevData, [e.target.name]: e.target.value}))

        // setData((prevData) => ({...prevData,course_goals: {...prevData.course_goals, [e.target.name]: e.target.value}}));
    }
    // console.log(goals);
    // console.log("Course Goals:", data.course_goals);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('update.course.goal'))
    }
    return (
        <React.Fragment>
            {/* ======================== */}
            <div className="row form-group add_item">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header"> Edit Course Goals: </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10">
                                    {data.course_goals.map((goal, index) => (
                                        <div className="row mb-2" key={index}>
                                            <div className="col-sm-2">
                                                <label
                                                    htmlFor={`goals${goal.id}`}
                                                    className="form-label"
                                                >
                                                    Goals:
                                                </label>
                                            </div>
                                            <div className="col-sm-8 mt-1">
                                                <input
                                                    type="text"
                                                    name={`course_goals[${goal.id}]`}
                                                    id={`goals${goal.id}`}
                                                    className="form-control"
                                                    value={data.course_goals[goal.id]?.goal_name || ""}
                                                    // value={(() => {
                                                    //     const goalData = data.course_goals[goal.id];
                                                    //     console.log("Goal ID:", goal.id, "Goal Data:", goalData);
                                                    //     return goalData?.goal_name || "";
                                                    // })()}
                                                    placeholder="Goals"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {(index !== 0) && (
                                                // Conditionally render the remove button
                                                <div className="col-sm-1 mt-1">
                                                    <span
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            handleRemoveGoalField(
                                                                goal.id
                                                            )
                                                        }
                                                    >
                                                        <i className="text-danger bx bx-trash h3" />
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-2 h5">
                                    <span className="btn btn-outline-success ms-0"  onClick={handleAddGoalField}>
                                        <i className="bx bx-plus h3" />
                                        Add
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <button type="submit" className="btn btn-sm btn-outline-primary me-1">
                                Update Goals
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary ms-1"
                            >Reset </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* ======================== */}
        </React.Fragment>
    );
};

export default EditCourseGoals;
