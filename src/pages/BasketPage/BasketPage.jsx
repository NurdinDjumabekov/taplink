import React, { useState } from "react";
import "./BasketPage.scss";
import "./BasketPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { renderStars } from "../../helpers/renderStars";
import dateImg from "../../assets/icons/choiceDate.svg";
import star from "../../assets/icons/star.svg";
import edit from "../../assets/icons/edit.svg";
import { convertTime } from "../../helpers/convertTime";
import {
  deleteBasketService,
  changeTypeLookSevices,
} from "../../store/reducers/saveDataSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SendOrders from "../../components/SendOrders/SendOrders";
import { createZakaz } from "../../store/reducers/requestSlice";
import imgAlt from "../../assets/image/masterAlt.jpg";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { basketUser, temporaryIdFilial } = useSelector(
    (state) => state.saveDataSlice
  );
  const { summOrders } = useSelector((state) => state.stateSlice);

  const editMaster = () => {
    navigate(`/spec/${id}`);
  };

  const editServise = () => {
    navigate(`/service/${id}/${basketUser?.master?.[0]?.codeid || 0}`);
  };

  console.log(basketUser, "basketUser");

  return (
    <>
      <div className="basketPage">
        <div className="containerMini">
          <div className="basketPage__inner">
            <h5>Детали записи</h5>
            <div className="basketPage__inner__master">
              {basketUser?.master?.length === 0 ? (
                <div></div>
              ) : (
                <>
                  <div className="basketPage__master">
                    <div className="basketPage__inner__master__data">
                      <div className="mainLogoBasket">
                        <img
                          src={
                            basketUser?.master?.[0]?.logo
                              ? basketUser?.master?.[0]?.logo
                              : imgAlt
                          }
                          alt="logo"
                        />
                      </div>
                      <div className="ratingStar">
                        <div className="editAndMain">
                          <h4>{basketUser?.master?.[0]?.fio}</h4>
                        </div>
                        <div className="rating">
                          <div className="star">
                            {renderStars(basketUser?.master?.[0]?.rating, star)}
                          </div>
                          <span>
                            {basketUser?.master?.[0]?.countSchel} отзыва
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="editBtn" onClick={editMaster}>
                      <img src={edit} alt="delete" />
                    </button>
                  </div>
                  <div className="basketPage__master">
                    <div className="basketPage__inner__master__data">
                      <div className="mainLogoBasket">
                        <img src={dateImg} alt="dateImg" className="moreImg" />
                      </div>
                      <div className="ratingStar">
                        <div className="rating">
                          <span>
                            Время записи ({basketUser?.master?.[0]?.time})
                          </span>
                        </div>
                        <h4>{basketUser?.master?.[0]?.fio}</h4>
                      </div>
                    </div>
                    <button className="editBtn" onClick={editMaster}>
                      <img src={edit} alt="delete" />
                    </button>
                  </div>
                </>
              )}
              <div className="services">
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
                    <div className="maintitle">
                      <h5>Услуги</h5>
                      <button className="editBtn" onClick={editServise}>
                        <img src={edit} alt="edit" />
                      </button>
                    </div>
                    <div className="services__inner">
                      {basketUser?.service?.map((i) => (
                        <div className="cards" key={i?.codeid}>
                          <div className="cards__texts">
                            <h6>
                              {i?.name}
                              <span>{convertTime(i?.timeBusy)}</span>
                            </h6>
                            <p>{i?.sum} сом</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {basketUser?.master?.length !== 0 &&
        basketUser?.service?.length !== 0 && <SendOrders />}
    </>
  );
};

export default BasketPage;

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

////////////////////////////////////////////////

{
  /* <div className="certificates">
  {basketUser?.certificate?.length !== 0 && <h5>Сертификаты</h5>}
  <div className="certificates__inner">
    {basketUser?.certificate?.map((cer) => (
      <>
        <div key={cer?.codeid} className="certificate__inner__card">
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
              <button onClick={() => dispatch(deleteCertificate(cer))}>
                Убрать
              </button>
              <button onClick={() => dispatch(addCertificate(cer))}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      </>
    ))}
  </div>
</div>; */
}

// const clearBasket = () => {
//   navigate("/");
//   localStorage.clear();
//   window.location.reload();
// };
