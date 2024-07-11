////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

////// scss
import "./ChoiceService.scss";

////// store
import { addBasketServiceCopy } from "../../store/reducers/saveDataSlice";
import { changeBasketUser } from "../../store/reducers/saveDataSlice";
import { deleteBasketServiceCopy } from "../../store/reducers/saveDataSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { takeListService } from "../../store/reducers/requestSlice";

/////// helpers
import { convertTime } from "../../helpers/convertTime";

const ChoiceService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id_master, filial } = useParams();

  const { basketUserCopy, basketUser } = useSelector(
    (state) => state.saveDataSlice
  );

  const { listService } = useSelector((state) => state.requestSlice);

  const addBasket = (obj) => {
    const isServiceInBasket = basketUserCopy?.service?.some(
      /// проверка есть ли id, если есть то не добавлять
      (i) => i?.codeid == obj?.codeid
    );

    if (isServiceInBasket) {
      dispatch(deleteBasketServiceCopy(obj?.codeid));
    } else {
      if (basketUserCopy?.service?.length === 3) {
        const text = "Вы за раз можете выбрать не больше 3х услуг";
        dispatch(changeAlertText({ text, backColor: "#008899", state: true }));
      } else {
        dispatch(addBasketServiceCopy(obj));
      }
    }
  };

  const addBasketZakaz = () => {
    if (basketUserCopy?.master?.date && basketUserCopy?.service?.length !== 0) {
      dispatch(
        changeBasketUser({
          ...basketUser,
          master: [basketUserCopy?.master] || basketUser?.master,
          service: basketUserCopy?.service || basketUser?.service,
        })
      );
      navigate(`/basket/${filial}`);
    }
  };

  React.useEffect(() => {
    dispatch(takeListService(id_master));
  }, []);

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
                      {i?.name}{" "}
                      {i?.timeBusy && <b>{convertTime(i?.timeBusy)}</b>}
                    </h5>
                    <span>{i?.sum} сом</span>
                  </div>
                  <button
                    className={
                      basketUserCopy?.service?.some(
                        (item) => item?.codeid === i?.codeid
                      )
                        ? "actionsBtn haveService"
                        : "actionsBtn"
                    }
                    onClick={() => addBasket(i)}
                  >
                    +
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {basketUserCopy?.service?.length !== 0 && (
          <button className="zakaz" onClick={addBasketZakaz}>
            Записаться
          </button>
        )}
      </div>
    </div>
  );
};

export default ChoiceService;
