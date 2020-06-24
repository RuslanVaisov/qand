import React, { useContext } from "react";
import milk from "../../img/1.png";
import dark from "../../img/2.png";
import double from "../../img/3.png";
import mix from "../../img/4.png";
import special from "../../img/5.png";
import { ProductContext } from "../../Context";

const ProductFilter = () => {
  const context = useContext(ProductContext);
  const { handleClick, headText } = context;

  return (
    <>
      <div className="categories-grid">
        <div onClick={handleClick} className="product-types-product">
          <img src={milk} alt="Молочный" />
          <p className="product-type milk">Молочный</p>
        </div>
        <div onClick={handleClick} className="product-types-product">
          <img src={dark} alt="Темный" />
          <p className="product-type dark">Темный</p>
        </div>
        <div onClick={handleClick} className="product-types-product">
          <img src={double} alt="Double" />
          <p className="product-type double">Double</p>
        </div>
        <div onClick={handleClick} className="product-types-product">
          <img src={mix} alt="Mix" />
          <p className="product-type mix">Mix</p>
        </div>
        <div onClick={handleClick} className="product-types-product">
          <img src={special} alt="Special" />
          <p className="product-type special">Special</p>
        </div>
      </div>
      <h1
        className="headText"
        style={{
          backgroundColor:
            headText === "Молочный"
              ? "#FDF0E3"
              : headText === "Темный"
              ? "#401F19"
              : headText === "Double"
              ? "#401F19"
              : headText === "Mix"
              ? "#AE4A84"
              : headText === "Special"
              ? "#F1B647"
              : "#fff",
          color:
            headText === "Молочный"
              ? "#333"
              : headText === "Темный"
              ? "#fff"
              : headText === "Double"
              ? "#fff"
              : headText === "Mix"
              ? "#fff"
              : headText === "Special"
              ? "#fff"
              : "#333",
        }}
      >
        {headText.toLowerCase()}
      </h1>
    </>
  );
};

export default ProductFilter;
