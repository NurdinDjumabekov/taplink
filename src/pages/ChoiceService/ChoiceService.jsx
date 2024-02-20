import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChoiceService.scss";
import { changeTypesService } from "../../store/reducers/requestSlice";
import { listService } from "../../helpers/dataArr";
import { addBasketService } from "../../store/reducers/saveDataSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";

const ChoiceService = () => {
  const dispatch = useDispatch();
  const { typesService } = useSelector((state) => state.requestSlice);
  const { basketUser } = useSelector((state) => state.saveDataSlice);

  const clickType = (codeid) => {
    const newData = typesService.map((button) => {
      return {
        ...button,
        bool: codeid === button.codeid,
      };
    });
    dispatch(changeTypesService(newData));
  };

  const addBasket = (obj) => {
    const isServiceInBasket = basketUser?.service?.some(
      /// проверка есть ли id, если есть то не добавлять
      (i) => i?.codeid === obj?.codeid
    );

    if (isServiceInBasket) {
      dispatch(
        changeAlertText({
          text: "Такая услуга уже есть у вас в корзине",
          backColor: "#c284e4",
          state: true,
        })
      );
    } else {
      if (basketUser?.service?.length === 6) {
        dispatch(
          changeAlertText({
            text: "Вы за раз можете выбрать не больше 6ти услуг",
            backColor: "#c284e4",
            state: true,
          })
        );
      } else {
        dispatch(
          changeAlertText({
            text: "Мы добавили эту услугу в корзину",
            backColor: "#e484ba",
            state: true,
          })
        );
        dispatch(addBasketService(obj));
      }
    }
  };

  // console.log(typesService, "typesService");

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
                  </div>
                  <p>{i?.descr}</p>
                </div>
                <button className="cards__basket" onClick={() => addBasket(i)}>
                  В корзину
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoiceService;
