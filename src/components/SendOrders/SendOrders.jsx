import React from 'react';
import Modals from '../Modals/Modals';
import InputMask from 'react-input-mask';
import './SendOrders.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeDataUser } from '../../store/reducers/inputSlice';
import like from '../../assets/icons/goodSend.svg';
import { addSumTimes } from '../../helpers/addSumTimes';

const SendOrders = ({ lookSend, setLookSend }) => {
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state.inputSlice);
  const { basketUser } = useSelector((state) => state.saveDataSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch(changeDataUser({ ...dataUser, [name]: value }));
  };
  const sendNum = (e) => {
    e.preventDefault();
    const data = {
      fio: dataUser.name,
      phone: dataUser.number,
      date_from: basketUser?.master?.[0]?.time?.time1,
      date_to: addSumTimes(
        basketUser?.master?.[0]?.time?.time1,
        basketUser?.service?.[0]?.timeBusy
      ),
      code_department: '', /// ????
      code_doctor: basketUser?.master?.[0]?.codeid,
      code_patient: '', //// ????
      guid: '', //// ????
      comment: dataUser.more_info,
    };
    // const phoneNumberPattern = /^\+\d{3}\(\d{3}\)\d{2}-\d{2}-\d{2}$/;
    // if (phoneNumberPattern.test(dataUser?.numberPhone)) {
    //   dispatch(sendNumAuth(dataUser));
    //   setStateSendNum(2);
    //   setTime("03:00");
    // } else {
    //   dispatch(
    //     chnageAlertText({
    //       text: "Введите правильно номер телефона!",
    //       backColor: "#ffc12e",
    //       state: true,
    //     })
    //   );
    // }
    // setLookSend(false);
    // console.log(basketUser);
    // console.log(
    //   addSumTimes(
    //     basketUser?.master?.[0]?.time?.time1,
    //     basketUser?.service?.[0]?.timeBusy
    //   )
    // );
    console.log(data, 'data');
  };

  console.log(dataUser, 'dataUser');

  return (
    <div className="sendOrders">
      <Modals openModal={lookSend} setOpenModal={() => setLookSend()}>
        <form onSubmit={sendNum}>
          <h4>Введите ваши данные</h4>
          <InputMask
            mask="+999(999)99-99-99"
            placeholder="+996(___)__-__-__"
            name="number"
            onChange={changeInput}
            required
            value={dataUser?.number}
          />
          <input
            type="text"
            name="name"
            placeholder="Ваше ФИО"
            onChange={changeInput}
            value={dataUser.name}
            required
          />
          <textarea
            name="more_info"
            placeholder="Комментарий к записи"
            value={dataUser.more_info}
            onChange={changeInput}
          ></textarea>
          <div
            className="warn"
            onClick={() =>
              dispatch(changeDataUser({ ...dataUser, warn: !dataUser?.warn }))
            }
          >
            <div className="checkbox">
              {dataUser?.warn && <img src={like} alt="ДА" />}
            </div>
            <label htmlFor="warn">
              Предупредить меня за 2 часа до моего приезда
            </label>
          </div>
          <button className="sendData" type="submit">
            Отправить
          </button>
        </form>
      </Modals>
    </div>
  );
};

export default SendOrders;

// const sendNum = (e) => {
//     e.preventDefault();
//     const phoneNumberPattern = /^\+\d{3}\(\d{3}\)\d{2}-\d{2}-\d{2}$/;
//     if (phoneNumberPattern.test(dataUser?.numberPhone)) {
//       dispatch(sendNumAuth(dataUser));
//       setStateSendNum(2);
//       setTime("03:00");
//     } else {
//       dispatch(
//         chnageAlertText({
//           text: "Введите правильно номер телефона!",
//           backColor: "#ffc12e",
//           state: true,
//         })
//       );
//     }
//   };
