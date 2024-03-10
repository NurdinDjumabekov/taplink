import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./EstabPage.scss";
import { useDispatch, useSelector } from "react-redux";
import ChoiceSpecialist from "../ChoiceSpecialist/ChoiceSpecialist";
import ChoiceDate from "../ChoiceDate/ChoiceDate";
import ChoiceService from "../ChoiceService/ChoiceService";
import TypesNav from "../../components/TypesNav/TypesChoice";
import {
  takeListService,
  takeMasters,
  takeTypesService,
} from "../../store/reducers/requestSlice";

const EstabPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { typeLookSevices } = useSelector((state) => state.saveDataSlice);

  React.useEffect(() => {
    // dispatch(takeMasters(id));
    // dispatch(takeTypesService());

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="establishment">
        <div className="container">
          <div className="establishment__inner">
            <div className="establishment__logo">
              <div>
                {/* <h3>
                  {everyFilial?.addres
                    ? everyFilial?.addres.charAt(0).toUpperCase() +
                      everyFilial?.addres.slice(1)
                    : ""}
                </h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EstabPage;
