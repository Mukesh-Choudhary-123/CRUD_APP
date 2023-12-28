import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/read/" + id)
      .then((res) => {
        console.log(res);
        setUsers(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-3">
        <h2 className="py-5">Read User Info</h2>
        <h5> Id : {users.id}</h5>
        <h5> Name: {users.name}</h5>
        <h5> Email: {users.email}</h5>
        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${users.id}`} className="btn btn-info">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Read;
