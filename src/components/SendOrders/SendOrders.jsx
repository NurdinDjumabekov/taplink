import React from "react";
import Modals from "../Modals/Modals";
import InputMask from "react-input-mask";
import "./SendOrders.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeDataUser } from "../../store/reducers/inputSlice";
import like from "../../assets/icons/goodSend.svg";

const SendOrders = ({ lookSend, setLookSend }) => {
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state.inputSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    console.log(e);

    dispatch(changeDataUser({ ...dataUser, [name]: value }));
  };
  const sendNum = (e) => {
    e.preventDefault();
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
    setLookSend(false);
  };

  console.log(dataUser, "dataUser");

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
            Отправить код
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
