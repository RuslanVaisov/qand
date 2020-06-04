import React, { useEffect } from "react";
import "./App.scss";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import gsap from "gsap";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const tl = gsap.timeline();

  tl.from(".showcase-content", {
    duration: 2,
    opacity: 0,
    x: -200,
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-products" component={AllProducts} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
