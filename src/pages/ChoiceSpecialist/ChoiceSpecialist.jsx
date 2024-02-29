import React from "react";
import "./ChoiceSpecialist.scss";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStars";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIdForDate,
  changeLookDate,
  // delete
} from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";
import { changeTemporaryIdMaster } from "../../store/reducers/saveDataSlice";
import { randomId } from "../../helpers/randomId";
import imgAlt from "../../assets/image/masterAlt.jpg";

const ChoiceSpecialist = () => {
  const { listMasters } = useSelector((state) => state.requestSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickDate = (id) => {
    console.log(id);
    navigate(`/date/${id}`);
    dispatch(changeTemporaryIdMaster(id));
  };

  const clickComents = (id) => {
    navigate(`/com/${id}`);
  };

  return (
    <>
      <div className="spec">
        {listMasters?.length === 0 ? (
          <p className="noneDataa">В этом филиале мастера отсутствуют</p>
        ) : (
          <>
            <div
              className="spec__every allSpec"
              onClick={() => clickDate(randomId(listMasters))}
            >
              <div className="spec__content">
                <div className="spec__content__more">
                  <div className="mainLogo">
                    <img src={imgAlt} alt="мастер" />
                  </div>
                  <div className="mainText">
                    <h5>Любой специалист</h5>
                    <div className="mainText__rating">
                      <div className="star">{renderStars(5, star)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spec__decrip">
                <p>
                  Если вы не можете отпределиться с мастером, то мы вам советуем
                  выбрать этот пункт
                </p>
                <h4>Выбрать время для записи</h4>
                <h6>.</h6>
              </div>
            </div>
            {listMasters?.map((spec) => (
              <div key={spec?.codeid} className="spec__every">
                <div
                  className="spec__content"
                  onClick={() => clickDate(spec?.codeid)}
                >
                  <div className="spec__content__more">
                    <div className="mainLogo">
                      <img
                        src={spec?.logo ? spec?.logo : imgAlt}
                        alt="мастер"
                      />
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
                  <p onClick={() => clickDate(spec?.codeid)}>
                    {spec?.description
                      ? spec?.description
                      : "Описание отсутствует ..."}
                  </p>
                  <h4 onClick={() => clickDate(spec?.codeid)}>
                    Выбрать время для записи
                  </h4>
                  <h6 onClick={() => clickComents(spec?.codeid)}>
                    Посмотреть отзывы
                  </h6>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ChoiceSpecialist;
