import React, { useEffect } from "react";
import AllProductsCategories from "../components/allProductsCategories/AllProductsCategories";
import gsap from "gsap";

const AllProducts = () => {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.from(".product-types-product", 3, {
      y: "100vh",
      opacity: 0,
      delay: 1,
      scale: 0.5,
      ease: "power4.inOut",
      stagger: 0.3,
    })
      .from(".product-type", 1, {
        opacity: 0,
        scale: 0,
        ease: "expo.inOut",
      })
      .from(
        ".all-products-logo",
        1,
        {
          y: -100,
          ease: "power3",
        },
        3
      );
  }, []);

  return (
    <React.Fragment>
      <AllProductsCategories />
    </React.Fragment>
  );
};

export default AllProducts;
