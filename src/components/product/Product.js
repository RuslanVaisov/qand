import React from "react";
import "./Product.scss";

const Product = (props) => {
  const { title, img, type } = props.product;

  return (
    <div className="single-product">
      <img src={img} alt={title} />
      <p className="product-type">{type}</p>
    </div>
  );
};

export default Product;
