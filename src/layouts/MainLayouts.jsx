import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MainLayouts.scss';

function MainLayouts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [pages, setPages] = useState([
    {
      id: 1,
      name: 'Все иски',
      path: '/',
      bool: true,
    },
    {
      id: 2,
      name: 'Создать черновик',
      path: '/',
      bool: false,
    },
    {
      id: 3,
      name: 'Уведомления',
      path: '/',
      bool: false,
    },
  ]);

  return (
    <div className="mainLayouts">
      <Outlet />
    </div>
  );
}

export default MainLayouts;
