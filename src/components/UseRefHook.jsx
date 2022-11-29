import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  // {current:0} -> useRef
  //     Refs are also amazing at persisting data between
  //     renders which is makes it possible to store
  //     persisted component data without causing a
  //     re-render when it is changed.

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);

  return (
    <div>
      <input
        className="form__input"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="name" className="form__label">
        Full Name
      </label>
      <div class="div1">
        <div className="accept button-pushable">
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">My name is {name}</span>
        </div>
      </div>

      <div className="div2">
        <div className="cancel button-pushable">
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">
            I rendered {renderCount.current} times
          </span>
        </div>
      </div>
    </div>
  );
};

export default UseRefHook;
