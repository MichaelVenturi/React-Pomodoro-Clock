import React from "react";

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      timerSecond: 0,
    };
  }
  render() {
    return (
      <div>
        <div className="time-container">
          <h3>{this.state.isSession === true ? "Session" : "Break"}</h3>
          <span>
            {this.props.timerMinute}:
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </div>
        <div>
          <button>Play</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default Time;
