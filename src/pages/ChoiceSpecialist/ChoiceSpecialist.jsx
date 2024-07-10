/////// hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

/////// scss
import "./ChoiceSpecialist.scss";

/////// fns
import { copyAddBasketMaster } from "../../store/reducers/saveDataSlice";

//////// imgs
import star from "../../assets/icons/star.svg";
import imgAlt from "../../assets/image/masterAlt.jpg";
import moreInfo from "../../assets/icons/moreInfo.svg";

/////// helpers
import { transformDate } from "../../helpers/transformDate";
import { renderStars } from "../../helpers/renderStars";
import { toTakeSchedule } from "../../store/reducers/requestSlice";

const ChoiceSpecialist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, date, filial, dayOfWeekText } = useParams();

  const { listMasters } = useSelector((state) => state.requestSlice);
  const { basketUserCopy } = useSelector((state) => state.saveDataSlice);

  const idMaster = basketUserCopy?.master?.code_doctor;
  const timeMaster = basketUserCopy?.master?.time;
  // codeid - мастера, id - времени

  const clickComents = (id) => navigate(`/com/${id}`);

  const choiceTime = (date, time, code_doctor) => {
    if (idMaster == code_doctor && time == timeMaster) {
      dispatch(copyAddBasketMaster({}));
      /// удаляю объект при повторном нажатии
    } else {
      dispatch(copyAddBasketMaster({ time, date, code_doctor }));
      /// добавляю объект
    }
  };

  const nextFnService = () => navigate(`/service/${id}/${idMaster}`);

  useEffect(() => {
    dispatch(toTakeSchedule({ filial, dayOfWeekText, date }));
  }, []);
  return (
    <div className="spec">
      <div className="containerMini">
        <div className="spec__inner">
          {listMasters?.length === 0 ? (
            <p className="noneDataa">В этом филиале мастера отсутствуют</p>
          ) : (
            <>
              {/* <div
                className="spec__everybody"
                // onClick={() => clickDate(randomId(listMasters))}
              >
                <div className="mainLogo">
                  <img src={choicesSpec} alt="мастер" />
                </div>
                <h5>Любой специалист</h5>
              </div> */}
              {listMasters?.map((spec) => (
                <div key={spec?.codeid} className="spec__every">
                  <div className="spec__content">
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
                          <span>{spec?.countSchel} отзывов</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moreComment"
                      onClick={() => clickComents(spec?.code_doctor)}
                    >
                      <img src={moreInfo} alt="moreInfo" />
                    </div>
                  </div>
                  <p>Ближайшее время для записи на сегодня: </p>
                  <div className="listtime">
                    {spec?.listTimes?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          choiceTime(item?.date, item?.time, spec?.code_doctor)
                        }
                        className={
                          idMaster == spec?.code_doctor &&
                          timeMaster === item?.time
                            ? "activeTime"
                            : ""
                        }
                      >
                        {transformDate(item?.time)}
                      </button>
                    ))}
                  </div>
                  <i onClick={() => navigate(`/date/${id}`)}>
                    Выбрать другое время
                  </i>
                  {Object.keys(basketUserCopy?.master).length !== 0 && (
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

export default ChoiceSpecialist;
