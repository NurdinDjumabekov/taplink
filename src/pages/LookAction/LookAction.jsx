import React from "react";
import "./LookAction.scss";
import { load } from "@2gis/mapgl";
import Addres from "../../components/Addres/Addres";
import NavArrow from "../../components/NavArrow/NavArrow";
import { useDispatch, useSelector } from "react-redux";
import { changActiveMapBtn } from "../../store/reducers/stateSlice";
import MapPoint from "../../components/MapPoint/MapPoint";

const LookAction = () => {
  const dispatch = useDispatch();
  const { activeMapBtn } = useSelector((state) => state.stateSlice);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lookAction">
      <div className="filials">
        <NavArrow text={"Выберите филиал"} />
        <div className="choiceMap">
          {activeMapBtn.map((i) => (
            <button
              key={i.key}
              className={i.active ? "activeBtnMap" : ""}
              onClick={() => dispatch(changActiveMapBtn(i.key))}
            >
              {i.btn}
            </button>
          ))}
        </div>
      </div>
      {activeMapBtn.length > 0 && (
        <>{activeMapBtn[0].active ? <Addres /> : <MapPoint />}</>
      )}
    </div>
  );
};

export default LookAction;
