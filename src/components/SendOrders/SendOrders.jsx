import React from "react";
import Modals from "../Modals/Modals";
import InputMask from "react-input-mask";
import "./SendOrders.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeDataUser } from "../../store/reducers/inputSlice";
import like from "../../assets/icons/goodSend.svg";
import { addSumTimes } from "../../helpers/addSumTimes";
import { createZakaz } from "../../store/reducers/requestSlice";
import { transformNumber } from "../../helpers/transformNumber";
import { changeAlertText } from "../../store/reducers/stateSlice";

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
    if (basketUser?.master?.length !== 0 && basketUser?.service?.length !== 0) {
      checkData();
    } else {
      dispatch(
        changeAlertText({
          text: "Ваша корзина не полная",
          backColor: "#008899",
          state: true,
        })
      );
    }
  };

  const checkData = () => {
    const isValidPhoneNumber = /^\996\d{9}$/g.test(
      transformNumber(dataUser?.number)
    );
    if (isValidPhoneNumber) {
      const formattedDateFrom = `${basketUser?.master?.[0]?.date}${" "}${
        basketUser?.master?.[0]?.time
      }:00`;

      const totalMinutes =
        timeToMinutes(basketUser?.master?.[0]?.time) + /// время 12:00
        parseInt(basketUser?.service?.[0]?.timeBusy || "0") + // тут 60 (в минутах)
        parseInt(basketUser?.service?.[1]?.timeBusy || "0") + // тут 60 (в минутах)
        parseInt(basketUser?.service?.[2]?.timeBusy || "0"); // тут 60 (в минутах)
      // console.log(minutesToTime(totalMinutes));

      const formattedDateTo = `${
        basketUser?.master?.[0]?.date
      }${" "}${minutesToTime(totalMinutes)}:00`;

      const data = {
        fio: dataUser.name,
        phone: transformNumber(dataUser.number),
        date_from: formattedDateFrom,
        date_to: formattedDateTo,
        code_department: basketUser?.service?.[0]?.code_department,
        code_doctor: basketUser?.master?.[0]?.codeid,
        arr: [...basketUser?.service],
        comment: dataUser?.more_info,
      };
      dispatch(createZakaz(data));

      // console.log(dataUser, "dataUser");
      // console.log(basketUser, "basketUser");
      // console.log(data, "data");
    } else {
      dispatch(
        changeAlertText({
          text: "Введите правильный номер телефона",
          backColor: "#ab89bce0",
          state: true,
        })
      );
    }
  };

  // console.log(dataUser, "dataUser");
  // console.log(basketUser, "basketUser");
  /// addSumTimes
  // delete
  return (
    <div className="sendOrders">
      <div className="containerMini">
        <form onSubmit={sendNum}>
          <h4>Введите данные</h4>
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
            placeholder="Введите имя"
            onChange={changeInput}
            value={dataUser.name}
            required
          />
          <textarea
            name="more_info"
            placeholder="Комментарий к записи"
            value={dataUser.more_info}
            onChange={changeInput}
            required
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
      </div>
    </div>
  );
};

export default SendOrders;

// Функция для конвертации времени в минуты
const timeToMinutes = (time) => {
  if (typeof time !== "string") {
    time = time.toString(); // Если time не строка, преобразуем его в строку
  }
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const minutesToTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};
