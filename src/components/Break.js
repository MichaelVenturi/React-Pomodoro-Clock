import React from "react";

function Break(props) {
  return (
    <div>
      <h3>Break Length</h3>
      <div className="interval-container">
        <button> + </button>
        <p>{props.breakLength}</p>
        <button> - </button>
      </div>
    </div>
  );
}

export default Break;
