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
    <div
      style={{
        borderBottom:
          headText === "Молочный"
            ? "#fdf0e3 1.5px solid"
            : headText === "Темный"
            ? "#401F19 1.5px solid"
            : headText === "Double"
            ? "#401F19 1.5px solid"
            : headText === "Mix"
            ? "#AE4A84 1.5px solid"
            : headText === "Special"
            ? "#F1B647 1.5px solid"
            : "#fff",
        width: "95%",
        margin: "0 auto",
      }}
      className="productFilter"
    >
      <div className="categories-grid">
        <button onClick={handleClick} className="product-types-product">
          <img src={milk} alt="Молочный" />
          <div className="product-type milk">
            <p>Молочный</p>
            <span></span>
          </div>
        </button>
        <button onClick={handleClick} className="product-types-product">
          <img src={dark} alt="Темный" />
          <div className="product-type dark">
            <p>Темный</p>
            <span></span>
          </div>
        </button>
        <button onClick={handleClick} className="product-types-product">
          <img src={double} alt="Double" />
          <div className="product-type double">
            <p>Double</p>
            <span></span>
          </div>
        </button>
        <button onClick={handleClick} className="product-types-product">
          <img src={mix} alt="Mix" />
          <div className="product-type mix">
            <p>Mix</p>
            <span></span>
          </div>
        </button>
        <button onClick={handleClick} className="product-types-product">
          <img src={special} alt="Special" />
          <div className="product-type special">
            <p>Special</p>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
