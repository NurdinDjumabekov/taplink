import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import MainPage from '../pages/MainPage/MainPage';
// import { Preloader } from '../components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
// import Alerts from '../components/Alerts/Alerts';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
      {/* <MoreInfo /> */}
      {/* {preloader && <Preloader />} */}
      {/* <Alerts /> */}
    </>
  );
};

export default MainRoutes;
