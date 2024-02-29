import React from "react";
import "./ConfirmPage.scss";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { changeConfirm } from "../../store/reducers/inputSlice";
import { confirmZakazBD } from "../../store/reducers/requestSlice";
import { transformNumber } from "../../helpers/transformNumber";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";

const ConfirmPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { confirm } = useSelector((state) => state.inputSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch(changeConfirm({ ...confirm, [name]: value }));
  };

  const confirmZakaz = (e) => {
    e.preventDefault();
    const isValidPhoneNumber = /^\996\d{9}$/g.test(
      transformNumber(confirm?.number)
    );

    if (isValidPhoneNumber) {
      dispatch(confirmZakazBD(confirm?.number));
      dispatch(
        changeAlertText({
          text: "Мы отправили подтверждение на ваш номер WhatsApp",
          backColor: "#e484ba",
          state: true,
        })
      );
      dispatch(changeConfirm({ confirm: { number: "+996" } }));
      setTimeout(() => {
        navigate("/");
      }, 1000);
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

  return (
    <div className="cancellation confirm">
      <div className="container">
        <div className="cancellation__inner">
          <form onSubmit={confirmZakaz}>
            <a href="https://wa.me/996700754454" target="_blank">
              Написать нам в WhatsApp
            </a>
            <h4>
              Введите ваш номер, чтобы мы отправили вам подтверждение вашего
              заказа
            </h4>
            <InputMask
              mask="+999(999)99-99-99"
              placeholder="+996(___)__-__-__"
              name="number"
              onChange={changeInput}
              required
              value={confirm?.number}
            />
            <label htmlFor="warn">
              Мы скинем подтверждение заказа на ваш номер
            </label>
            <button className="sendData" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
