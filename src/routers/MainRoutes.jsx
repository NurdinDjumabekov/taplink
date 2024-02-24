import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
// import { Preloader } from '../components/Preloader/Preloader';
import { useDispatch, useSelector } from "react-redux";
import LookAction from "../pages/LookAction/LookAction";
import ChoiceSpecialist from "../pages/ChoiceSpecialist/ChoiceSpecialist";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import ChoiceDate from "../pages/ChoiceDate/ChoiceDate";
import ChoiceService from "../pages/ChoiceService/ChoiceService";
import EstabPage from "../pages/EstabPage/EstabPage";
import Alerts from "../components/Alerts/Alerts";
import BasketPage from "../pages/BasketPage/BasketPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import { changeLookDate } from "../store/reducers/stateSlice";
import DateLook from "../components/DateLook/DateLook";
import Certificate from "../pages/Certificate/Certificate";
import CancellationPage from "../pages/CancellationPage/CancellationPage";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
// import Alerts from '../components/Alerts/Alerts';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { basketUser } = useSelector((state) => state.saveDataSlice);

  const { typeLookSevices, listBtns, lookDate } = useSelector(
    (state) => state.stateSlice
  );
  // console.log(typeLookSevices, "typeLookSevices");
  // console.log(basketUser, "basketUser");
  // console.log(listBtns, "listBtns");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/zap" element={<LookAction />} />
          <Route path="/det/:id" element={<EstabPage />} />
          <Route path="/com/:id" element={<CommentsPage />} />
          <Route path="/cer" element={<Certificate />} />
          <Route path="/canc" element={<CancellationPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
      {/* <MoreInfo /> */}
      {/* {preloader && <Preloader />} */}
      <Alerts />
      <DateLook
        lookDate={lookDate}
        setLookdate={() => dispatch(changeLookDate())}
      />
    </>
  );
};

export default MainRoutes;
