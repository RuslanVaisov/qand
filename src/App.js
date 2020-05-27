import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App;
