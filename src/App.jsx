import React, { Component } from "react";
import Gameboard from "./Gameboard";
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
          letterSpacing: "5px",
        }}
      >

      <h1>React: Memory Game Project</h1>
 
      <div>
        <img id="imgDrWho" src="backGround.jpg" alt=""/>
        <h2 >Test your brain</h2>
        <Gameboard/>
      </div>

      </main>
    );
  }
}

export default App;
