import React from "react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

///// scss
import "./SendOrders.scss";

///// imgs
import like from "../../assets/icons/goodSend.svg";

/////// fns
import { changeDataUser } from "../../store/reducers/inputSlice";
import { createZakaz } from "../../store/reducers/requestSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";

////// helpers
import { transformNumber } from "../../helpers/transformNumber";
import { addMinutesToTime, transformDate } from "../../helpers/transformDate";

const SendOrders = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const { date, time } = basketUser?.master?.[0];

      const allMinutes = basketUser?.service?.reduce((acc, obj) => {
        const timeBusy =
          obj?.timeBusy && !isNaN(obj?.timeBusy) && obj?.timeBusy > 0
            ? obj?.timeBusy
            : 15;
        return acc + timeBusy;
      }, 0);

      const date_from = `${date}${" "}${transformDate(time)}:00`;
      const date_to = `${date}${" "}${addMinutesToTime(
        transformDate(time),
        allMinutes
      )}:00`;

      const data = {
        fio: dataUser?.name,
        phone: transformNumber(dataUser?.number),
        date_from,
        date_to,
        code_department: basketUser?.service?.[0]?.code_department,
        code_doctor: basketUser?.master?.[0]?.code_doctor,
        arr: [...basketUser?.service],
        comment: dataUser?.more_info,
      };

      dispatch(createZakaz({ data, navigate }));
    } else {
      dispatch(
        changeAlertText({
          text: "Введите правильный номер телефона",
          backColor: "#008899",
          state: true,
        })
      );
    }
  };

  return (
    <div className="sendOrders">
      <div className="containerMini">
        <form onSubmit={sendNum}>
          <h4>Введите данные</h4>
          <InputMask
            mask="+999(999)99-99-99"
            placeholder="+996(___)______"
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
