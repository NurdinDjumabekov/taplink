import React, { useState } from 'react';
import Modals from '../Modals/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { listDate } from '../../helpers/dataArr';
import star from '../../assets/icons/star.svg';

import './DateLook.scss';
import {
  addBasketMaster,
  deleteTimeMaster,
} from '../../store/reducers/saveDataSlice';
import {
  changeAlertText,
  changeListBtns,
  changeLookDate,
  changeTypeLookSevices,
} from '../../store/reducers/stateSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { takeEveryMaster } from '../../store/reducers/requestSlice';
import { renderStars } from '../../helpers/renderStars';

const DateLook = ({ lookDate, setLookdate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { basketUser } = useSelector((state) => state.saveDataSlice);
  const { everyMaster } = useSelector((state) => state.requestSlice);
  console.log(everyMaster, 'everyMaster');

  const clickAddDate = (obj) => {
    // if (+basketUser?.master?.length === 1) {
    //   dispatch(
    //     changeAlertText({
    //       text: "Теперь выберите услугу",
    //       backColor: "#ab89bce0",
    //       state: true,
    //     })
    //   );
    //   //   setLookdate(false);
    //   // navigate("/basket");
    // } else {
    // }
    dispatch(addBasketMaster(obj));
    navigate(`/det/${listDate?.[0]?.codeid_addres}`);
    dispatch(
      changeListBtns([
        { id: 1, title: 'Выбрать специалиста и дату', bool: false },
        { id: 2, title: 'Выбрать услуги', bool: true },
        { id: 3, title: 'Выбрать свою дату и время', bool: false },
      ])
    );
    dispatch(changeTypeLookSevices(2)); //// Выбрать услуги
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(takeEveryMaster(id));
  }, []);

  const clickService = () => {
    if (+basketUser?.master?.length === 0) {
      dispatch(
        changeAlertText({
          text: 'Выберите время для записи!',
          backColor: '#ab89bce0',
          state: true,
        })
      );
    } else {
      dispatch(changeTypeLookSevices(2)); //// Выбрать услуги
      navigate(`/det/${listDate?.[0]?.codeid_addres}`);
      dispatch(
        changeListBtns([
          { id: 1, title: 'Выбрать специалиста и дату', bool: false },
          { id: 2, title: 'Выбрать услуги', bool: true },
          { id: 3, title: 'Выбрать свою дату и время', bool: false },
        ])
      );
    }
  };

  const navBasket = () => {
    navigate('/basket');
    dispatch(changeLookDate(false));
  };

  return (
    <div className="dateLook">
      <div className="container">
        <div className="dateLook__master">
          <div className="mainComm">
            <div className="logo">
              <img src={everyMaster?.logo} alt="logo" />
            </div>
            <div className="mainText">
              {/* <p className="week">
                  {everyMaster?.schedule?.map((con, ind) => (
                    <span key={ind}>
                      {con}
                      {ind !== listComments.schedule.length - 1 && ", "}
                    </span>
                  ))}
                </p> */}
              <h5>{everyMaster.fio}</h5>
              <div className="rating">
                <div className="star">
                  {renderStars(everyMaster?.rating, star)}
                </div>
                <span>({everyMaster?.countSchel})</span>
              </div>
            </div>
          </div>
          {/* <h3>Свободные окна </h3> */}
        </div>
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
                        ? 'busy'
                        : ''
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
    </div>
  );
};

export default DateLook;
