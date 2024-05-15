import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Update = () => {
    const [task, setTask] = useState("");
   
    const location = useLocation();

    useEffect(() => {
        const { Task } = location.state;
        setTask(Task || "");
        
    }, [location]);

    const handleSubmit = async () => {
        try {
            const result = await axios.post("http://127.0.0.1:5001/edittask", { 
                id: location.state._id,
                task
            });
            console.log(result, "edit ok");
            window.location.href="/"; 
        } catch (error) {
            console.error("Error update user:", error);
            alert("An error occurred while updating user");
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <label>Task Name</label>
                        <input
                            type="text"
                            value={task}
                            placeholder="Enter Author Name"
                            className="form-control"
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                   
                    <div className="col-lg-12 mt-4">
                        <input
                            type="button" 
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            value="update" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
