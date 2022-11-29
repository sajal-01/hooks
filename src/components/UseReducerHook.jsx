import React, { useReducer } from "react";
import "./styles.css";

/*https://blog.webdevsimplified.com/2020-06/use-reducer/*/

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 2 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return 0;
    default:
      return state;
  }
}

const UseReducerHook = () => {
  // useReducer takes an initial state as one of its arguments and returns to us the current state and a way to update that state.

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //   function increment() {
  //     dispatch({ type: "increment" });
  //   }

  //   function decrement() {
  //     dispatch({ type: "decrement" });
  //   }

  return (
    <div className="container">
      <div className="div2">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="cancel button-pushable"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">-</span>
        </button>
      </div>
      <div className="div3">{state.count}</div>
      <div class="div1">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="accept button-pushable"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">+</span>
        </button>
      </div>
      <div class="div1">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="accept button-pushable"
        >
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
