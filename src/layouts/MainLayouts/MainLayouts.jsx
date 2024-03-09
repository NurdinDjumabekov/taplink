import React, { useEffect } from "react";
import "./MainLayouts.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CallBtns from "../../components/CallBtns/CallBtns";

const MainLayouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const vantaElement = document.getElementById("vanta");

    if (prefersDarkMode) {
      // vantaElement.style.background = "#222"; // Темный режим
      vantaElement.style.background = "#fff"; // Темный режим
    } else {
      vantaElement.style.background = "#fff"; // Светлый режим
    }
  }, []);

  console.log(location?.pathname, "location");

  return (
    <div className="mainLayouts">
      <div className="animation" id="vanta"></div>
      <div className="mainContent">
        <Outlet />
        {/* {location?.pathname !== "/basket" && <CallBtns />} */}
      </div>
    </div>
  );
};

export default MainLayouts;
