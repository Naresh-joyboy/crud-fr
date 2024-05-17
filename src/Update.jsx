import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Update = () => {
    const [author, setAuthor] = useState("");
    const [isbnno , setIsbnno] = useState("");
    const [title , setTitle] = useState("");
    const [date , setDate] = useState("");
    const [had , setHad] = useState("");
    const location = useLocation();

    // Destructuring data from location.state and setting initial state
    useEffect(() => {
        const { Author, ISBNNumber, Title, PublishDate, HadBuy } = location.state;
        setAuthor(Author || "");
        setIsbnno(ISBNNumber || "");
        setTitle(Title || "");
        setDate(PublishDate || "");
        setHad(HadBuy || "");
    }, [location]);

    const handleSubmit = async () => {
        try {
            const result = await axios.post("https://crud-ba.onrender.com/edituser", { 
                id: location.state._id,
                author,
                isbnno,
                title,
                date,
                had
            });
            console.log(result, "edit ok");
            window.location.href="/"; // Redirect to home page after successful update
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
                        <label>Author</label>
                        <input
                            type="text"
                            value={author}
                            placeholder="Enter Author Name"
                            className="form-control"
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4">
                        <label>ISBNNumber</label>
                        <input
                            type="text"
                            value={isbnno}
                            className="form-control"
                            onChange={(e) => setIsbnno(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4">
                        <label>PublishDate</label>
                        <input
                            type="Date"
                            value={date}
                            className="form-control"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4">
                        <label>Had / Should Buy</label>
                        <input
                            type="text"
                            value={had}
                            className="form-control"
                            onChange={(e) => setHad(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-12 mt-4">
                        <input
                            type="button" // Change type to button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            value="update" // Remove unnecessary curly braces
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
