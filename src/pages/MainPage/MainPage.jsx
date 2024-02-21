import React from "react";
import "./MainPage.scss";
import { ENV } from "../../helpers/ENV";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // console.log(ENV());
  const navigate = useNavigate();

  const pageList = [
    {
      id: 1,
      link: "zap",
      text: "Записаться",
      img: "https://images.pexels.com/photos/3993293/pexels-photo-3993293.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      link: "zap",
      text: "Подарочные сертификаты",
    },
    {
      id: 3,
      link: "zap",
      text: "Перенос или отмена записи",
    },
    {
      id: 4,
      link: "zap",
      text: "Подтвердить запись",
    },
    {
      id: 5,
      link: "zap",
      text: "Обратная взять",
    },
    {
      id: 6,
      link: "zap",
      text: "Информация о нас",
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
            <button key={page?.id} onClick={() => navigate(page?.link)}>
              {page?.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
