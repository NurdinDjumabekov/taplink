import React, { useState } from "react";
import "./BasketPage.scss";
import "./BasketPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { renderStars } from "../../helpers/renderStars";
import del from "../../assets/icons/delBtn.svg";
import more from "../../assets/icons/more.svg";
import star from "../../assets/icons/star.svg";
import edit from "../../assets/icons/edit.svg";
import { convertTime } from "../../helpers/convertTime";
import { deleteBasketService } from "../../store/reducers/saveDataSlice";
import {
  changeListBtns,
  changeLookDate,
  changeSummOrders,
  changeTypeLookSevices,
} from "../../store/reducers/stateSlice";
import { NavLink, useNavigate } from "react-router-dom";
import SendOrders from "../../components/SendOrders/SendOrders";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lookSend, setLookSend] = useState(false);

  const { basketUser } = useSelector((state) => state.saveDataSlice);
  const { summOrders } = useSelector((state) => state.stateSlice);

  React.useEffect(() => {
    const totalSum = basketUser?.service?.reduce((acc, item) => {
      return +acc + (+item?.sum || 0); // Убедимся, что item?.sum определено
    }, 0);

    dispatch(changeSummOrders(totalSum));

    window.scrollTo(0, 0);
  }, [basketUser?.service]);

  // console.log(basketUser, "as5das5das4153");

  const editMaster = () => {
    dispatch(changeTypeLookSevices(2));
    navigate(`/det/${basketUser?.master?.[0]?.codeid}`);
    dispatch(
      changeListBtns([
        { id: 1, title: "Выбрать услуги", bool: false },
        { id: 2, title: "Выбрать специалиста и дату", bool: true },
        { id: 3, title: "Выбрать дату и время", bool: false },
      ])
    );
  };

  const editDateMaster = () => {
    dispatch(changeLookDate(true));
  };

  const clearBasket = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="basketPage">
        <div className="container">
          <div className="basketPage__inner">
            <div className="basketPage__inner__master">
              {basketUser?.master?.length === 0 ? (
                <>
                  <div className="editAndMain">
                    <h5>Данные мастера отсутствуют</h5>
                    <button className="edit" onClick={editMaster}>
                      <img src={edit} alt="edit" />
                      <p>
                        Выбрать {basketUser?.master?.length !== 0 && "другого"}{" "}
                        мастера
                      </p>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="basketPage__master">
                    <div className="basketPage__inner__master__data">
                      <div>
                        <img src={basketUser?.master?.[0]?.logo} alt="logo" />
                      </div>
                      <div>
                        <div className="editAndMain">
                          <h4>{basketUser?.master?.[0]?.nameUser}</h4>
                          <button className="edit" onClick={editMaster}>
                            <img src={edit} alt="edit" />
                            <p>Выбрать другого мастера</p>
                          </button>
                        </div>
                        <div className="rating">
                          <div className="star">
                            {renderStars(basketUser?.master?.[0]?.rating, star)}
                          </div>
                          <span>({basketUser?.master?.[0]?.countSchel})</span>
                        </div>
                        <div className="times">
                          <div
                            className="editAndMain timeMaster"
                            style={{ gap: "0px" }}
                          >
                            <span>
                              {basketUser?.master
                                ?.map(
                                  (i) => `Время: ${i?.obj?.time} (${i?.date})`
                                )
                                .join(", ")}
                            </span>
                          </div>
                          <button className="edit" onClick={editDateMaster}>
                            <img src={edit} alt="edit" />
                            <p>Выбрать другую дату</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ///// для мобилки */}
                  <div className="timesMobile">
                    <div className="editAndMain timeMaster">
                      <span>
                        {basketUser?.master
                          ?.map((i) => `Время: ${i?.obj?.time} (${i?.date})`)
                          .join(", ")}
                      </span>
                    </div>
                  </div>
                  <button
                    className="edit timeEditMObile"
                    onClick={editDateMaster}
                  >
                    <img src={edit} alt="edit" />
                    <p className="timeEdit">Выбрать другое время</p>
                  </button>
                </>
              )}
              <div className="services">
                <div>
                  {basketUser?.master?.length !== 0 &&
                    basketUser?.service?.length !== 0 && (
                      <div className="mainInfo">
                        <h5>Ваша корзина</h5>
                        {+summOrders !== 0 && (
                          <div className="result">
                            <button onClick={() => setLookSend(true)}>
                              Записаться
                            </button>
                            <button onClick={clearBasket}>
                              Очистить всю корзину
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                </div>
                <div className="services__inner">
                  {basketUser?.service?.length === 0 ? (
                    <div className="emptyBasket">
                      <div>
                        <p>Ваша корзина пустая </p>
                        <NavLink to={"/zap"}>
                          {" "}
                          Перейти на главную страницу
                        </NavLink>
                      </div>
                    </div>
                  ) : (
                    <>
                      {basketUser?.service?.map((i) => (
                        <>
                          <div className="cards" key={i?.codeid}>
                            <div className="cards__img">
                              <img src={i?.logo} alt="logo" />
                            </div>
                            <h6>{i?.title}</h6>
                            <div className="cards__texts">
                              <p>
                                Время: <span>{convertTime(i?.time)}</span>
                              </p>
                              <p>
                                Цена: <span>{i?.sum} сом</span>
                              </p>
                            </div>
                            <div className="cards__btns">
                              <button className="delete">
                                <img src={more} alt="delete" />
                              </button>
                              <button
                                className="delete"
                                onClick={() =>
                                  dispatch(deleteBasketService(i?.codeid))
                                }
                              >
                                <img src={del} alt="delete" />
                              </button>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {+summOrders !== 0 && (
        <div className="result">
          <p>
            Итоговая сумма : <span>{summOrders} сом</span>
          </p>
        </div>
      )} */}
      <SendOrders lookSend={lookSend} setLookSend={setLookSend} />
    </>
  );
};

export default BasketPage;
