import React from "react";
import "./ChoiceSpecialist.scss";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStars";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  changeBasketUser,
  copyAddBasketMaster,
} from "../../store/reducers/saveDataSlice";
import { randomId } from "../../helpers/randomId";
import imgAlt from "../../assets/image/masterAlt.jpg";
import moreInfo from "../../assets/icons/moreInfo.svg";
import { transformDate } from "../../helpers/transformDate";
import { daysOfWeek } from "../../helpers/dataArr";
import { getNowDate } from "../../helpers/getNowDate";

const ChoiceSpecialist = () => {
  const { listMasters } = useSelector((state) => state.requestSlice);
  const { basketUserCopy, basketUser } = useSelector(
    (state) => state.saveDataSlice
  );
  const { listSchedule, listTimes } = useSelector(
    (state) => state.requestSlice
  );
  const today = new Date();
  const dayWeekNum = today.getDay();
  const dayOfWeekText = daysOfWeek[dayWeekNum];

  const idMaster = basketUserCopy?.master?.codeid;
  const timeMaster = basketUserCopy?.master?.time;
  // codeid - мастера, id - времени

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const clickComents = (id) => {
    navigate(`/com/${id}`);
  };

  const choiceTime = (spec, time) => {
    if (idMaster === spec?.codeid && time === timeMaster) {
      dispatch(copyAddBasketMaster({})); /// удаляю объект при поаторонмо нажатии
    } else {
      // dispatch(copyAddBasketMaster({ ...spec, time, date: today })); /// добавляю объект
      dispatch(copyAddBasketMaster({ ...spec, time, date: getNowDate() })); /// добавляю объект
    }
  };

  const nextFnService = () => {
    if (basketUserCopy?.service?.length === 0) {
      navigate(`/service/${id}/${idMaster}`);
    } else {
      dispatch(
        changeBasketUser({
          ...basketUser,
          master: [basketUserCopy?.master] || basketUser?.master,
          service: basketUserCopy?.service || basketUser?.service,
        })
      );
      navigate(`/basket/${id}`);
    }
  };

  const generateTimeIntervals = (startTime, endTime, masterId) => {
    const intervals = [];
    const isTrueMaster = listTimes?.some((i) => masterId === i?.code_doctor);

    if (startTime && endTime && startTime !== "00:00" && endTime !== "00:00") {
      const currentDateTime = new Date();
      const currentOffset = currentDateTime.getTimezoneOffset();

      let startDate = new Date(startTime);
      const end = new Date(endTime);

      while (startDate <= end) {
        const adjustedStartDate = new Date(
          startDate.getTime() + currentOffset * 60000
        );

        if (
          adjustedStartDate.getHours() > currentDateTime.getHours() ||
          (adjustedStartDate.getHours() === currentDateTime.getHours() &&
            adjustedStartDate.getMinutes() >= currentDateTime.getMinutes())
        ) {
          if (isTrueMaster) {
            const currentTime = transformDate(startDate);

            // Проверяем, находится ли текущее время в промежутке из listTimes
            const isReservedTime = listTimes?.some(
              (time) =>
                masterId === time?.code_doctor &&
                currentTime >= transformDate(new Date(time?.date_from)) &&
                currentTime <= transformDate(new Date(time?.date_to))
            );
            if (!isReservedTime) {
              intervals.push(currentTime);
            }
          } else {
            intervals.push(transformDate(startDate));
          }
        }

        startDate.setMinutes(startDate.getMinutes() + 30);
      }
    }

    // console.log(intervals, "intervals");
    return intervals;
  };

  console.log(basketUserCopy, "basketUserCopy");
  // console.log(listSchedule, "listSchedule");
  // console.log(listTimes, "listTimes");
  console.log(listMasters, "listMasters");

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
                  <div
                    className="spec__content"
                    // onClick={() => clickDate(spec?.codeid)}
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
                          <span>{spec?.countSchel} отзывов</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moreComment"
                      onClick={() => clickComents(spec?.codeid)}
                    >
                      <img src={moreInfo} alt="" />
                    </div>
                  </div>
                  <p>Ближайшее время для записи на сегодня: </p>
                  <div className="listtime">
                    {listSchedule
                      ?.filter((time) => +time?.code_doctor === +spec?.codeid)
                      ?.map((time) =>
                        generateTimeIntervals(
                          time?.[`${dayOfWeekText}_start`],
                          time?.[`${dayOfWeekText}_end`],
                          spec?.codeid
                        ).map((i, index) => (
                          <button
                            key={index}
                            onClick={() => choiceTime(spec, i)}
                            className={
                              +idMaster === +spec?.codeid && timeMaster === i
                                ? "activeTime"
                                : ""
                            }
                          >
                            {i}
                          </button>
                        ))
                      )}
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
