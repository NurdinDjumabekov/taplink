import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChoiceService.scss";
import {
  addBasketServiceCopy,
  changeBasketUser,
  changeBasketUserCopy,
  changeTypeLookSevices,
  deleteBasketServiceCopy,
} from "../../store/reducers/saveDataSlice";
import {
  changeAlertText,
  changeListBtns,
} from "../../store/reducers/stateSlice";
import delWhite from "../../assets/icons/delBtnWhite.svg";
import SelectTypeService from "../../components/SelectTypeService/SelectTypeService";
import { useNavigate } from "react-router-dom";
import { takeListService } from "../../store/reducers/requestSlice";

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
          { id: 1, title: "Выбрать специалиста", bool: true },
          { id: 2, title: "Выбрать услуги", bool: false },
          { id: 3, title: "Выбрать свою дату и время", bool: false },
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

  React.useEffect(() => {
    dispatch(takeListService({ id: 0, text: "" }));
  }, []);

  console.log(listService, "listService");

  return (
    <div className="serviceChoice">
      <div className="containerMini">
        <div className="serviceChoice__inner">
          {listService?.length === 0 ? (
            <p className="noneDataa">Данные отсутствуют</p>
          ) : (
            <>
              {listService?.map((i) => (
                <div className="cards" key={i?.codeid}>
                  <div className="cards__texts">
                    <h5>
                      {i?.name} {i?.timeBusy && <b>{i?.timeBusy} мин.</b>}
                    </h5>
                    <span>{i?.sum} сом</span>
                  </div>
                  <button className="actionsBtn" onClick={() => addBasket(i)}>
                    +
                  </button>
                  {/* {basketUserCopy?.service?.some(
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
                    )} */}
                </div>
              ))}
            </>
          )}
        </div>
        {basketUserCopy?.service?.length !== 0 && (
          <button className="zakaz" onClick={addBasketZakaz}>
            Перейти к заказу
          </button>
        )}
      </div>
    </div>
  );
};

export default ChoiceService;
