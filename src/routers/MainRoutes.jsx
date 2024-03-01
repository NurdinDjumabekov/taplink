import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import LookAction from "../pages/LookAction/LookAction";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import EstabPage from "../pages/EstabPage/EstabPage";
import Alerts from "../components/Alerts/Alerts";
import BasketPage from "../pages/BasketPage/BasketPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import DateLook from "../components/DateLook/DateLook";
import Certificate from "../pages/Certificate/Certificate";
import CancellationPage from "../pages/CancellationPage/CancellationPage";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
import { Preloader } from "../components/Preloader/Preloader";

const MainRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { basketUser, temporaryIdFilial, listBtns } = useSelector(
    (state) => state.saveDataSlice
  );
  const { preloader } = useSelector((state) => state.requestSlice);
  const { typeLookSevices, lookDate } = useSelector(
    (state) => state.stateSlice
  );
  // console.log(typeLookSevices, "typeLookSevices");
  // console.log(basketUser, "basketUser");
  // console.log(listBtns, "listBtns");
  // console.log(temporaryIdFilial, "temporaryIdFilial");

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
          <Route path="/date/:id" element={<DateLook />} />
          <Route path="/com/:id" element={<CommentsPage />} />
          <Route path="/cer" element={<Certificate />} />
          <Route path="/canc" element={<CancellationPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
      {/* <MoreInfo /> */}
      {preloader && <Preloader />}
      <Alerts />
    </>
  );
};

export default MainRoutes;
