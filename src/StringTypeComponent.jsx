
import { useEffect, useState } from "react";

// Define the functional component DataStringType
export function DataStringType() {

    // Declare a state variable `val` with an initial value of `undefined`
    const [val, setVal] = useState();
    
    // Declare a state variable `title` with an initial value of 'hello'
    const [title] = useState('hello');
    
    // useEffect hook to run code after the component mounts
    useEffect(() => {
        // Set the `val` state to 'bg-dark p-2' after the component mounts
        setVal('bg-dark p-2');
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div className="container-fluid">
            {/* h2 element with dynamic classes and uppercase title */}
            <h2 className={`text-center text-danger ${val}`}>{title.toUpperCase()}</h2>
        </div>
    );
}
