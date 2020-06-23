import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./Navbar.scss";
import logoBlack from "../../img/logo-black.png";
import logo from "../../img/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!Toggle);
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section className="navbar">
      <nav>
        <div className="logo">
          <a href="/">
            <img src={Toggle ? logo : logoBlack} alt="" />
          </a>
        </div>
        <div onClick={handleToggle} className="hamburger">
          <div className="nav-menu">
            <p className="burger-title">Menu</p>
            <div>
              <HamburgerMenu
                className="hamburger-menu"
                isOpen={open}
                menuClicked={handleClick}
                width={18}
                height={10}
                strokeWidth={1}
                rotate={0}
                // color={Toggle ? "white" : "black"}
                color="#fff"
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
          </div>
        </div>
      </nav>

      {Toggle ? (
        <ul onClick={handleToggle} className="nav-list">
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="product-types"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              Продукты
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              Контакты
            </Link>
          </li>
        </ul>
      ) : null}
    </section>
  );
};

export default Navbar;
