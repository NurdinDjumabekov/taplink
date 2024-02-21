import React, { useState } from "react";
import { changeTypesService } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import "./SelectTypeService.scss";
import arrow from "../../assets/icons/arrow.svg";

const SelectTypeService = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const { typesService } = useSelector((state) => state.requestSlice);

  const clickType = (codeid) => {
    const newData = typesService.map((button) => {
      return {
        ...button,
        bool: codeid === button.codeid,
      };
    });
    dispatch(changeTypesService(newData));
    setActive(!active);
  };

  return (
    <>
      <div className="serviceChoice__type">
        {typesService?.map((type) => (
          <button
            key={type?.codeid}
            onClick={() => clickType(type?.codeid)}
            className={type?.bool ? "activeBtnType" : ""}
          >
            {type?.categ_name}
          </button>
        ))}
      </div>
      <div className="serviceChoice__type__mobile">
        {typesService?.map((type) => (
          <button
            key={type?.codeid}
            onClick={() => clickType(type?.codeid)}
            className={type?.bool ? "activeBtnTypeMobile" : "none"}
          >
            <p>{type?.categ_name}</p>
            {type?.bool && (
              <img
                src={arrow}
                alt="arrow"
                className={active ? "activeBtn" : "disactiveBtn"}
              />
            )}
          </button>
        ))}
        {active && (
          <div className="choice">
            {typesService?.map((type) => (
              <button
                key={type?.codeid}
                onClick={() => clickType(type?.codeid)}
              >
                <p className={type?.bool ? "activeInner" : ""}>
                  {type?.categ_name}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectTypeService;
