import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using react and redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span> - </span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value="0"
          />
          <a className="quantity__plus" title="Increment">
            <span> + </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
