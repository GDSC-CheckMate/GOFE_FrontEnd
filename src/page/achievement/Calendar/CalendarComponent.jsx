import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./CalendarComponent.module.scss";
const CalendarComponent = ({ value }) => {
  return <Calendar value={value}></Calendar>;
};

export default CalendarComponent;
