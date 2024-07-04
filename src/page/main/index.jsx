import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedSection } from "../../Redux/main"
import { ReactComponent as ArrowfrontIcon } from "../../assets/main/Arrowfront.svg"
import { ReactComponent as ArrowbackIcon } from "../../assets/main/Arrowback.svg"

import MainPickerDay from "./components/MainPickerDay"
import MainPersonalRoutine from "./components/MainPersonalRoutine"
import MainGroupRoutine from "./components/MainGroupRoutine"

import groupDayData from "../../api/mock/groupDay.json"
import dayData from "../../api/mock/day.json"

const Main = () => {
  const [calendarData, setCalendarData] = useState(null)
  const [selectedDay, setSelectedDay] = useState("월")
  const [newRoutineInput, setNewRoutineInput] = useState("")

  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setCalendarData({
      personal: dayData.personal,
      groups: groupDayData.groups,
    })
    dispatch(setSelectedSection("view1"))
  }, [dispatch])

  useEffect(() => {
    console.log("selectedSection:", selectedSection)
  }, [selectedSection])

  if (!calendarData) {
    return <div>로딩중...</div>
  }

  const onClickSelectedDay = (weekday) => {
    setSelectedDay(weekday)
  }

  const calculateCompletionPercentage = (events) => {
    if (!events || events.length === 0) return 0
    const completedEvents = events.filter((event) => event.success).length
    return (completedEvents / events.length) * 100
  }

  const groupDayEvents = calendarData.groups?.map(
    (group) =>
      group.days.find((day) => day.weekday === selectedDay)?.events || []
  )
  const personalDayEvents =
    calendarData.personal.days.find((day) => day.weekday === selectedDay)
      ?.events || []

  return (
    <div className="main-page-container">
      <div className="main-page-calendar-container">
        <div className="main-page-calendar-title-container">
          <ArrowbackIcon />
          <h1 className="main-page-calendar-title-h1">
            {calendarData.personal.month}
          </h1>
          <ArrowfrontIcon />
        </div>
        <div className="main-page-calendar-days-container">
          {calendarData.personal.days.map((day) => (
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
        <MainPersonalRoutine
          routineData={personalDayEvents}
          setRoutineData={(updatedEvents) => {
            const updatedCalendarData = {
              ...calendarData,
              personal: {
                ...calendarData.personal,
                days: calendarData.personal.days.map((day) =>
                  day.weekday === selectedDay
                    ? { ...day, events: updatedEvents }
                    : day
                ),
              },
            }
            setCalendarData(updatedCalendarData)
          }}
        />
        <MainGroupRoutine
          routineData={groupDayEvents}
          setRoutineData={(updatedEvents) => {
            const updatedCalendarData = {
              ...calendarData,
              groups: calendarData.groups.map((group) =>
                group.days.map((day) =>
                  day.weekday === selectedDay
                    ? { ...day, events: updatedEvents }
                    : day
                )
              ),
            }
            setCalendarData(updatedCalendarData)
          }}
          newRoutineInput={newRoutineInput}
          setNewRoutineInput={setNewRoutineInput}
        />
      </div>
    </div>
  )
}

export default Main
