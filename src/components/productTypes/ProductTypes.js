import React from "react";
import "./ProductTypes.scss";
import Button from "./Button";
import Categories from "./Categories";

const ProductTypes = () => {
  return (
    <section className="product-types" id="products">
      <div className="product-types-bg">
        <h1>— ПРОДУКТЫ —</h1>
      </div>
      <Categories />
      <Button />
    </section>
  );
};

export default ProductTypes;
