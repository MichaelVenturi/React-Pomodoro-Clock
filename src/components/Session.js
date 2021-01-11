import React from "react";

function Session(props) {
  function decrement() {
    if (props.sessionLength === 1 || props.isPlay) {
      return;
    }
    props.decreaseSession();
  }
  function increment() {
    if (props.sessionLength === 60 || props.isPlay) {
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
