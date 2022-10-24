import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AppContainer from "./AppContainer";
import axios from "axios";

function EditStudent() {
  const location = useLocation();
  const studentId = location.state?.id;
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
  });
  useEffect(() => {
    axios
      .get(`/api/students?id=` + studentId)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveModification = (e) => {
    e.preventDefault();
    axios
      .put("/api/student?id=" + studentId, student)
      .then((res) => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <AppContainer title="Edit Student">
      <form onSubmit={saveModification}>
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
          <button className="btn btn-warning mt-2 px-5">Edit</button>
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

export default EditStudent;
