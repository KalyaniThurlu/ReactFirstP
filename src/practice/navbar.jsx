
import React from 'react';

export function ExNavbar(props) {
    return (
        <div className="container-fluid">
            <nav className={`d-flex justify-content-between p-2 border border-1 ${props.Theme}`}>
                <div className="fw-bold fs-5">
                    {props.BrandTitle}
                </div>
                <div className="d-flex align-items-center">
                    {props.MenuItems.map((item, index) => (
                        <span key={index} className="mx-2">
                            {item}
                        </span>
                    ))}
                    <input type="text" placeholder="search" className="form-control mx-2" />
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
            </nav>
        </div>
    );
}
