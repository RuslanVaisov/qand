import React from "react";
import "./ProductTypes.scss";
import Product from "../product/Product";
import { ProductConsumer } from "../../Context";

const Categories = () => {
  return (
    <div className="product-type-grid">
      <ProductConsumer>
        {(value) => {
          return value.products.map((product) => (
            <Product key={product.id} product={product} />
          ));
        }}
      </ProductConsumer>
    </div>
  );
};

export default Categories;
