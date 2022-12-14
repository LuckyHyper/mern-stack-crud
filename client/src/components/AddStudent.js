import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import axios from "axios";

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
    error_list: [],
  });

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const AddSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/student", student)
      .then((res) => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <AppContainer title="Add Student">
      <form onSubmit={AddSubmit}>
        <div className="form-grouh3 mt-3">
          <h6>Firstname</h6>
          <input
            className="form-control"
            type="text"
            name="Firstname"
            onChange={handleInput}
            value={student.Firstname}
          />
        </div>
        <div className="form-group mt-3">
          <h6>Lastname</h6>
          <input
            className="form-control"
            type="text"
            name="Lastname"
            onChange={handleInput}
            value={student.Lastname}
          />
        </div>
        <div className="form-group mt-3">
          <h6>Email</h6>
          <input
            className="form-control"
            type="text"
            name="Email"
            onChange={handleInput}
            value={student.Email}
          />
        </div>
        <div className="form-group mt-3">
          <h6>Phone</h6>
          <input
            className="form-control"
            type="text"
            name="Phone"
            onChange={handleInput}
            value={student.Phone}
          />
        </div>

        <div className=" btn-back">
          <button className="btn btn-warning mt-2 px-5">Add</button>
        </div>
        <div className=" btn-back">
          <Link to="/" type="button" className="btn btn-dark mt-2 px-5">
            Back
          </Link>
        </div>
      </form>
    </AppContainer>
  );
}

export default AddStudent;
