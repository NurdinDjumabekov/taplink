import React, { useEffect } from "react";
import "./AddresLayouts.scss";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { takeMasters, toTakeSchedule } from "../../store/reducers/requestSlice";
import arrowBig from "../../assets/icons/bigArow.svg";

const AddresLayouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { everyFilial } = useSelector((state) => state.requestSlice);

  const { id } = useParams();

  useEffect(() => {
    dispatch(takeMasters(id));
    dispatch(toTakeSchedule());
  }, []);

  // console.log(location?.pathname, "location");
  // console.log(id, "id");

  const isOtherPage =
    location.pathname.includes("service") ||
    location.pathname.includes("spec") ||
    location.pathname.includes("date") ||
    location.pathname.includes("basket");

  return (
    <div className={isOtherPage ? "addresLayouts otherPage" : "addresLayouts"}>
      <div className="addresLayouts__inner">
        <div
          className="addresLayouts__addres"
          onClick={() => isOtherPage && navigate(-1)}
        >
          <div className="arrowImg">
            <img src={arrowBig} alt="<" />
          </div>
          <div className="round"></div>
          <div>
            <h4>{everyFilial?.addres}</h4>
            <p>{everyFilial?.name}</p>
          </div>
        </div>
        <div className="push"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default AddresLayouts;
