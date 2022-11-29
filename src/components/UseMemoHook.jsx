import React, { useState, useMemo, useEffect } from "react";
import "./styles.css";

// const result = useMemo(() => {
//   return slowFunction(a);
// }, [a]);

const UseMemoHook = () => {
  const [number, setnumber] = useState(1);
  const [dark, setdark] = useState(false);

  //Memoization
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //   const doubleNumber = slowFunction(number);

  //   Referential Equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setnumber(parseInt(e.target.value))}
      />
      {/* Theme Changed */}
      <div className="div2">
        <button
          className="cancel button-pushable"
          onClick={() => setdark((prevDark) => !prevDark)}
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">Change Theme</span>
        </button>
      </div>
      {/* Doubled number */}
      <div style={themeStyles}>Double: {doubleNumber}</div>
    </div>
  );
};

function slowFunction(num) {
  console.log("Calling slow function...");
  for (let i = 0; i < 10000000000000000000000000000000000000; i++) {
    return num * 2;
  }
}
export default UseMemoHook;
