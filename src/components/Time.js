import React from "react";

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      //isPlaying: false,
      timerSecond: 0,
      intervalId: 0,
    };
    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }
  play() {
    if (this.state.intervalId !== 0) {
      return;
    }
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.props.setIsPlaying(true);
    this.setState({
      intervalId: intervalId,
      // isPlaying: true,
    });
  }
  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleTimer(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleTimer(this.state.isSession);
          }
        }
        this.props.updateTimerMinute();
        this.setState({
          timerSecond: 59,
        });

        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }
  stop() {
    clearInterval(this.state.intervalId);
    this.props.setIsPlaying(false);
    this.setState({
      intervalId: 0,
    });
  }
  reset() {
    this.stop();
    this.props.resetTimer();
    this.setState({
      timerSecond: 0,
    });
    if (!this.state.isSession) {
      this.setState({
        isSession: true,
      });
    }
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
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Time;
