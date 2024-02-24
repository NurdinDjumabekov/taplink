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

const ChoiceSpecialist = () => {
  const { listMasters } = useSelector((state) => state.requestSlice);

  const imgAlt =
    "data:image/jpeg;base64,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";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickDate = (id) => {
    dispatch(changeIdForDate(id));
    dispatch(changeLookDate(true));
  };

  const clickComents = (id) => {
    dispatch(changeIdForDate(id));
    navigate(`/com/${id}`);
  };
  console.log(listMasters, "listMasters");

  return (
    <>
      <div className="spec">
        {listMasters?.map((spec) => (
          <div key={spec?.codeid} className="spec__every">
            <div className="spec__content">
              <div className="spec__content__more">
                <div className="mainLogo">
                  <img src={spec?.logo ? spec?.logo : imgAlt} alt="мастер" />
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
                  <h5>{spec.fio}</h5>
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
              <p>
                {spec?.description
                  ? spec?.description
                  : "Описание отсутствует ..."}
              </p>
              <h4 onClick={() => clickDate(spec?.codeid)}>
                Посмотреть время для записи
              </h4>
              <h6 onClick={() => clickComents(spec?.codeid)}>
                Посмотреть отзывы
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChoiceSpecialist;
