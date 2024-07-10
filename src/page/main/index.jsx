import React, { useState, useEffect, useMemo } from "react"
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

  const groupDayEvents = useMemo(() => {
    return (
      calendarData?.groups?.map((group) => ({
        id: group.id,
        name: group.group,
        month: group.month,
        days: group.days
          .filter((day) => day.weekday === selectedDay)
          .flatMap((day) => day.events),
      })) || []
    )
  }, [calendarData, selectedDay])

  const personalDayEvents = useMemo(() => {
    return (
      calendarData?.personal
        ?.find((date) => date.days.some((day) => day.weekday === selectedDay))
        ?.days.find((day) => day.weekday === selectedDay)?.events || []
    )
  }, [calendarData, selectedDay])

  const updateDayEvents = (updatedEvents, dayEventsType, groupId) => {
    const updatedCalendarData = {
      ...calendarData,
      [dayEventsType]: calendarData[dayEventsType].map((entry) => {
        if (dayEventsType === "groups" && entry.id === groupId) {
          return {
            ...entry,
            days: entry.days.map((day) =>
              day.weekday === selectedDay
                ? { ...day, events: updatedEvents }
                : day
            ),
          }
        }
        if (dayEventsType === "personal") {
          return {
            ...entry,
            days: entry.days.map((day) =>
              day.weekday === selectedDay
                ? { ...day, events: updatedEvents }
                : day
            ),
          }
        }
        return entry
      }),
    }
    setCalendarData(updatedCalendarData)
  }

  useEffect(() => {
    console.log("groupDayEvents:", groupDayEvents)
  }, [groupDayEvents])

  const onClickSelectedDay = (weekday) => {
    setSelectedDay(weekday)
  }

  const calculateCompletionPercentage = (events) => {
    if (!events || events.length === 0) return 0
    const completedEvents = events.filter((event) => event.success).length
    return (completedEvents / events.length) * 100
  }

  const calculateDayCompletionPercentage = (personalEvents, groupEvents) => {
    const allEvents = [...personalEvents, ...groupEvents]
    return calculateCompletionPercentage(allEvents)
  }

  if (!calendarData) {
    return <div>로딩중...</div>
  }

  return (
    <div className="main-page-container">
      <div className="main-page-calendar-container">
        <div className="main-page-calendar-title-container">
          <ArrowbackIcon />
          <h1 className="main-page-calendar-title-h1">
            {calendarData.personal[0].month}
          </h1>
          <ArrowfrontIcon />
        </div>
        <div className="main-page-calendar-days-container">
          {calendarData.personal[0].days.map((day) => {
            const personalEvents = day.events || []
            const groupEventsForDay = calendarData.groups.flatMap((group) =>
              group.days
                .filter((groupDay) => groupDay.weekday === day.weekday)
                .flatMap((groupDay) => groupDay.events)
            )

            const completionPercentage = calculateDayCompletionPercentage(
              personalEvents,
              groupEventsForDay
            )

            return (
              <MainPickerDay
                key={day.day}
                day={day.day}
                weekday={day.weekday}
                selectedDay={selectedDay}
                onClickSelectedDay={onClickSelectedDay}
                completionPercentage={completionPercentage}
                hasTodos={personalEvents.length + groupEventsForDay.length > 0}
              />
            )
          })}
        </div>
      </div>
      <div className="main-page-detail-container">
        <MainPersonalRoutine
          routineData={personalDayEvents}
          setRoutineData={(updatedEvents) =>
            updateDayEvents(updatedEvents, "personal")
          }
        />
        <div className="main-page-detail-group-routine-container">
          <div className="main-page-detail-group-routine-title">
            진행중인 소모임
          </div>
          {calendarData.groups.map((group) => {
            const groupEventsForSelectedDay = group.days
              .filter((day) => day.weekday === selectedDay)
              .flatMap((day) => day.events)

            return (
              <MainGroupRoutine
                key={group.id}
                groupName={group.group}
                routineData={groupEventsForSelectedDay}
                setRoutineData={(updatedEvents) =>
                  updateDayEvents(updatedEvents, "groups", group.id)
                }
                newRoutineInput={newRoutineInput}
                setNewRoutineInput={setNewRoutineInput}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main
