import React from "react";
import "./Basket.scss";
import call from "../../assets/icons/bag.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location?.pathname, 'location');

  return (
    <div className="basket" onClick={() => navigate("/basket")}>
      <button disabled={location?.pathname === "/basket" ? true : false}>
        <img src={call} alt="call" />
      </button>
    </div>
  );
};

export default Basket;
