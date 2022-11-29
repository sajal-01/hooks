import React, { useState, useEffect } from "react";
import "./styles.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const UseEffectHook = () => {
  const [render, setRender] = useState("posts");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${render}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        // const { body } = json;
        setItems(json);
      });
  }, [render]);
  return (
    <>
      <div className="container">
        <div className="div2">
          <button
            onClick={(e) => setRender("posts")}
            className="cancel button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">Posts</span>
          </button>
        </div>
        <div className="div2">
          <button
            onClick={(e) => setRender("comments")}
            className="cancel button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">Comments</span>
          </button>
        </div>
        <div className="div2">
          <button
            onClick={(e) => setRender("users")}
            className="cancel button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">Users</span>
          </button>
        </div>
      </div>
      <div className="div3">{render}</div>

      {!loading ? (
        items.map((item) => {
          return <div key={item.id}>{JSON.stringify(item)}</div>;
        })
      ) : (
        <div className="loader">
          <PacmanLoader color="#f18a11" size={100} />
        </div>
      )}
    </>
  );
};

export default UseEffectHook;
