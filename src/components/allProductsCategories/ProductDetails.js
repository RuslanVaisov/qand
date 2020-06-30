import React from "react";

const ProductDetails = ({ product }) => {
  const { img, title, info, altBg } = product;

  return (
    <div className="product-details">
      <img src={img} alt={title} />
      <div className="product-details-content">
        <h2 style={{ color: altBg }}>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
