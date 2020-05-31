import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Showcase from "../components/showcase/Showcase";
import ProductTypes from "../components/productTypes/ProductTypes";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Navbar />
          <Showcase />
          <ProductTypes />
          <About />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
