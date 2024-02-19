import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChoiceService.scss";
import { changeTypesService } from "../../store/reducers/requestSlice";
import { listService } from "../../helpers/dataArr";

const ChoiceService = () => {
  const dispatch = useDispatch();
  const { typesService } = useSelector((state) => state.requestSlice);

  const clickType = (codeid) => {
    const newData = typesService.map((button) => {
      return {
        ...button,
        bool: codeid === button.codeid,
      };
    });
    dispatch(changeTypesService(newData));
  };

  return (
    <div>
      <div className="serviceChoice">
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
        <div className="serviceChoice__inner">
          {listService?.map((i) => (
            <>
              <div className="cards" key={i?.codeid}>
                <div className="cards__img">
                  <img src={i?.logo} alt="logo" />
                </div>
                <div className="cards__texts">
                  <h5>{i?.title}</h5>
                  <div>
                    <span>Цена: {i?.sum}</span>
                    <button className="cards__basket">В корзину</button>
                  </div>
                  <p>{i?.descr}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoiceService;
