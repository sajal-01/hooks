import React, { useState } from "react";
import "./styles.css";

const UseStateHook = () => {
  const [inc, setInc] = useState(0);

  return (
    <div className="container">
      <div className="div2">
        <button
          onClick={(e) => setInc(inc - 1)}
          className="cancel button-pushable"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">-</span>
        </button>
      </div>
      <div className="div3">{inc}</div>
      <div class="div1">
        <button
          onClick={(e) => setInc(inc + 1)}
          className="accept button-pushable"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">+</span>
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
