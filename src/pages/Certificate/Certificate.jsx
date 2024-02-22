import React from "react";
import { listCertificate } from "../../helpers/dataArr";
import "./Certificate.scss";
import { addCertificate } from "../../store/reducers/saveDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeAlertText } from "../../store/reducers/stateSlice";

const Certificate = () => {
  const dispatch = useDispatch();
  const { basketUser } = useSelector((state) => state.saveDataSlice);

  const addSertificate = (obj) => {
    const existingCertificate = basketUser?.certificate?.find(
      (cert) => cert && cert.codeid === obj.codeid
    );

    if (basketUser?.certificate?.length >= 4) {
      dispatch(
        changeAlertText({
          text: "За раз вы можете выбрать только 4 сертификата. Перейдите в корзину, чтобы посмотреть ваш список",
          backColor: "#c284e4",
          state: true,
        })
      );
    } else {
      dispatch(
        changeAlertText({
          text: "Cертификат добавлен в корзину",
          backColor: "#e484ba",
          state: true,
        })
      );

      if (existingCertificate) {
        // Если сертификат уже в корзине, увеличиваем count
        dispatch(
          addCertificate({
            ...existingCertificate,
            count: existingCertificate.count + 1,
          })
        );
      } else {
        // Если сертификата нет в корзине, добавляем его
        dispatch(addCertificate({ ...obj, count: 1 }));
      }
    }
  };

  return (
    <div className="certificate">
      <div className="container">
        <h5>Сертификаты</h5>
        <div className="certificate__inner">
          {listCertificate?.map((cer) => (
            <div key={cer?.codeid} className="certificate__inner__card">
              <div className="inner">
                <div className="inner__img">
                  <img
                    src="https://www.graffiks.ru/images/images/luckclub/2021/01/bqhemlk48ne.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Сертификат на {cer?.sum} сом</h3>
                </div>
                <button onClick={() => addSertificate(cer)}>
                  Добавить сертификат
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
