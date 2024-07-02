import React, { useState, useEffect } from "react"
import { ReactComponent as ArrowfrontIcon } from "../../assets/main/Arrowfront.svg"
import { ReactComponent as ArrowbackIcon } from "../../assets/main/Arrowback.svg"
import dayData from "../../api/mock/day.json"
import MainPickerDay from "../../components/main/MainPickerDay"
import MainDetail from "../../components/main/MainDetail"

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

  return (
    <div className="main-page-container">
      <div className="main-page-calendar-container">
        <div className="main-page-calendar-title-container">
          <ArrowbackIcon />
          <h1 className="main-page-calendar-title-h1">{calendarData.month}</h1>
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
        <MainDetail
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </div>
    </div>
  )
}

export default Main
