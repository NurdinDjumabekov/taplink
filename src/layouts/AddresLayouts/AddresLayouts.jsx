////// hooks
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

////// scss
import "./AddresLayouts.scss";

////// fns
import { takeMasters } from "../../store/reducers/requestSlice";

////// img
import arrowBig from "../../assets/icons/bigArow.svg";
import logoImg from "../../assets/icons/logo.jpg";

const AddresLayouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { everyFilial } = useSelector((state) => state.requestSlice);

  const { id, departamentId } = useParams();

  useEffect(() => {
    dispatch(takeMasters({ id, depId: departamentId || 0 })); /// беру данные филиала и мастеров
  }, [departamentId]);

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
          <div className="round">
            <img src={logoImg} alt="logo" />
          </div>
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
