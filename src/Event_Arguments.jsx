
import React from "react";

export function ExEventArguments() {
    function InsertClick(e, ...args) {
        console.log(`X: ${e.clientX}\n ${args}`);
        alert("just clicked")
    }

    return (
        <div>
            <button id="btnclicked" onClick={(e) => InsertClick(e, 1, 'Suma', true)}>Click Me</button>
        </div>
    );
}

