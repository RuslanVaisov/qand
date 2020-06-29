import React from "react";

const ProductDetails = ({ product }) => {
  const { img, title, info, alt, bgColor, color, altBg } = product;

  return (
    <div className="product-details">
      <img src={img} alt={title} />
      <div className="product-details-content">
        <h2 style={{ color: altBg }}>{title}</h2>
        <p>{info}</p>
        {/* <p
          style={{
            background: bgColor,
            width: "120px",
            textAlign: "center",
            padding: "0.2rem .5rem",
            margin: "2rem 1rem",
            borderRadius: "25px",
            color: color,
            fontSize: "1rem",
          }}
        >
          {alt}
        </p> */}
      </div>
    </div>
  );
};

export default ProductDetails;
