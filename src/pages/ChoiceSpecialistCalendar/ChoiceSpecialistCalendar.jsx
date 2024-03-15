import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderStars } from "../../helpers/renderStars";
import star from "../../assets/icons/star.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";
import imgAlt from "../../assets/image/masterAlt.jpg";
import moreInfo from "../../assets/icons/moreInfo.svg";
import "./ChoiceSpecialistCalendar.scss";

import { useNavigate, useParams } from "react-router-dom";
import {
  changeBasketUser,
  changeBasketUserCopy,
} from "../../store/reducers/saveDataSlice";

const ChoiceSpecialistCalendar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { listMasters } = useSelector((state) => state.requestSlice);
  const { basketUserCopy, basketUser } = useSelector(
    (state) => state.saveDataSlice
  );

  const idMaster = basketUserCopy?.master?.codeid;

  const clickComents = (id) => {
    navigate(`/com/${id}`);
  };

  const clickSpec = (obj) => {
    if (idMaster === obj?.codeid) {
      dispatch(
        changeBasketUserCopy({
          ...basketUserCopy,
          master: {
            time: basketUserCopy?.master?.time,
            date: basketUserCopy?.master?.date,
          },
        })
      );
    } else {
      dispatch(
        changeBasketUserCopy({
          ...basketUserCopy,
          master: { ...basketUserCopy?.master, ...obj },
        })
      );
    }
  };

  const nextFnService = () => {
    dispatch(
      changeBasketUser({
        ...basketUser,
        master: [basketUserCopy?.master] || basketUser?.master,
        service: basketUserCopy?.service || basketUser?.service,
      })
    );
    navigate(`/basket/${id}`);
  };

  console.log(basketUserCopy, "basketUserCopy");
  return (
    <div className="spec more">
      <div className="containerMini">
        <div className="spec__inner">
          {listMasters?.length === 0 ? (
            <p className="noneDataa">В этом филиале мастера отсутствуют</p>
          ) : (
            <>
              {listMasters?.map((spec) => (
                <div key={spec?.codeid} className="spec__every">
                  <div
                    className={
                      +idMaster === +spec?.codeid
                        ? "spec__content activeSpec"
                        : "spec__content"
                    }
                  >
                    <div
                      className="spec__content__more"
                      onClick={() => clickSpec(spec)}
                    >
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
                          <span>{spec?.countSchel} отзывов</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moreComment"
                      onClick={() => clickComents(spec?.codeid)}
                    >
                      <img src={moreInfo} alt="moreInfo" />
                    </div>
                  </div>
                  {basketUserCopy?.master?.time &&
                    basketUserCopy?.master?.date &&
                    basketUserCopy?.master?.fio && (
                      <button className="zakaz" onClick={nextFnService}>
                        Перейти к услугам
                      </button>
                    )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceSpecialistCalendar;
