import React, { useContext } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context";

const Product = (props) => {
  const { img, alt } = props.product;
  const context = useContext(ProductContext);
  const { handleClick } = context;

  return (
    <div className="product-types-product">
      <Link to="/all-products" onClick={handleClick}>
        <img src={img} alt={alt} />
        {/* <p
          className="product-type"
          style={{ backgroundColor: bgColor, color: color }}
        >
          {type}
        </p> */}
      </Link>
    </div>
  );
};

export default Product;
