import React, { useEffect } from "react";
import "./AddresLayouts.scss";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { takeMasters } from "../../store/reducers/requestSlice";

const AddresLayouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { everyFilial } = useSelector((state) => state.requestSlice);

  const { id } = useParams();

  useEffect(() => {
    dispatch(takeMasters(id));
  }, []);

  //   console.log(location?.pathname, "location");
  //   console.log(everyFilial, "everyFilial");

  return (
    <div className="addresLayouts">
      <div className="addresLayouts__inner">
        <div className="addresLayouts__addres">
          <div className="round"></div>
          <h4>{everyFilial?.addres}</h4>
          <p>{everyFilial?.name}</p>
        </div>
        <div className="push"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default AddresLayouts;
