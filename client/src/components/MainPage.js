import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import RowDetails from "./RowDetails";
import axios from "axios";

function MainPage() {
  const [data, setData] = useState();
  const [reload, setReload] = useState(0);
  let ignore = false;

  useEffect(() => {
    axios
      .get(`/api/students`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  return (
    <AppContainer title="Student List">
      <div className="table-responsive">
        <Link to={"add-student"} className="btn btn-dark  float-end">
          Add Student
        </Link>
        <br></br>
        <br></br>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data != undefined &&
              data.map((item, key) => {
                return (
                  <RowDetails
                    key={item._id}
                    id={item._id}
                    firstname={item.Firstname}
                    lastname={item.Lastname}
                    email={item.Email}
                    phone={item.Phone}
                    setReload={setReload}
                    reload={reload}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </AppContainer>
  );
}
export default MainPage;
