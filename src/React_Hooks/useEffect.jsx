
import { useEffect, useState } from "react";

export function ExuseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>

      
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  );
}

//Note: Remove  <React.StrictMode> from index.js to test only production.