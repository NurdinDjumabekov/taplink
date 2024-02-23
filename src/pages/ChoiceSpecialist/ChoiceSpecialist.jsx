import React from "react";
import { listSpecialist } from "../../helpers/dataArr";
import "./ChoiceSpecialist.scss";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStars";
import DateLook from "../../components/DateLook/DateLook";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIdForDate,
  changeLookDate,
} from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";
import { listMasters } from "../../store/reducers/requestSlice";

const ChoiceSpecialist = () => {
  // const [lookDate, setLookdate] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickDate = (id) => {
    dispatch(changeIdForDate(id));
    dispatch(changeLookDate(true));
  };

  const clickComents = (id) => {
    dispatch(changeIdForDate(id));
    navigate("/com");
  };


  return (
    <>
      <div className="spec">
        {listSpecialist?.map((spec) => (
          <div key={spec?.id} className="spec__every">
            <div className="spec__content">
              <div className="spec__content__more">
                <div className="mainLogo">
                  <img src={spec?.logo} alt="мастер" />
                </div>
                <div className="mainText">
                  <p>
                    {spec?.schedule?.map((con, ind) => (
                      <span key={ind}>
                        {con}
                        {ind !== spec.schedule.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <h5>{spec.name}</h5>
                  <div className="mainText__rating">
                    <div className="star">
                      {renderStars(spec?.rating, star)}
                    </div>
                    <span>({spec?.countSchel})</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="spec__decrip">
              <p>{spec?.desc}</p>
              <h4 onClick={() => clickDate(spec?.id)}>
                Посмотреть время для записи
              </h4>
              <h6 onClick={() => clickComents(spec?.id)}>Посмотреть отзывы</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChoiceSpecialist;
