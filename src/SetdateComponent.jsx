
import React, { useState } from "react";

export function My() {
  const date = new Date('2024-06-29');
  const [mfd, setMfd] = useState({
    day: date.getDate(),
    month: date.getMonth() + 1, // Months are 0-based in JavaScript
    year: date.getFullYear()
  });

  return (
    <div>
      Current Date: {mfd.day} 
      
    </div>
  );
}
