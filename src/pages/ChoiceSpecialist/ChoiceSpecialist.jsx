import React from "react";
import "./ChoiceSpecialist.scss";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStars";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { copyAddBasketMaster } from "../../store/reducers/saveDataSlice";
import { randomId } from "../../helpers/randomId";
import imgAlt from "../../assets/image/masterAlt.jpg";
import moreInfo from "../../assets/icons/moreInfo.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";
import { transformDate } from "../../helpers/transformDate";
import { daysOfWeek } from "../../helpers/dataArr";

const ChoiceSpecialist = () => {
  const { listMasters } = useSelector((state) => state.requestSlice);
  const { basketUserCopy } = useSelector((state) => state.saveDataSlice);
  const { listSchedule } = useSelector((state) => state.requestSlice);

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
      dispatch(copyAddBasketMaster({ ...spec, time })); /// добавляю объект
    }
  };

  const nextFnService = () => {
    navigate(`/service/${id}`);
  };

  const generateTimeIntervals = (startTime, endTime) => {
    const intervals = [];

    if (startTime && endTime && startTime !== "00:00" && endTime !== "00:00") {
      const currentDateTime = new Date(); // Текущая дата и время
      const currentOffset = currentDateTime.getTimezoneOffset();

      let startDate = new Date(startTime);
      const end = new Date(endTime);

      while (startDate <= end) {
        // Приводим время к часовому поясу текущей даты
        const adjustedStartDate = new Date(
          startDate.getTime() + currentOffset * 60000
        );

        // Сравниваем только часы и минуты
        if (
          adjustedStartDate.getHours() > currentDateTime.getHours() ||
          (adjustedStartDate.getHours() === currentDateTime.getHours() &&
            adjustedStartDate.getMinutes() >= currentDateTime.getMinutes())
        ) {
          intervals.push(transformDate(startDate));
        }

        startDate.setMinutes(startDate.getMinutes() + 30);
      }
    }

    return intervals;
  };

  const today = new Date();
  const dayWeekNum = today.getDay();
  const dayOfWeekText = daysOfWeek[dayWeekNum];

  // console.log(basketUserCopy, "basketUserCopy");
  console.log(listSchedule, "listSchedule");

  return (
    <div className="spec">
      <div className="containerMini">
        <div className="spec__inner">
          {listMasters?.length === 0 ? (
            <p className="noneDataa">В этом филиале мастера отсутствуют</p>
          ) : (
            <>
              <div
                className="spec__everybody"
                // onClick={() => clickDate(randomId(listMasters))}
              >
                <div className="mainLogo">
                  <img src={choicesSpec} alt="мастер" />
                </div>
                <h5>Любой специалист</h5>
              </div>
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
                  <p>Ближайшее время для записи: </p>
                  <div className="listtime">
                    {listSchedule
                      ?.filter((time) => +time?.code_doctor === +spec?.codeid)
                      ?.map((time) =>
                        generateTimeIntervals(
                          time?.[`${dayOfWeekText}_start`],
                          time?.[`${dayOfWeekText}_end`]
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
                </div>
              ))}
            </>
          )}
        </div>
        {Object.keys(basketUserCopy?.master).length !== 0 && (
          <button className="zakaz" onClick={nextFnService}>
            Перейти к заказу
          </button>
        )}
      </div>
    </div>
  );
};

export default ChoiceSpecialist;
