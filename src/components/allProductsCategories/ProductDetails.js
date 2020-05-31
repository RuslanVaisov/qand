import React from "react";

const ProductDetails = ({ product }) => {
  const { img, title, info } = product;

  return (
    <div className="product-details">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default ProductDetails;
