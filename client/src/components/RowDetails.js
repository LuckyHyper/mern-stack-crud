import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function RowDetails(props) {
  const DeleteStudent = () => {
    props.setReload(props.reload + 1);
    axios.delete("api/student?id=" + props.id);
  };
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>
        <Link
          to="/edit-student"
          type="button"
          className="btn btn-warning btn-css mx-1"
          state={{
            id: props.id,
          }}
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-secondary btn-css mx-1"
          onClick={DeleteStudent}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RowDetails;
