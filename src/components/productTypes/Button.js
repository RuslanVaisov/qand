import React from "react";
import "./ProductTypes.scss";
import { NavLink } from "react-router-dom";

const Button = () => {
  return (
    <div className="product-types-button">
      <NavLink to="/all-products" className="all-products-btn">
        ВСЕ ПРОДУКТЫ
      </NavLink>
    </div>
  );
};

export default Button;
