////// hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

////// css
import "react-calendar/dist/Calendar.css";
import "./ChoiceDate.scss";

/////// helpers
import { daysOfWeek } from "../../helpers/dataArr";
import { formatDateTime, transformDate } from "../../helpers/transformDate";

/////// fns
import { changeListTime } from "../../store/reducers/stateSlice";
import { changeBasketUserCopy } from "../../store/reducers/saveDataSlice";

/////// components
import Calendar from "react-calendar";

const ChoiceDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filial } = useParams();

  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  const yesterday = currentDate.setDate(currentDate.getDate() - 1);

  const { basketUserCopy } = useSelector((state) => state.saveDataSlice);
  const { listSchedule } = useSelector((state) => state.requestSlice);

  const onChange = (newDate) => setDate(newDate);

  const tileDisabled = ({ date }) => date < yesterday;

  ///// определяю день недели
  const dayWeekNum = date.getDay();
  const dayOfWeek = daysOfWeek?.[dayWeekNum];

  const onClickDay = (value) => {
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

    ///////////////////////////////////////////////
    const dateCalendar = `${year}-${month}-${day}`;

    dispatch(
      changeBasketUserCopy({
        service: [...basketUserCopy?.service],
        master: { date: dateCalendar },
      })
    ); /// удаляю объект при повторном нажатии
  };

  const checkDate = (list, start, end) => {
    const transformAndCheck = (value) =>
      transformDate(value) === null || transformDate(value) === "24:00"
        ? ""
        : transformDate(value);

    let firstTime = "23:59";
    let lastTime = "00:00";

    list?.forEach((i) => {
      const startTime = transformAndCheck(i?.[start]);
      const endTime = transformAndCheck(i?.[end]);

      if (startTime !== "" && startTime < firstTime && startTime !== "00:00") {
        firstTime = startTime;
      }

      if (endTime !== "" && endTime > lastTime && endTime !== "00:00") {
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

  const nextService = () =>
    navigate(`/spec/${filial}/${formatDateTime(date)}/${dayOfWeek}`);

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

    const dateToday = `${year}-${month}-${day}`;
    dispatch(
      changeBasketUserCopy({
        service: [...basketUserCopy?.service],
        master: { date: dateToday },
      })
    );
  }, [listSchedule]);

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
          {basketUserCopy?.master?.date && (
            <button className="zakaz" onClick={nextService}>
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
