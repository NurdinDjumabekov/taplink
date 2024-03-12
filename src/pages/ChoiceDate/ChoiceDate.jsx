import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ChoiceDate.scss";
import { useDispatch, useSelector } from "react-redux";
import { daysOfWeek } from "../../helpers/dataArr";
import { transformDate } from "../../helpers/transformDate";
import { changeListTime } from "../../store/reducers/stateSlice";
import { copyAddBasketMaster } from "../../store/reducers/saveDataSlice";

const ChoiceDate = () => {
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  const dispatch = useDispatch();
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
    dispatch(copyAddBasketMaster({})); /// удаляю объект при повторном нажатии
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
      dispatch(changeListTime([...listTime]));
    }
  };

  const choiceTime = (time) => {
    if (time === timeMaster) {
      dispatch(copyAddBasketMaster({})); /// удаляю объект при повторном нажатии
    } else {
      dispatch(copyAddBasketMaster({ time, date: "today" })); /// добавляю объект
    }
  };

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
        </div>
      </div>
    </div>
  );
};

export default ChoiceDate;

// функция для генераци времени
const generateTimeIntervals = (earliestTime, latestTime) => {
  const intervals = [];
  let currentInterval = earliestTime;

  while (currentInterval <= latestTime) {
    intervals.push(currentInterval);
    const [hours, minutes] = currentInterval.split(":").map(Number);
    const nextTime = new Date();
    nextTime.setHours(hours);
    nextTime.setMinutes(minutes + 30);
    currentInterval = `${nextTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${nextTime.getMinutes().toString().padStart(2, "0")}`;
  }

  return intervals;
};
