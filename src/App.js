import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Pokegame from "./Components/Pokegame";

class App extends React.Component {
  state = {
    result: "",
    win: undefined,
  };
  constructor(props) {
    super(props);
    this.game1 = React.createRef();
    this.game2 = React.createRef();
  }
  componentDidMount() {
    const x1 = this.game1.current.hand.totalXP;
    const x2 = this.game2.current.hand.totalXP;
    this.setState({
      result: x1 > x2 ? "A wins" : "B wins",
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>{this.state.result}</h2>
        <Pokegame ref={this.game1} />
        <Pokegame ref={this.game2} />
      </div>
    );
  }
}

export default App;
