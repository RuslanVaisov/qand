import React from "react";
import "./AllProductsCategories.scss";
import { withProductConsumer } from "../../Context";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";
import logo from "../../img/logo-black.png";
import logoWhite from "../../img/logo.png";

import { Link } from "react-router-dom";
const AllProductsCategories = ({ context }) => {
  const { products, sortedProducts, headText } = context;

  return (
    <React.Fragment>
      <div
        style={
          {
            // backgroundColor:
            //   headText === "Молочный"
            //     ? "#FDF0E3"
            //     : headText === "Темный"
            //     ? "#401F19"
            //     : headText === "Double"
            //     ? "#401F19"
            //     : headText === "Mix"
            //     ? "#AE4A84"
            //     : headText === "Special"
            //     ? "#F1B647"
            //     : "#fff",
          }
        }
        className="all-products-header"
      >
        <Link to="/">
          <img
            className="all-products-logo"
            src={
              // headText === "Молочный"
              //   ? logo
              //   : headText === "все продукты"
              //   ? logo
              //   : logoWhite
              logo
            }
            alt=""
          />
        </Link>
      </div>
      <ProductFilter products={products} />
      <SingleProduct sortedProducts={sortedProducts} />
    </React.Fragment>
  );
};

export default withProductConsumer(AllProductsCategories);
