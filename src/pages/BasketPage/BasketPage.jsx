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
import {
  addCertificate,
  deleteBasketService,
  deleteCertificate,
  changeTypeLookSevices,
} from "../../store/reducers/saveDataSlice";
import { changeListBtns } from "../../store/reducers/stateSlice";
import {
  changeAlertText,
  changeLookDate,
  changeSummOrders,
} from "../../store/reducers/stateSlice";
import { NavLink, useNavigate } from "react-router-dom";
import SendOrders from "../../components/SendOrders/SendOrders";
import { createZakaz } from "../../store/reducers/requestSlice";
import imgAlt from "../../assets/image/masterAlt.jpg";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lookSend, setLookSend] = useState(false);

  const { basketUser, temporaryIdFilial } = useSelector(
    (state) => state.saveDataSlice
  );
  const { summOrders } = useSelector((state) => state.stateSlice);

  // React.useEffect(() => {
  //   const totalSum = basketUser?.service?.reduce((acc, item) => {
  //     return +acc + (+item?.sum || 0); // Убедимся, что item?.sum определено
  //   }, 0);

  //   dispatch(changeSummOrders(totalSum));

  //   window.scrollTo(0, 0);
  // }, [basketUser?.service]);

  // React.useEffect(() => {
  //   const totalSum = basketUser?.service?.reduce((acc, item) => {
  //     return +acc + (+item?.sum || 0); // Убедимся, что item?.sum определено
  //   }, 0);

  //   dispatch(changeSummOrders(totalSum));

  //   window.scrollTo(0, 0);
  // }, [basketUser?.service]);

  const editMaster = () => {
    dispatch(changeTypeLookSevices(1));
    navigate(`/det/${temporaryIdFilial}`);
  };

  const sendData = () => {
    if (
      (basketUser?.master?.length !== 0 && basketUser?.service?.length !== 0) ||
      basketUser?.certificate?.length !== 0
    ) {
      setLookSend(true);
    } else {
      dispatch(
        changeAlertText({
          text: "Ваша корзина не полная",
          backColor: "#ab89bce0",
          state: true,
        })
      );
    }
  };

  const clearBasket = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  };

  // console.log(basketUser, 'basketUser');

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
                        <img
                          src={
                            basketUser?.master?.[0]?.logo
                              ? basketUser?.master?.[0]?.logo
                              : imgAlt
                          }
                          alt="logo"
                        />
                      </div>
                      <div>
                        <div className="editAndMain">
                          <h4>{basketUser?.master?.[0]?.fio}</h4>
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
                            {/* <span>
                              {basketUser?.master
                                ?.map(
                                  (i) => `Время: ${i?.obj?.time} (${i?.date})`
                                )
                                .join(', ')}
                            </span> */}
                          </div>
                          <button className="edit" onClick={editMaster}>
                            <img src={edit} alt="edit" />
                            <p>Редактировать</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ///// для мобилки */}
                  <div className="timesMobile">
                    <div className="editAndMain timeMaster">
                      {/* <span>
                        {basketUser?.master
                          ?.map((i) => `Время: ${i?.obj?.time} (${i?.date})`)
                          .join(', ')}
                      </span> */}
                    </div>
                  </div>
                  <button className="edit timeEditMObile" onClick={editMaster}>
                    <img src={edit} alt="edit" />
                    <p className="timeEdit">Редактировать</p>
                  </button>
                </>
              )}
              <div className="services">
                <div>
                  {/* {basketUser?.master?.length !== 0 &&
                    basketUser?.service?.length !== 0 &&
                    basketUser?.certificate?.length !== 0 && ( */}
                  <div className="mainInfo">
                    <h5>Ваша корзина</h5>
                    <div className="result">
                      <button onClick={sendData}>Записаться</button>
                      {/* <button onClick={() => dispatch(createZakaz())}>
                        Записаться
                      </button> */}
                      <button onClick={clearBasket}>
                        Очистить всю корзину
                      </button>
                    </div>
                  </div>
                  {/* )} */}
                </div>
                {basketUser?.service?.length === 0 &&
                basketUser?.certificate?.length === 0 ? (
                  <div className="emptyBasket">
                    <div>
                      <p>Ваша корзина пустая </p>
                      <NavLink to={"/"}> Перейти на главную страницу</NavLink>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="services__inner">
                      {basketUser?.service?.map((i) => (
                        <>
                          <div className="cards" key={i?.codeid}>
                            <div className="cards__img">
                              <img src={i?.image} alt="logo" />
                            </div>
                            <h6>{i?.name}</h6>
                            <div className="cards__texts">
                              <p>
                                Время: <span>{convertTime(i?.timeBusy)}</span>
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
                    </div>
                    <div className="certificates">
                      {basketUser?.certificate?.length !== 0 && (
                        <h5>Сертификаты</h5>
                      )}
                      <div className="certificates__inner">
                        {basketUser?.certificate?.map((cer) => (
                          <>
                            <div
                              key={cer?.codeid}
                              className="certificate__inner__card"
                            >
                              <div className="inner">
                                <div className="inner__img">
                                  <img
                                    src="https://www.graffiks.ru/images/images/luckclub/2021/01/bqhemlk48ne.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="inner__info">
                                  <h3>Сертификат на {cer?.sum} сом</h3>
                                  <span>{cer?.count}</span>
                                </div>
                                <div className="inner__info">
                                  <button
                                    onClick={() =>
                                      dispatch(deleteCertificate(cer))
                                    }
                                  >
                                    Убрать
                                  </button>
                                  <button
                                    onClick={() =>
                                      dispatch(addCertificate(cer))
                                    }
                                  >
                                    Добавить
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                )}
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
