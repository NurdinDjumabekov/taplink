import React, { useState } from "react";
import Modals from "../Modals/Modals";
import { useDispatch, useSelector } from "react-redux";
import { listDate } from "../../helpers/dataArr";
import "./DateLook.scss";
import {
  addBasketMaster,
  deleteTimeMaster,
} from "../../store/reducers/saveDataSlice";
import {
  changeAlertText,
  changeListBtns,
  changeLookDate,
  changeTypeLookSevices,
} from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";

const DateLook = ({ lookDate, setLookdate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idForDate, listBtns } = useSelector((state) => state.stateSlice);
  const { basketUser } = useSelector((state) => state.saveDataSlice);
  //   console.log(idForDate, 'idForDate');
  //   console.log(basketUser?.length, 'basketUser');

  const clickAddDate = (obj) => {
    if (+basketUser?.master?.length === 4) {
      dispatch(
        changeAlertText({
          text: "Вы за раз можете выбрать только 3 окна!",
          backColor: "#ab89bce0",
          state: true,
        })
      );
      //   setLookdate(false);
      // navigate("/basket");
    } else {
      dispatch(addBasketMaster(obj));
    }
  };

  const clickService = () => {
    if (+basketUser?.master?.length === 0) {
      dispatch(
        changeAlertText({
          text: "Выберите время для записи!",
          backColor: "#ab89bce0",
          state: true,
        })
      );
    } else {
      dispatch(changeTypeLookSevices(1));
      setLookdate(false);
      dispatch(
        changeListBtns([
          { id: 1, title: "Выбрать услуги", bool: true },
          { id: 2, title: "Выбрать специалиста", bool: false },
          { id: 3, title: "Выбрать дату и время", bool: false },
        ])
      );
    }
  };

  const navBasket = () => {
    navigate("/basket");
    dispatch(changeLookDate(false));
  };

  // console.log(listDate, "listDate");

  return (
    <div className="dateLook">
      <Modals openModal={lookDate} setOpenModal={() => setLookdate()}>
        <div className="container">
          <h3>Свободные окна </h3>
          <div className="dateLook__inner">
            {listDate?.map((dat) => (
              <div key={dat?.codeid} className="dateLook__every">
                <h5>{dat?.date}</h5>
                <div className="dateLook__every__times">
                  {dat?.timeList?.map((i) => (
                    <button
                      key={i?.id}
                      className={
                        basketUser?.master?.some(
                          (item) => item?.obj?.id === i?.id
                        )
                          ? "busy"
                          : ""
                      }
                      onClick={() => {
                        const isAlreadySelected = basketUser?.master?.some(
                          (item) => item?.obj?.id === i?.id
                        );
                        if (isAlreadySelected) {
                          dispatch(deleteTimeMaster(i?.id));
                        } else {
                          clickAddDate({
                            obj: i,
                            codeid: dat?.codeid,
                            date: dat?.date,
                            codeUser: dat?.codeUser,
                            nameUser: dat?.nameUser,
                            rating: dat?.rating,
                            countSchel: dat?.countSchel,
                            logo: dat?.logo,
                          });
                        }
                      }}
                    >
                      {i?.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="dateLook__actions">
            <button className="choiceService" onClick={clickService}>
              Выбрать услугу
            </button>
            <button className="choiceService" onClick={navBasket}>
              Посмотреть корзину
            </button>
          </div>
        </div>
      </Modals>
    </div>
  );
};

export default DateLook;
