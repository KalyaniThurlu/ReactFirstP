
import moment from "moment";
import { useEffect, useState } from "react";

export function Myfun() {
    const [val, setVal] = useState(); // Initializing state with no initial value

    useEffect(() => {
        setVal(new Date()); // Setting the value of 'val' to the current date
    }); // Running this effect on every render

    return (
        <div>{moment(val).format('MMMM Do YYYY, h:mm:ss a')}</div> // Formatting and displaying 'val' using moment.js
    );
}
