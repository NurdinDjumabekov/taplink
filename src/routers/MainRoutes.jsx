import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import MainPage from '../pages/MainPage/MainPage';
// import { Preloader } from '../components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import LookAction from '../pages/LookAction/LookAction';
import Establishment from '../pages/Establishment/Establishment';
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
          <Route path="/zap" element={<LookAction />} />
          <Route path="/det/:id" element={<Establishment />} />
          {/* <Route path="/" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<MainPage />} /> */}
        </Route>
      </Routes>
      {/* <MoreInfo /> */}
      {/* {preloader && <Preloader />} */}
      {/* <Alerts /> */}
    </>
  );
};

export default MainRoutes;
