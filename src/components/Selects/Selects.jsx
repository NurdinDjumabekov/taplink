import React from "react";
import "./Selects.scss";
import img from "../../asstes/icons/arrowBtn.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeADFF, changeADUF } from "../../store/reducers/inputSlice";
import { changeTodosApplications } from "../../store/reducers/applicationsSlice";
import {
  changeArbitrPred,
  changeTypePay,
} from "../../store/reducers/stateSlice";
import {
  changeTypeSecretarDela,
  toTakeDistrict,
  toTakeRegions,
} from "../../store/reducers/selectsSlice";
import { searchNameSelect } from "../../helpers/searchNameSelect";

const Selects = (props) => {
  const { arr, initText, keys, type, urgently } = props;
  // const dispatch = useDispatch();
  // const [active, setActive] = React.useState(false);
  // const accordionRef = React.useRef(null);
  // const { adff, aduf } = useSelector((state) => state.inputSlice);
  // const { todosApplications } = useSelector((state) => state.applicationsSlice);
  // const { tokenA } = useSelector((state) => state.saveDataSlice);

  React.useEffect(() => {
    const handleChange = (e) => {
      if (
        active &&
        accordionRef.current &&
        !accordionRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleChange);

    return () => {
      document.removeEventListener("click", handleChange);
    };
  }, [active]);

  const clickSelect = (id) => {
    if (type === "adff") {
      dispatch(changeADFF({ ...adff, [keys.type]: +id }));
    }
    setActive(false);
  };

  return (
    <div className="selectBlockMain">
      <h5>
        {initText}
        {/* {urgently ? <b className="required">*</b> : ""} */}
      </h5>
      <div className="selectBlock" id="uniqueSelectID" ref={accordionRef}>
        <div
          className="selectBlock__inner"
          onClick={() => setActive((prevState) => !prevState)}
        >
          <p>{searchNameSelect(arr, [keys?.typeKey])}</p>
          <img
            src={img}
            alt="<"
            style={active ? { transform: "rotate(90deg)" } : {}}
          />
        </div>
        {active && (
          <div className="selectBlock__activeBlock">
            {arr?.map((sel) => (
              <p onClick={() => clickSelect(+sel.codeid)} key={sel.codeid}>
                {sel.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selects;
