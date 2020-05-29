import React from "react";
import "./ProductTypes.scss";
import Product from "../product/Product";
import { ProductConsumer } from "../../Context";

const ProductTypes = () => {
  return (
    <section className="product-types" id="products">
      <div className="product-types-bg">
        <h1>— ПРОДУКТЫ —</h1>
      </div>
      <div className="product-type-grid">
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => (
              <Product key={product.id} product={product} />
            ));
          }}
        </ProductConsumer>
      </div>

      <button className="all-products-btn">ВСЕ ПРОДУКТЫ</button>
    </section>
  );
};

export default ProductTypes;
