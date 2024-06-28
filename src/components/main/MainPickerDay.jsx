import React from "react"

const MainPickerDay = ({ day, weekday, selectedDay, onClickSelectedDay }) => {
  const activeDay = (weekday) => {
    return selectedDay === weekday
  }
  return (
    <div onClick={() => onClickSelectedDay(weekday)}>
      <div
        key={day}
        className={`main-page-calendar-days-item-container ${
          activeDay(weekday) ? "active" : ""
        }`}
      >
        <div
          className={`main-page-calendar-days-item-weekday ${
            activeDay(weekday) ? "active" : ""
          }`}
        >
          {weekday}
        </div>
        <div className={`main-page-calendar-days-item-day`}>
          <div className={`${activeDay(weekday) ? "active" : ""}`}>{day}</div>
        </div>
      </div>
    </div>
  )
}

export default MainPickerDay
