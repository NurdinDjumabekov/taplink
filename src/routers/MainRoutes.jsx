import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
// import { Preloader } from '../components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import LookAction from '../pages/LookAction/LookAction';
import ChoiceSpecialist from '../pages/ChoiceSpecialist/ChoiceSpecialist';
import MainLayouts from '../layouts/MainLayouts/MainLayouts';
import ChoiceDate from '../pages/ChoiceDate/ChoiceDate';
import ChoiceService from '../pages/ChoiceService/ChoiceService';
import EstabPage from '../pages/EstabPage/EstabPage';
import Alerts from '../components/Alerts/Alerts';
import BasketPage from '../pages/BasketPage/BasketPage';
import CommentsPage from '../pages/CommentsPage/CommentsPage';
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
          <Route path="/det/:id" element={<EstabPage />} />
          <Route path="/com" element={<CommentsPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
      {/* <MoreInfo /> */}
      {/* {preloader && <Preloader />} */}
      <Alerts />
    </>
  );
};

export default MainRoutes;
