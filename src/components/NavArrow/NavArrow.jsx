import React from "react";
import "./NavArrow.scss";
import arrowBig from "../../assets/icons/bigArow.svg";

const NavArrow = ({ text, nav }) => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__inner">
          <img src={arrowBig} alt="<" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default NavArrow;
