import React from "react";
import "./CancellationPage.scss";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { changeCancellation } from "../../store/reducers/inputSlice";

const CancellationPage = () => {
  const dispatch = useDispatch();
  const { cancellation } = useSelector((state) => state.inputSlice);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch(changeCancellation({ ...cancellation, [name]: value }));
  };

  const cancellationZakaz = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cancellation">
      <div className="container">
        <div className="cancellation__inner">
          <form onSubmit={cancellationZakaz}>
            <a href="https://wa.me/996700754454" target="_blank">
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
              placeholder="Причина отказа"
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
