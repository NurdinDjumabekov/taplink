import React from 'react';
import './MainPage.scss';
import { ENV } from '../../helpers/ENV';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  // console.log(ENV());
  const navigate = useNavigate();

  const pageList = [
    {
      id: 1,
      link: 'zap',
      text: 'Записаться',
    },
    {
      id: 2,
      link: 'zap',
      text: 'Подарочные сертификаты',
    },
    {
      id: 3,
      link: 'zap',
      text: 'Перенос или отмена записи',
    },
    {
      id: 4,
      link: 'zap',
      text: 'Подтвердить запись',
    },
    {
      id: 5,
      link: 'zap',
      text: 'Обратная взять',
    },
    {
      id: 6,
      link: 'zap',
      text: 'Информация о нас',
    },
  ];

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

// el: "#your-element-selector",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0xb85285,
//   midtoneColor: 0xfd00ff,
//   lowlightColor: 0xcc852a,
//   baseColor: 0xefe5e5

//  mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0xbb5c7a,
//   midtoneColor: 0xc944ca,
//   lowlightColor: 0xb62286,
//   baseColor: 0xffffff,
//   blurFactor: 0.59,
//   speed: 0.70,
//   zoom: 0.60
