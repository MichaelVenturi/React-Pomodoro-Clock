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
      isPlaying: false,
    };
    this.onIncrementBreak = this.onIncrementBreak.bind(this);
    this.onDecrementBreak = this.onDecrementBreak.bind(this);

    this.onIncrementSession = this.onIncrementSession.bind(this);
    this.onDecrementSession = this.onDecrementSession.bind(this);

    this.onToggleTimer = this.onToggleTimer.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.setIsPlaying = this.setIsPlaying.bind(this);
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
        timerMinute: prevState.sessionLength + 1,
      };
    });
  }
  onDecrementSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  }

  onToggleTimer(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength,
    });
  }

  setIsPlaying(isPlay) {
    this.setState({
      isPlay: isPlay,
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <h2>Pomodoro Clock</h2>
          <div className="row-container">
            <Break
              isPlay={this.state.isPlay}
              breakLength={this.state.breakLength}
              increaseBreak={this.onIncrementBreak}
              decreaseBreak={this.onDecrementBreak}
            ></Break>

            <Session
              isPlay={this.state.isPlay}
              sessionLength={this.state.sessionLength}
              increaseSession={this.onIncrementSession}
              decreaseSession={this.onDecrementSession}
            ></Session>
          </div>
          <Time
            timerMinute={this.state.timerMinute}
            breakLength={this.state.breakLength}
            updateTimerMinute={this.onUpdateTimerMinute}
            toggleTimer={this.onToggleTimer}
            resetTimer={this.onResetTimer}
            setIsPlaying={this.setIsPlaying}
          ></Time>
        </main>
      </div>
    );
  }
}

export default App;
