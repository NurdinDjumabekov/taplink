import React from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  const { numberSalon, numberBoss } = useSelector((state) => state.stateSlice);

  const pageList = [
    {
      id: 1,
      link: "/zap",
      text: "Услуги",
      type: 1,
      minText: "",
    },
    {
      id: 2,
      link: "canc",
      text: "Перенос или отмена записи",
      type: 2,
      minText: "",
    },
    {
      id: 3,
      link: "",
      text: "Связаться с нами",
      type: 2,
      path: `https://wa.me/${numberSalon}`,
      minText: "",
    },
    {
      id: 4,
      link: "confirm",
      text: "Подтвердить наличие записи",
      type: 1,
      minText: "если не пришло сообщение",
    },
    {
      id: 5,
      link: "",
      text: "Написать руководству",
      type: 2,
      path: `https://wa.me/${numberBoss}`,
      minText: "Отзывы / Жалобы / Предложения",
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainPage">
      <div className="container">
        <div className="mainPage__inner">
          {pageList?.map((page) => (
            <div
              className="everyBtn"
              key={page?.id}
              onClick={() => navigate(page?.link)}
            >
              {page?.type === 1 ? (
                <>
                  <button>{page?.text}</button>
                  {page?.minText !== "" && <p>{page?.minText}</p>}
                </>
              ) : (
                <>
                  <a href={page?.path} target="_blank">
                    <button>{page?.text}</button>
                  </a>
                  {page?.minText !== "" && <p>{page?.minText}</p>}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
