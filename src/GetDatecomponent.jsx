
import { useState } from "react";

export function Type() {
  const currentDate = new Date().getHours();
  const [mfd, setMfd] = useState(currentDate.toLocaleString());
  return (
    <div>
      <h1>currentdata: {mfd}</h1>
    </div>
  );
}