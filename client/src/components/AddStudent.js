import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';

function AddStudent() {
 
  return(<AppContainer
  title="Add Student">
                              
     <form>
        <div className="form-group">
         <labed>Name</labed>
         <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
         <labed>Classe</labed>
         <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
         <labed>Email</labed>
         <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
         <labed>Phone</labed>
         <input className="form-control" type="text"/>
        </div>
     </form>
     <div className=" btn-back">
         <Link to={'/'} className="btn btn-warning btn-sm back">ADD</Link>
     </div>
     <div className=" btn-back">
         <Link to={'/'} className="btn btn-secondary btn-sm back"> BACK</Link>
     </div>
    
  </AppContainer>    
);
}

export default AddStudent;