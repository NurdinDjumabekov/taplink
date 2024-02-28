import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChoiceService.scss";
import {
  addBasketServiceCopy,
  changeBasketUser,
  changeBasketUserCopy,
  changeListBtns,
  changeTypeLookSevices,
  deleteBasketServiceCopy,
} from "../../store/reducers/saveDataSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";
import delWhite from "../../assets/icons/delBtnWhite.svg";
import SelectTypeService from "../../components/SelectTypeService/SelectTypeService";
import { useNavigate } from "react-router-dom";

const ChoiceService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basketUserCopy, basketUser } = useSelector(
    (state) => state.saveDataSlice
  );
  const { listService } = useSelector((state) => state.requestSlice);

  const addBasket = (obj) => {
    const isServiceInBasket = basketUserCopy?.service?.some(
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
      if (basketUserCopy?.service?.length === 3) {
        dispatch(
          changeAlertText({
            text: "Вы за раз можете выбрать не больше 3х услуг",
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
        dispatch(addBasketServiceCopy(obj));
      }
    }
  };

  const addBasketZakaz = () => {
    if (Object.keys(basketUserCopy?.master).length === 0) {
      dispatch(changeTypeLookSevices(1)); //// Выбрать мастера
      dispatch(
        changeListBtns([
          { id: 1, title: "Выбрать специалиста и дату", bool: true },
          { id: 2, title: "Выбрать услуги", bool: false },
          // { id: 3, title: "Выбрать свою дату и время", bool: false },
        ])
      );
      // navigate(`/det/${everyMaster?.codeid_addres}`);
    } else {
      dispatch(
        changeBasketUser({
          ...basketUser,
          master: [basketUserCopy?.master],
          service: basketUserCopy?.service,
        })
      );
      navigate("/basket");
      dispatch(changeBasketUserCopy({ master: {}, service: [] }));
    }
  };

  return (
    <div>
      <div className="serviceChoice">
        <SelectTypeService />
        <div className="serviceChoice__inner">
          {listService?.length === 0 ? (
            <p className="noneDataa">Данные отсутствуют</p>
          ) : (
            <>
              {listService?.map((i) => (
                <div className="cards" key={i?.codeid}>
                  <div className="cards__img">
                    <img src={i?.image} alt="logo" />
                  </div>
                  <div className="cards__texts">
                    <h5>{i?.name}</h5>
                    <div>
                      <span>
                        Цена: <b>{i?.sum} сом</b>
                      </span>
                    </div>
                    {/* <p>{i?.descr}</p> */}
                  </div>
                  <div className="actionsBtn">
                    <button
                      className="actionsBtn__basket"
                      onClick={() => addBasket(i)}
                    >
                      Добавить
                    </button>
                    {basketUserCopy?.service?.some(
                      (item) => item?.codeid === i?.codeid
                    ) ? (
                      <div>
                        <button
                          className="actionsBtn__check moreDel"
                          onClick={() =>
                            dispatch(deleteBasketServiceCopy(i?.codeid))
                          }
                        >
                          <img src={delWhite} alt="like" />
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {basketUserCopy?.service?.length !== 0 && (
          <button className="zakaz" onClick={addBasketZakaz}>
            Перейти к заказуe
          </button>
        )}
      </div>
    </div>
  );
};

export default ChoiceService;
