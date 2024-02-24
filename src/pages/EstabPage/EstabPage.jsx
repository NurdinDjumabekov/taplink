import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./EstabPage.scss";
import { useDispatch, useSelector } from "react-redux";
import ChoiceSpecialist from "../ChoiceSpecialist/ChoiceSpecialist";
import ChoiceDate from "../ChoiceDate/ChoiceDate";
import ChoiceService from "../ChoiceService/ChoiceService";
import TypesNav from "../../components/TypesNav/TypesNav";
import {
  takeMasters,
  takeTypesService,
} from "../../store/reducers/requestSlice";

const EstabPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { typeLookSevices } = useSelector((state) => state.stateSlice);

  React.useEffect(() => {
    dispatch(takeMasters(id));
    dispatch(takeTypesService());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="establishment">
        <div className="container">
          <div className="establishment__inner">
            {/* <div className="establishment__logo">
              <div>
                <h3>Ж/м Кок-Жар, ул. Новая 22</h3>
              </div>
            </div> */}
            <TypesNav />
            {typeLookSevices === 1 && <ChoiceSpecialist />}
            {typeLookSevices === 2 && <ChoiceService />}
            {typeLookSevices === 3 && <ChoiceDate />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EstabPage;
