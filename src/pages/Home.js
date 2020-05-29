import React from "react";
import Navbar from "../components/navbar/Navbar";
import Showcase from "../components/showcase/Showcase";
import ProductTypes from "../components/productTypes/ProductTypes";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Showcase />
      <ProductTypes />
    </React.Fragment>
  );
};

export default Home;
