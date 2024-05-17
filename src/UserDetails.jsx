import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [data, setData] = useState("");
  const [info, setInfo] = useState([]);
  const login = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("https://crud-ba.onrender.com/data", {
        token: window.localStorage.getItem("token"),
      })
      .then((result) => {
        console.log("hi ther");
        {
          login ? setData(result.data.data) : setData("");
        }
        localStorage.setItem("mail", result.data.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://crud-ba.onrender.com/reciev")
      .then((result) => {
        {
          login ? setInfo(result.data) : setInfo([]);
        }
      })
      .catch((err) => console.log(err, "someerror"));
  }, []);

  const handleDelete = (item) => {
    const { Author, _id } = item;
    if (window.confirm(`Are you sure you want to delete ${Author}?`)) {
      axios
        .post("https://crud-ba.onrender.com/deleteuser", { userid: _id })
        .then((result) => {
          alert(
            result.data.status === "ok"
              ? "User deleted successfully"
              : "Failed to delete user"
          );
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("An error occurred while deleting user");
        });
    }
  };

  

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Table for book</h1>
        <Link
          to="/details"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th>Title</th>
                  <th>Publish Date</th>
                  <th>Had / Should Buy</th>
                  <th>Action</th>
                </tr>
              </thead>
              {info.map((detai, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{detai.Author}</td>
                    <td>{detai.ISBNNumber}</td>
                    <td>{detai.Title}</td>
                    <td>{detai.PublishDate}</td>
                    <td>{detai.HadBuy}</td>
                    <td>
                      <button
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                        onClick={() => 
                          {navigate("/update",{state:detai})}
                        }
                      >
                        Edit
                      </button>

                      <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                        onClick={() => {
                          handleDelete(detai);
                        }}
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
