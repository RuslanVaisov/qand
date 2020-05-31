import React from "react";
import "./ProductTypes.scss";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="product-types-button">
      <Link to="/all-products" className="all-products-btn">
        ВСЕ ПРОДУКТЫ
      </Link>
    </div>
  );
};

export default Button;
