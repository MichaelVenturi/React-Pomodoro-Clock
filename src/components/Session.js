import React from "react";

function Session(props) {
  return (
    <div>
      <h3>Session Length</h3>
      <div className="interval-container">
        <button> + </button>
        <p>{props.sessionLength}</p>
        <button> - </button>
      </div>
    </div>
  );
}

export default Session;
