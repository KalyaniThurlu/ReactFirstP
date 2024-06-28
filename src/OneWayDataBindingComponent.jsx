
import React, { useState } from "react";

export function OneWayDataBinding() {
  const [userName, setUserName] = useState(" hellolukky");

  function changeHandleFun(event) {
    setUserName(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={changeHandleFun} value={userName} />
      <h2> {userName}</h2>
    </div>
  );
}
