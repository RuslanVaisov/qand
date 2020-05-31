import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
