import React from "react";

function Session(props) {
  function decrement() {
    if (props.sessionLength === 10) {
      // don't be lazy, at least 10 minutes
      return;
    }
    props.decreaseSession();
  }
  function increment() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }
  return (
    <div>
      <h3>Session Length</h3>
      <div className="interval-container">
        <button onClick={decrement}> - </button>
        <p>{props.sessionLength}</p>
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}

export default Session;
