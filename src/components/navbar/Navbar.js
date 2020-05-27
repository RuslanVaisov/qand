import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./Navbar.scss";
import logoBlack from "../../img/logo-black.png";
import logo from "../../img/logo.png";

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
          <img src={Toggle ? logo : logoBlack} alt="" />
        </div>
        <div onClick={handleToggle} className="hamburger">
          <div>
            <HamburgerMenu
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
      </nav>

      {Toggle ? (
        <ul onClick={handleToggle} className="nav-list">
          <li>
            <a href="/">продукты</a>
          </li>
          <li>
            <a href="/">о нас</a>
          </li>
          <li>
            <a href="/">контакты</a>
          </li>
        </ul>
      ) : null}
    </section>
  );
};

export default Navbar;
