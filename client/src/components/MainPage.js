import React from "react";
import { Link } from 'react-router-dom';
import AppContainer from "./AppContainer";

function Home() { 

        return (
            <AppContainer title="Student List">
                <div class="table-responsive">

                    <Link to={'add-student'} className="btn btn-dark  float-end"> Add Student</Link>
                    <br></br>
                    <br></br>

                    <table class="table">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdmmmo</td>
                                <td>@mdo</td>
                                <td>
                                    <Link to="/edit-student" type="button" class="btn btn-warning btn-css">Edit</Link>
                                    <Link to="/edit-student" type="button" class="btn btn-secondary btn-css">Delete</Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </AppContainer>
        );
    
}
export default Home;