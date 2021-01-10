import React from "react";

function Break(props) {
  function decrement() {
    if (props.breakLength === 1) {
      return;
    }
    props.decreaseBreak();
  }
  function increment() {
    if (props.breakLength === 30) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <div>
      <h3>Break Length</h3>
      <div className="interval-container">
        <button onClick={decrement}> - </button>
        <p>{props.breakLength}</p>
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}

export default Break;
