import React, { useEffect } from "react";
import AllProductsCategories from "../components/allProductsCategories/AllProductsCategories";
import gsap from "gsap";

const AllProducts = () => {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.from(".categories-grid", 1, {
      delay: 0.5,
      opacity: 0,
      ease: "power4.inOut",
      // stagger: 0.1,
    })
      .from(
        ".all-products-logo",
        0.5,
        {
          y: -100,
          ease: "power3",
        },
        1
      )
      .from(
        ".single-product-grid, .headText",
        1.5,
        {
          y: "20vh",
          ease: "power4.inOut",
          opacity: 0,
        },
        0.5
      );
  }, []);

  return (
    <React.Fragment>
      <AllProductsCategories />
    </React.Fragment>
  );
};

export default AllProducts;
