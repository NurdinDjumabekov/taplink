import React from "react";
import "./NavArrow.scss";
import arrowBig from "../../assets/icons/bigArow.svg";
import { useNavigate } from "react-router-dom";

const NavArrow = ({ text, nav }) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__inner" onClick={() => navigate(-1)}>
          <img src={arrowBig} alt="<" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default NavArrow;
