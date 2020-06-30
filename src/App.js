import React from "react";
import "./styles.css";
import Lists from "./components/Lists.js";

export default function App() {

  return (
    <div className="App">
      <h1>React Start</h1>
      <h2>Biblioteca de JS para interfaces</h2>
      <h3>A lista de posts </h3>
      <h3>Git and Github</h3>
      <h3>Github não conflito</h3>
      <Lists />
    </div>
  );
}
