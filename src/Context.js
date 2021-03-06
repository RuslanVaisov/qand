import React, { Component } from "react";
import { productTypeList, productList } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: productTypeList,
    productList: productList,
    sortedProducts: productList,
    alt: "all",
    headText: "все продукты",
  };

  handleClick = (event) => {
    const alt = event.target.alt;
    this.setState(
      {
        alt,
        headText: alt,
      },
      this.filterProducts
    );
  };

  filterProducts = (event) => {
    let { productList, alt, headText } = this.state;
    let tempProducts = [...productList];
    if (alt !== "all" && headText !== "Все продукты") {
      tempProducts = tempProducts.filter((products) => products.alt === alt);
    }

    this.setState({
      sortedProducts: tempProducts,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, handleClick: this.handleClick }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductProvider, ProductConsumer, ProductContext };
