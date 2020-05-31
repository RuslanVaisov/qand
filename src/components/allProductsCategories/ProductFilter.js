import React, { useContext } from "react";
import milk from "../../img/1.jpg";
import dark from "../../img/2.jpg";
import double from "../../img/3.jpg";
import mix from "../../img/4.jpg";
import special from "../../img/5.jpg";
import { ProductContext } from "../../Context";

const ProductFilter = () => {
  const context = useContext(ProductContext);
  const { handleClick } = context;

  return (
    <div className="categories-grid">
      <div onClick={handleClick} className="product-types-product">
        <img src={milk} alt="Молочный" />
        <div></div>
        <p className="product-type milk">Молочный</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={dark} alt="Черный" />
        <p className="product-type dark">Черный</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={double} alt="двойной" />
        <p className="product-type ruby">Двойной</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={mix} alt="микс" />
        <p className="product-type gold">Микс</p>
      </div>
      <div onClick={handleClick} className="product-types-product">
        <img src={special} alt="спешл" />
        <p className="product-type dessert">Спешл</p>
      </div>
    </div>
  );
};

export default ProductFilter;
