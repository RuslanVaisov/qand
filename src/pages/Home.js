import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Showcase from "../components/showcase/Showcase";
import ProductTypes from "../components/productTypes/ProductTypes";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import IntroOverlay from "../components/IntroOverlay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  // timeline
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,

    stagger: 0.3,
  })
    .to(".intro-overlay", 1, {
      transform: "translate(0, 100%)",
      height: 0,
      ease: "power1",
    })
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
        onComplete: completeAnimation,
      },
      2.8
    );

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".product-types-product", 3, {
    scrollTrigger: {
      trigger: ".product-types-product",
      start: "top 90%",
      end: "top 50%",
      scrub: 3,
      markers: true,
    },
    opacity: -1,
    scale: 0,
    stagger: 0.3,
  });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    // on load timeline
    homeAnimation(completeAnimation);
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        {animationComplete ? "" : <IntroOverlay />}
        <Navbar />
        <Showcase />
        <ProductTypes />
        <About />
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Home;
