import React from "react";
import "./Product.scss";

const Product = (props) => {
  const { title, img, type, color, bgColor } = props.product;

  return (
    <div className="product-types-product">
      <a href="/">
        <img src={img} alt={title} />
        <p
          className="product-type"
          style={{ backgroundColor: bgColor, color: color }}
        >
          {type}
        </p>
      </a>
    </div>
  );
};

export default Product;
