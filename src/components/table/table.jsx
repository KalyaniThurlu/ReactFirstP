
import React from "react";
import "./table.css";

export default function Table() {
    return (
        <div className="container">
            <h1>Employee Salary Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Geetha</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Suma</td>
                        <td>3000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
