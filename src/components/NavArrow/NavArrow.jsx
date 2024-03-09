import React from "react";
import "./NavArrow.scss";

const NavArrow = ({ text, nav }) => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 11.993h16M9.714 6.28 4 11.993M9.714 17.708 4 11.994"
            ></path>
          </svg>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default NavArrow;
