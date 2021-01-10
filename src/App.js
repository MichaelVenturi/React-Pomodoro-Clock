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
  }
  render() {
    return (
      <div className="App">
        <main>
          <h2>Pomodoro Clock</h2>
          <div className="row-container">
            <Break breakLength={this.state.breakLength}></Break>
            {/* <span className="divider">|</span> */}
            <Session sessionLength={this.state.sessionLength}></Session>
          </div>
          <Time timerMinute={this.state.timerMinute}></Time>
        </main>
      </div>
    );
  }
}

export default App;
