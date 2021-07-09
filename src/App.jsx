import React, { Component } from "react";
import Board from "./Board";
import Card from "./Card";
import "./App.css";




class App extends Component {
  render() {

    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
      <h1>React: Memory Game Project</h1>

      <div>
        <h2>Test your brain</h2>
        <Board/>
      </div>

      </main>
    );
  }
}

export default App;
