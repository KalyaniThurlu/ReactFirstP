import React from "react";

import './NetflixIndexComponent.css' 
export function NetflixHeaderComponent() {
    return (
        
        <div className="  container-fluid d-flex justify-content-between m-3 p-4">
            <h3 className="mr-3">NETFLEX</h3> {/* Added margin-right for space */}
            <div className="d-flex align-items-center"> {/* Added align-items-center to vertically center items */}
                <select className="form-select me-3"> {/* Added margin-right for space */}
                    <option>Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button className="btn btn-danger">Sign In</button>
            </div>
        </div>
    );
}
