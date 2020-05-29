import React from "react";
import Navbar from "../components/navbar/Navbar";
import Showcase from "../components/showcase/Showcase";
import ProductTypes from "../components/productTypes/ProductTypes";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Showcase />
      <ProductTypes />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
