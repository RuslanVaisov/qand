import React from "react";
import "./AllProductsCategories.scss";
import { withProductConsumer } from "../../Context";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";
import logo from "../../img/logo-black.png";
import { Link } from "react-router-dom";
const AllProductsCategories = ({ context }) => {
  const { products, sortedProducts } = context;

  return (
    <React.Fragment>
      <div className="all-products-header">
        <Link to="/">
          <img className="all-products-logo" src={logo} alt="" />
        </Link>
      </div>
      <ProductFilter products={products} />
      <SingleProduct sortedProducts={sortedProducts} />
    </React.Fragment>
  );
};

export default withProductConsumer(AllProductsCategories);
