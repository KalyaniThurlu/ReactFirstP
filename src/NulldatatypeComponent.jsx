
import React, { useState } from "react";

export function Exsymbol() {
    const id = 1;
    const [product] = useState({ [id]: 1, name: "tv", price: 45000 });

    return (
        <div>{JSON.stringify(product)}</div>
    );
}
