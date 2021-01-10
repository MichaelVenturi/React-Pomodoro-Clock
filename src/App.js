import React from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Time from "./components/Time";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25, // default values for clock
      timerMinute: 25,
    };
    this.onIncrementBreak = this.onIncrementBreak.bind(this);
    this.onDecrementBreak = this.onDecrementBreak.bind(this);

    this.onIncrementSession = this.onIncrementSession.bind(this);
    this.onDecrementSession = this.onDecrementSession.bind(this);
  }

  onIncrementBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  }
  onDecrementBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  onIncrementSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
      };
    });
  }
  onDecrementSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <h2>Pomodoro Clock</h2>
          <div className="row-container">
            <Break
              breakLength={this.state.breakLength}
              increaseBreak={this.onIncrementBreak}
              decreaseBreak={this.onDecrementBreak}
            ></Break>
            {/* <span className="divider">|</span> */}
            <Session
              sessionLength={this.state.sessionLength}
              increaseSession={this.onIncrementSession}
              decreaseSession={this.onDecrementSession}
            ></Session>
          </div>
          <Time timerMinute={this.state.timerMinute}></Time>
        </main>
      </div>
    );
  }
}

export default App;
