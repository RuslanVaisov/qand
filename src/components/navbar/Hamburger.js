import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const Hamburger = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={18}
        height={10}
        strokeWidth={1}
        rotate={0}
        color={props.Toggle ? "white" : "black"}
        borderRadius={0}
        animationDuration={0.5}
      />
    </div>
  );
};

export default Hamburger;
