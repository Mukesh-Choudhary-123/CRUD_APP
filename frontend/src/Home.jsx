import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/delete/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-100  p-3">
        <h2 className="d-flex justify-content-center align-items-center">
          Users List
        </h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-outline-success mb-3 mx-4">
            <AddCircleTwoToneIcon /> Create
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{users.id}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    <Link
                      to={`/read/${users.id}`}
                      className="btn btn-sm btn-outline-info "
                    >
                      <RemoveRedEyeTwoToneIcon /> Read
                    </Link>
                    <Link
                      to={`/edit/${users.id}`}
                      className="btn btn-sm btn-outline-primary mx-5"
                    >
                      <EditTwoToneIcon /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(users.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <DeleteTwoToneIcon /> Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
