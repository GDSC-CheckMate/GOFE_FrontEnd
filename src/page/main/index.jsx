import React, { useState, useEffect } from "react"
import { ReactComponent as ArrowfrontIcon } from "../../assets/home/Arrowfront.svg"
import { ReactComponent as ArrowbackIcon } from "../../assets/home/Arrowback.svg"
import dayData from "../../api/mock/day.json"
import MainPickerDay from "../../components/main/MainPickerDay"

const Main = () => {
  const [calendarData, setCalendarData] = useState(null)
  const [selectedDay, setSelectedDay] = useState("월")
  const [selectedSection, setSelectedSection] = useState("오늘 목표🔥")

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

  const onClickSelectedSection = (section) => {
    console.log(section)
    setSelectedSection(section)
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
            <MainPickerDay
              key={day.day}
              day={day.day}
              weekday={day.weekday}
              selectedDay={selectedDay}
              onClickSelectedDay={onClickSelectedDay}
            />
          ))}
        </div>
      </div>
      <div className="main-page-detail-container">
        <div className="main-page-detail-routine-container">
          <div className="main-page-detail-routine-selection-container">
            <div
              className="main-page-detail-routine-selection"
              onClick={() => onClickSelectedSection("오늘 목표🔥")}
            >
              오늘 목표🔥
            </div>
            <div className="main-page-detail-routine-selection">루틴 추가</div>
          </div>
          <hr className="main-page-detail-routine-selection-hr" />
        </div>
      </div>
    </div>
  )
}

export default Main
