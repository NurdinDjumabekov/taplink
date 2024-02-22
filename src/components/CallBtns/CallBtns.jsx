import React from "react";
import "./CallBtns.scss";
import call from "../../assets/icons/callMe.svg";
import { Zoom } from "@mui/material";
import bag from "../../assets/icons/bag.svg";
import { useLocation, useNavigate } from "react-router-dom";

// import { Zoom } from '@mui/material';

const CallBtns = () => {
  const [rotate, setRotate] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const arr = [
    { id: 1, url: "adssa" },
    { id: 2, url: "adssa" },
  ];

  return (
    <div className="callBtns">
      <div className="callBtns__inner">
        {/* <div className="callBtns__inner__social">
          {arr?.map((i) => (
            <Zoom
              in={rotate}
              style={{ transitionDelay: rotate ? "200ms" : "50ms" }}
              key={i.id}
            >
              <a
                href="https://b24-c9pv9h.bitrix24.site/crm_form/"
                target="_blank"
              >
                {i.id}0
              </a>
            </Zoom>
          ))}
        </div> */}
        <button className="actionBtn"></button>
        <div
          className="linkBtn"
          onClick={() => {
            setRotate(!rotate);
            navigate("/basket");
          }}
          disabled={location?.pathname === "/basket" ? true : false}
        >
          <img src={bag} alt="call" />
        </div>
      </div>
    </div>
  );
};

export default CallBtns;
