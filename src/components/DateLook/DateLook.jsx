import React, { useState } from 'react';
import Modals from '../Modals/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { listDate } from '../../helpers/dataArr';
import './DateLook.scss';
import { addBasketUser } from '../../store/reducers/saveDataSlice';
import {
  changeAlertText,
  changeListBtns,
  changeTypeLookSevices,
} from '../../store/reducers/stateSlice';
import { useNavigate } from 'react-router-dom';

const DateLook = ({ lookDate, setLookdate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idForDate, listBtns } = useSelector((state) => state.stateSlice);
  const { basketUser } = useSelector((state) => state.saveDataSlice);
  //   console.log(idForDate, 'idForDate');
  //   console.log(basketUser?.length, 'basketUser');

  const clickAddDate = (id, codeUser, codeid) => {
    if (+basketUser?.length === 3) {
      dispatch(
        changeAlertText({
          text: 'Вы за раз можете выбрать только 3 окна!',
          backColor: '#ab89bce0',
          state: true,
        })
      );
      //   setLookdate(false);
      navigate('/basket');
    } else {
      dispatch(
        addBasketUser({
          id,
          codeUser,
          codeid,
        })
      );
    }
  };

  const clickService = () => {
    if (+basketUser?.length === 0) {
      dispatch(
        changeAlertText({
          text: 'Выберите время для записи!',
          backColor: '#ab89bce0',
          state: true,
        })
      );
    } else {
      dispatch(changeTypeLookSevices(3));
      setLookdate(false);
      dispatch(
        changeListBtns([
          { id: 1, title: 'Выбрать специалиста', bool: false },
          { id: 2, title: 'Выбрать дату и время', bool: false },
          { id: 3, title: 'Выбрать услуги', bool: true },
        ])
      );
    }
  };

  return (
    <div className="dateLook">
      <Modals openModal={lookDate} setOpenModal={() => setLookdate()}>
        <div className="container">
          <div className="dateLook__inner">
            {listDate?.map((dat) => (
              <div key={dat?.codeid} className="dateLook__every">
                <h5>{dat?.date}</h5>
                <div className="dateLook__every__times">
                  {dat?.timeList?.map((i) => (
                    <button
                      key={i?.id}
                      onClick={() =>
                        clickAddDate(i?.id, dat?.codeUser, dat?.codeid)
                      }
                    >
                      {i?.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="choiceService" onClick={clickService}>
            Выбрать услугу
          </button>
        </div>
      </Modals>
    </div>
  );
};

export default DateLook;
