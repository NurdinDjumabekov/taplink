import React from "react";
import "./CancellationPage.scss";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { changeCancellation } from "../../store/reducers/inputSlice";
import { useNavigate } from "react-router-dom";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { transformNumber } from "../../helpers/transformNumber";
import { cancellationSend } from "../../store/reducers/requestSlice";

const CancellationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cancellation } = useSelector((state) => state.inputSlice);
  const { numberSalon } = useSelector((state) => state.stateSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch(changeCancellation({ ...cancellation, [name]: value }));
  };

  const cancellationZakaz = (e) => {
    e.preventDefault();

    const isValidPhoneNumber = /^\996\d{9}$/g.test(
      transformNumber(cancellation?.number)
    );
    if (isValidPhoneNumber) {
      dispatch(
        cancellationSend({
          ...cancellation,
          number: transformNumber(cancellation?.number),
          numberSalon,
        })
      );
      setTimeout(() => {
        dispatch(
          changeCancellation({
            name: "",
            rejection: "",
            number: "+996",
          })
        );
        navigate("/");
      }, 1000);
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
    <div className="cancellation">
      <div className="container">
        <div className="cancellation__inner">
          <form onSubmit={cancellationZakaz}>
          <a href={`https://wa.me/${numberSalon}`} target="_blank">
              {" "}
              Написать нам в WhatsApp
            </a>
            <InputMask
              mask="+999(999)99-99-99"
              placeholder="+996(___)__-__-__"
              name="number"
              onChange={changeInput}
              required
              value={cancellation?.number}
            />
            <input
              type="text"
              name="name"
              placeholder="Ваше ФИО"
              onChange={changeInput}
              value={cancellation.name}
              required
            />
            <textarea
              name="rejection"
              required
              placeholder="Причина отказа или переноса"
              value={cancellation.rejection}
              onChange={changeInput}
            ></textarea>
            <div
              className="warn"
              // onClick={() =>
              //   dispatch(changeDataUser({ ...dataUser, warn: !dataUser?.warn }))
              // }
            >
              {/* <label htmlFor="warn">
                Предупредить меня за 2 часа до моего приезда
              </label> */}
            </div>
            <button className="sendData" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;
