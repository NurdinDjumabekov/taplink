import React, { useEffect } from "react";
import "./MainLayouts.scss";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
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

  return (
    <div className="mainLayouts">
      <div className="animation" id="vanta"></div>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
