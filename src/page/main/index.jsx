import React, { useState, useEffect } from "react"
import { ReactComponent as ArrowfrontIcon } from "../../assets/home/Arrowfront.svg"
import { ReactComponent as ArrowbackIcon } from "../../assets/home/Arrowback.svg"
import dayData from "../../api/mock/day.json"

const Main = () => {
  const [calendarData, setCalendarData] = useState(null)
  const [selectedDay, setSelectedDay] = useState("월")

  useEffect(() => {
    setCalendarData(dayData)
  }, [])

  if (!calendarData) {
    return <div>로딩중...</div>
  }

  const onClickSelectedDay = (weekday) => {
    console.log(weekday)
    setSelectedDay(weekday)
  }

  const activeDay = (weekday) => {
    return selectedDay === weekday
  }

  return (
    <div className="main-page-container">
      <div className="main-page-calendar-container">
        <div className="main-page-calendar-title-container">
          <ArrowbackIcon />
          <div>{calendarData.month}</div>
          <ArrowfrontIcon />
        </div>
        <div className="main-page-calendar-days-container">
          {calendarData.days.map((day) => (
            <div onClick={() => onClickSelectedDay(day.weekday)}>
              <div
                key={day.day}
                className={`main-page-calendar-days-item-container ${
                  activeDay(day.weekday) ? "active" : ""
                }`}
              >
                <div
                  className={`main-page-calendar-days-item-weekday ${
                    activeDay(day.weekday) ? "active" : ""
                  }`}
                >
                  {day.weekday}
                </div>
                <div className={`main-page-calendar-days-item-day`}>
                  <div className={`${activeDay(day.weekday) ? "active" : ""}`}>
                    {day.day}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main-page-calendar-detail-container"></div>
    </div>
  )
}

export default Main
