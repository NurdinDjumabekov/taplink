import React from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  const { numberSalon } = useSelector((state) => state.stateSlice);

  const pageList = [
    {
      id: 1,
      link: "/zap",
      text: "Услуги",
      type: 1,
    },
    // {
    //   id: 2,
    //   link: "/cer",
    //   text: "Подарочные сертификаты",
    //   type: 1,
    // },
    {
      id: 3,
      link: "canc",
      text: "Перенос или отмена записи",
      type: 2,
      path: `https://wa.me/${numberSalon}`,
    },
    {
      id: 4,
      link: "confirm",
      text: "Подтвердить запись",
      type: 1,
    },
    {
      id: 5,
      link: "basket",
      text: "Ваша корзина",
      type: 1,
    },
    {
      id: 6,
      link: "basket",
      text: "Связаться с нами",
      type: 2,
      path: `https://wa.me/${numberSalon}`,
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainPage">
      <div className="container">
        <div className="mainPage__inner">
          {pageList?.map((page) =>
            page?.type === 1 ? (
              <button key={page?.id} onClick={() => navigate(page?.link)}>
                {page?.text}
              </button>
            ) : (
              <a href={page?.path} target="_blank">
                <button>{page?.text}</button>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
