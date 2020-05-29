import React, { Component } from "react";
import { productTypeList } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: productTypeList,
  };

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
