
import React, { useState } from "react";

export function ExRegular() {
    const [val, setVal] = useState("David123");
    const regExp = /(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,14}/; // Regular expression for validating passwords

    return (
        <div>{val.match(regExp) ? "verified" : "invalid"}</div>
    );
}
  