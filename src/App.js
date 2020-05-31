import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-products" component={AllProducts} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
