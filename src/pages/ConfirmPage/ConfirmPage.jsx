import React from "react";
import "./ConfirmPage.scss";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCancellation,
  changeConfirm,
} from "../../store/reducers/inputSlice";

const ConfirmPage = () => {
  const dispatch = useDispatch();
  const { confirm } = useSelector((state) => state.inputSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch(changeConfirm({ ...confirm, [name]: value }));
  };

  const confirmZakaz = (e) => {
    e.preventDefault();
  };
  return (
    <div className="cancellation confirm">
      <div className="container">
        <div className="cancellation__inner">
          <form onSubmit={confirmZakaz}>
            <a href="https://wa.me/996700754454" target="_blank">
              Написать нам в WhatsApp
            </a>
            <h4>Введите ваш номер, чтобы мы отправили вам подтверждение</h4>
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
