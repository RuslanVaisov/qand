import React, { useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import gsap from "gsap";

// pages
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Error from "./pages/Error";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing
    gsap.to("body", 0, {
      css: {
        visibility: "visible",
      },
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/all-products" component={AllProducts} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
