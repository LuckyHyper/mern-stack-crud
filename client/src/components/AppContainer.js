import React from "react";

 function AppContainer({ title, children }) {
    return (
        <div className="container table">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="title">{title}</h4>
                        </div>
                       
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppContainer;