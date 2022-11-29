import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "./actions/index";
import "./styles.css";

const Redux = () => {
  const myState = useSelector((state) => state.changeNumber);
  const myDispatch = useDispatch();

  return (
    <>
      <h1>Redux</h1>
      <div className="container">
        <div className="div2">
          <button
            onClick={() => myDispatch(DecNumber(2))}
            className="cancel button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">-</span>
          </button>
        </div>
        <div className="div3">{myState}</div>
        <div class="div1">
          <button
            onClick={() => myDispatch(IncNumber(5))}
            className="accept button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Redux;
