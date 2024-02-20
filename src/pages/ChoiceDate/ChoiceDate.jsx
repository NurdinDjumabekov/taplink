import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ChoiceDate.scss";
import "react-calendar/dist/Calendar.css";

const ChoiceDate = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  console.log(date, "date");
  return (
    <div className="dateChoice">
      <div className="dateChoice__inner">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default ChoiceDate;
