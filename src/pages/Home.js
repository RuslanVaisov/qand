import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Showcase from "../components/showcase/Showcase";
import ProductTypes from "../components/productTypes/ProductTypes";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import IntroOverlay from "../components/IntroOverlay";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    tl.from(".line span", 1.5, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,

      stagger: 0.3,
    })
      .to(
        ".intro-overlay",
        1,
        {
          transform: "translate(0, 100%)",
          height: 0,
          ease: "power1",
        },
        1.3
      )
      .from(
        [
          ".navbar .logo",
          ".navbar .hamburger",
          ".showcase p",
          ".showcase button",
          ".showcase img",
        ],
        1,
        {
          opacity: 0,
          ease: "expo.inOut",
        },
        1.3
      );

    tl2.from(".product-types-product", 3, {
      scrollTrigger: {
        trigger: ".product-types-product",
        start: "top 100%",
        end: "top 90%",
        scrub: 2,
      },
      opacity: 0,
      y: "20vh",
      stagger: 0.5,
    });
  }, []);

  return (
    <React.Fragment>
      <IntroOverlay />
      <Navbar />
      <Showcase />
      <ProductTypes />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
