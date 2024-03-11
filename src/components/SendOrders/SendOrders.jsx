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
      const data = {
        fio: dataUser.name,
        phone: transformNumber(dataUser.number),
        date_from: basketUser?.master?.[0]?.date,
        // date_to: addSumTimes(
        //   basketUser?.master?.[0]?.date,
        //   (+basketUser?.service?.[0]?.timeBusy || 0) +
        //     (+basketUser?.service?.[1]?.timeBusy || 0) +
        //     (+basketUser?.service?.[2]?.timeBusy || 0)
        // ),
        code_department: basketUser?.service?.[0]?.code_department,
        code_doctor: basketUser?.master?.[0]?.codeid,
        arr: [...basketUser?.service],
        comment: dataUser?.more_info,
      };
      dispatch(createZakaz(data));

      console.log(dataUser, "dataUser");
      console.log(basketUser, "basketUser");
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

  console.log(dataUser, "dataUser");
  console.log(basketUser, "basketUser");

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
