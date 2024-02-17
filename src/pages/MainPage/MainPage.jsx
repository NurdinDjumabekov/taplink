import React from 'react';
import './MainPage.scss';
import { ENV } from '../../helpers/ENV';
import { useNavigate } from 'react-router-dom';
import CLOUDS from 'vanta/src/vanta.fog';

const MainPage = () => {
  // console.log(ENV());
  const navigate = useNavigate();

  React.useEffect(() => {
    CLOUDS({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xb04567,
      midtoneColor: 0xcf1fd0,
      lowlightColor: 0xcc2a97,
      baseColor: 0xffffff,
      blurFactor: 0.59,
      speed: 0.7,
      zoom: 0.6,
    });
  }, []);

  return (
    <div className="mainPage" id="vanta">
      <div className="container">
        <div className="mainPage__inner">
          <button>Записаться</button>
          <button>Подарочные сертификаты</button>
          <button>Перенос или отмена записи</button>
          <button>Обратная взять</button>
          <button>Информация о нас</button>
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
