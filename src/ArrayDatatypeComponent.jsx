
import React, { useEffect, useState } from "react";

export function ArrayData() {
    const [categories] = useState([ 'latha', 'geetha']);

    useEffect(() => {
        // Your useEffect logic here if needed
    }, []);

    return (
        <div>
            {categories.map((category, index) => (
                <h2 key={index}>{category}</h2>
            ))}
        </div>
    );
}
