import React, { useContext } from "react";
import milk from "../../img/1.png";
import dark from "../../img/2.png";
import double from "../../img/3.png";
import mix from "../../img/4.png";
import special from "../../img/5.png";
import { ProductContext } from "../../Context";

const ProductFilter = () => {
  const context = useContext(ProductContext);
  const { handleClick } = context;

  return (
    <div className="categories-grid">
      <div onClick={handleClick} className="product-types-product">
        <img src={milk} alt="Молочный" />
        <p className="product-type milk">Молочный</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={dark} alt="Черный" />
        <p className="product-type dark">Черный</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={double} alt="Двойной" />
        <p className="product-type ruby">Двойной</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={mix} alt="Mix" />
        <p className="product-type gold">Mix</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={special} alt="Special" />
        <p className="product-type dessert">Special</p>
      </div>
    </div>
  );
};

export default ProductFilter;
