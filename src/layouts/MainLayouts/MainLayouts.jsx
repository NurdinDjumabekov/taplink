import React from 'react';
import './MainLayouts.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CLOUDS from 'vanta/src/vanta.fog';
import CallBtns from '../../components/CallBtns/CallBtns';
import Basket from '../../components/Basket/Basket';

const MainLayouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //   const [pages, setPages] = useState([
  //     {
  //       id: 1,
  //       name: 'Все иски',
  //       path: '/',
  //       bool: true,
  //     },
  //     {
  //       id: 2,
  //       name: 'Создать черновик',
  //       path: '/',
  //       bool: false,
  //     },
  //     {
  //       id: 3,
  //       name: 'Уведомления',
  //       path: '/',
  //       bool: false,
  //     },
  //   ]);

  React.useEffect(() => {
    CLOUDS({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xbb5c7a,
      midtoneColor: 0xc944ca,
      lowlightColor: 0xb62286,
      baseColor: 0xffffff,
      blurFactor: 0.59,
      speed: 0.7,
      zoom: 0.6,
    });
  }, []);

  return (
    <div className="mainLayouts" id="vanta">
      <div>
        <Outlet />
        <CallBtns />
        <Basket />
      </div>
    </div>
  );
};

export default MainLayouts;