import React from "react";
import "./AllProductsCategories.scss";
import ProductDetails from "./ProductDetails";

const SingleProduct = ({ sortedProducts }) => {
  return (
    <div className="single-product-grid">
      {sortedProducts.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SingleProduct;
