import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { useSelector } from "react-redux";
import LookAction from "../pages/LookAction/LookAction";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import EstabPage from "../pages/EstabPage/EstabPage";
import Alerts from "../components/Alerts/Alerts";
import BasketPage from "../pages/BasketPage/BasketPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import CancellationPage from "../pages/CancellationPage/CancellationPage";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
import { Preloader } from "../components/Preloader/Preloader";
import TypesNav from "../components/TypesNav/TypesChoice";
import AddresLayouts from "../layouts/AddresLayouts/AddresLayouts";
import ChoiceSpecialist from "../pages/ChoiceSpecialist/ChoiceSpecialist";
import ChoiceService from "../pages/ChoiceService/ChoiceService";
import ChoiceDate from "../pages/ChoiceDate/ChoiceDate";
import ChoiceSpecialistCalendar from "../pages/ChoiceSpecialistCalendar/ChoiceSpecialistCalendar";

///// на будущее
// import DateLook from "../components/DateLook/DateLook";
// import Certificate from "../pages/Certificate/Certificate";

const MainRoutes = () => {
  const { preloader } = useSelector((state) => state.requestSlice);

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
          <Route element={<AddresLayouts />}>
            <Route path="/choice/:filial" element={<TypesNav />} />

            <Route
              path="/spec/:filial/:date/:dayOfWeek"
              element={<ChoiceSpecialist />}
            />

            <Route path="/date/:filial" element={<ChoiceDate />} />

            <Route
              path="/service/:filial/:id_master"
              element={<ChoiceService />}
            />

            {/*<Route
              path="/spec_calendar/:date"
              element={<ChoiceSpecialistCalendar />}
            />
             */}

            <Route path="/basket/:filial" element={<BasketPage />} />
          </Route>
          <Route path="/com/:id" element={<CommentsPage />} />
          {/* <Route path="/cer" element={<Certificate />} /> */}
          <Route path="/canc" element={<CancellationPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Route>
      </Routes>
      {preloader && <Preloader />}
      <Alerts />
    </>
  );
};

export default MainRoutes;
