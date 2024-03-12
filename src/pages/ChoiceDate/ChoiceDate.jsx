import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ChoiceDate.scss";
import { useDispatch, useSelector } from "react-redux";
import { daysOfWeek } from "../../helpers/dataArr";
import { transformDate } from "../../helpers/transformDate";
import { changeListTime } from "../../store/reducers/stateSlice";
import {
  changeBasketUserCopy,
  copyAddBasketMaster,
} from "../../store/reducers/saveDataSlice";
import { useNavigate, useParams } from "react-router-dom";

const ChoiceDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  const yesterday = currentDate.setDate(currentDate.getDate() - 1);

  const { listTimeForCalendare } = useSelector((state) => state.stateSlice);
  const { basketUserCopy } = useSelector((state) => state.saveDataSlice);
  const { listTimes, listSchedule } = useSelector(
    (state) => state.requestSlice
  );
  const timeMaster = basketUserCopy?.master?.time;

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const tileDisabled = ({ date }) => date < yesterday;

  const onClickDay = (value, e) => {
    const dayOfWeek = value.getDay();
    checkDate(
      listSchedule,
      `${daysOfWeek?.[dayOfWeek]}_start`,
      `${daysOfWeek?.[dayOfWeek]}_end`
    );

    // Получаем значения года, месяца и дня
    const year = value.getFullYear().toString().padStart(4, "0");
    const month = (value.getMonth() + 1).toString().padStart(2, "0");
    const day = value.getDate().toString().padStart(2, "0");

    // Получаем значения часов, минут и секунд
    const hours = value.getHours().toString().padStart(2, "0");
    const minutes = value.getMinutes().toString().padStart(2, "0");
    const seconds = value.getSeconds().toString().padStart(2, "0");
    ///////////////////////////////////////////////
    const dateCalendar = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;

    dispatch(
      changeBasketUserCopy({
        service: [...basketUserCopy?.service],
        master: { date: dateCalendar },
      })
    ); /// удаляю объект при повторном нажатии
  };

  const checkDate = (list, start, end) => {
    // console.log(list, "list");

    const transformAndCheck = (value) =>
      transformDate(value) === null || transformDate(value) === "24:00"
        ? ""
        : transformDate(value);

    let firstTime = "23:59";
    let lastTime = "00:00";

    list.forEach((i) => {
      const startTime = transformAndCheck(i?.[start]);
      const endTime = transformAndCheck(i?.[end]);

      if (startTime !== "" && startTime < firstTime) {
        firstTime = startTime;
      }

      if (endTime !== "" && endTime > lastTime) {
        lastTime = endTime;
      }
    });

    if (firstTime === "23:59" || lastTime === "00:00") {
      // If не будет диапозона времени
      dispatch(changeListTime([]));
    } else {
      const listTime = generateTimeIntervals(firstTime, lastTime);
      dispatch(changeListTime(listTime));
    }
  };

  const choiceTime = (time) => {
    if (time === timeMaster) {
      dispatch(copyAddBasketMaster({})); /// удаляю объект при повторном нажатии
    } else {
      dispatch(copyAddBasketMaster({ time, date: "today" })); /// добавляю объект

      dispatch(
        changeBasketUserCopy({
          service: [],
          master: { ...basketUserCopy?.master, time },
        })
      );
    }
  };

  const nextFnService = () => {
    navigate(`/service/${id}/${0}`);
  };

  React.useEffect(() => {
    if (listSchedule.length > 0) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const currentDayKey = `${daysOfWeek?.[dayOfWeek]}_start`;
      const currentDayEndKey = `${daysOfWeek?.[dayOfWeek]}_end`;
      checkDate(listSchedule, currentDayKey, currentDayEndKey);
    }

    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    // Получаем значения часов, минут и секунд
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");

    const dateToday = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    dispatch(
      changeBasketUserCopy({
        service: [...basketUserCopy?.service],
        master: { date: dateToday },
      })
    );
  }, [listSchedule]);

  console.log(basketUserCopy, "basketUserCopy");
  // console.log(listTimes, "listTimes");
  // console.log(listSchedule, "listSchedule");
  // console.log(listTimeForCalendare, "listTimeForCalendare");

  return (
    <div className="dateChoice">
      <div className="dateChoice__inner">
        <Calendar
          onChange={onChange}
          value={date}
          tileDisabled={tileDisabled}
          onClickDay={onClickDay}
        />
        <div className="containerMini">
          <div className="dateChoice__times">
            <div className="listtime">
              {listTimeForCalendare?.map((i, index) => (
                <button
                  key={index}
                  onClick={() => choiceTime(i)}
                  className={timeMaster === i ? "activeTime" : ""}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
          {basketUserCopy?.master?.time && basketUserCopy?.master?.date && (
            <button className="zakaz" onClick={nextFnService}>
              Перейти к услугам
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceDate;

// функция для генераци времени
const generateTimeIntervals = (earliestTime, latestTime) => {
  // Преобразуем строки времени в объекты Date
  const earliestTimeDate = new Date(`1970-01-01T${earliestTime}:00`);
  const latestTimeDate = new Date(`1970-01-01T${latestTime}:00`);

  const intervals = [];
  let currentInterval = new Date(earliestTimeDate);

  // Пока текущее время меньше или равно последнему времени
  while (currentInterval <= latestTimeDate) {
    const hours = currentInterval.getHours();
    const minutes = currentInterval.getMinutes();
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    intervals.push(`${formattedHours}:${formattedMinutes}`);

    // Увеличиваем текущее время на 30 минут
    currentInterval.setMinutes(currentInterval.getMinutes() + 30);
  }

  return intervals;
};
