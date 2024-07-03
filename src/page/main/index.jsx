import React, { useState, useEffect } from "react"
import dayData from "../../api/mock/day.json"

import { useDispatch, useSelector } from "react-redux"
import { setSelectedSection } from "../../Redux/main"

import { ReactComponent as ArrowfrontIcon } from "../../assets/main/Arrowfront.svg"
import { ReactComponent as ArrowbackIcon } from "../../assets/main/Arrowback.svg"
import MainPickerDay from "./components/MainPickerDay"
import MainDetail from "./components/MainDetail"

const Main = () => {
  const [calendarData, setCalendarData] = useState(null)
  const [selectedDay, setSelectedDay] = useState("월")
  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setCalendarData(dayData)
    dispatch(setSelectedSection("view1"))
  }, [])

  useEffect(() => {
    console.log("selectedSection:", selectedSection)
  }, [selectedSection])

  if (!calendarData) {
    return <div>로딩중...</div>
  }

  const onClickSelectedDay = (weekday) => {
    console.log(weekday)
    setSelectedDay(weekday)
  }

  const calculateCompletionPercentage = (events) => {
    if (!events || events.length === 0) return 0
    const completedEvents = events.filter((event) => event.success).length
    return (completedEvents / events.length) * 100
  }

  const selectedDayEvents =
    calendarData.days.find((day) => day.weekday === selectedDay)?.events || []

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
              completionPercentage={calculateCompletionPercentage(day.events)}
              hasTodos={day.events && day.events.length > 0}
            />
          ))}
        </div>
      </div>
      <div className="main-page-detail-container">
        <MainDetail
          routineData={selectedDayEvents}
          setRoutineData={(setSelectedDayEvents) => {
            const updatedCalendarData = calendarData.days.map((day) =>
              day.weekday === selectedDay
                ? { ...day, events: setSelectedDayEvents }
                : day
            )
            setCalendarData({ ...calendarData, days: updatedCalendarData })
          }}
        />
      </div>
    </div>
  )
}

export default Main
