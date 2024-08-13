import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSection } from '../../redux/main';
import { ReactComponent as ArrowfrontIcon } from '../../assets/main/Arrowfront.svg';
import { ReactComponent as ArrowbackIcon } from '../../assets/main/Arrowback.svg';

import MainPickerDay from './components/MainPickerDay';
import MainPersonalRoutine from './components/MainPersonalRoutine';
import MainGroupRoutine from './components/MainGroupRoutine';

import groupDayData from '../../api/mock/groupDay.json';
import dayData from '../../api/mock/day.json';

const Main = () => {
  const [calendarData, setCalendarData] = useState(null);
  const [selectedDay, setSelectedDay] = useState('월');
  const [newRoutineInput, setNewRoutineInput] = useState('');

  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCalendarData({
      personal: dayData.personal,
      groups: groupDayData.groups,
    });
    dispatch(setSelectedSection('view1'));
  }, [dispatch]);

  const personalDayEvents = useMemo(() => {
    if (!calendarData) return [];
    const allEvents = [];

    calendarData.personal[0].recurringEvents.forEach((event) => {
      event.recurringDays.forEach((dayInfo) => {
        allEvents.push({
          ...event,
          weekday: dayInfo.day,
          success: dayInfo.success,
        });
      });
    });

    return allEvents.filter((event) => event.weekday === selectedDay);
  }, [calendarData, selectedDay]);

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
    );
  }, [calendarData, selectedDay]);

  const updateDayEvents = (updatedEvents, dayEventsType, groupId) => {
    const updatedCalendarData = {
      ...calendarData,
      [dayEventsType]: calendarData[dayEventsType].map((entry) => {
        if (dayEventsType === 'groups' && entry.id === groupId) {
          return {
            ...entry,
            days: entry.days.map((day) =>
              day.weekday === selectedDay
                ? { ...day, events: updatedEvents }
                : day
            ),
          };
        }
        if (dayEventsType === 'personal') {
          return {
            ...entry,
            recurringEvents: entry.recurringEvents.map((event) => {
              return {
                ...event,
                recurringDays: event.recurringDays.map((dayInfo) =>
                  dayInfo.day === selectedDay
                    ? {
                        ...dayInfo,
                        success: updatedEvents.find(
                          (e) => e.title === event.title
                        ).success,
                      }
                    : dayInfo
                ),
              };
            }),
          };
        }
        return entry;
      }),
    };
    setCalendarData(updatedCalendarData);
  };

  const onClickSelectedDay = (weekday) => {
    setSelectedDay(weekday);
  };

  const calculateCompletionPercentage = (events) => {
    if (!events || events.length === 0) return 0;
    const completedEvents = events.filter((event) => event.success).length;
    return (completedEvents / events.length) * 100;
  };

  const calculateDayCompletionPercentage = (personalEvents, groupEvents) => {
    const allEvents = [...personalEvents, ...groupEvents];
    return calculateCompletionPercentage(allEvents);
  };

  const dayEvents = useMemo(() => {
    if (!calendarData) return [];
    return calendarData.personal[0].week.map((dayObj) => {
      const personalEvents = calendarData.personal[0].recurringEvents.filter(
        (event) =>
          event.recurringDays.some((dayInfo) => dayInfo.day === dayObj.day)
      );
      const selectedPersonalEvents = personalEvents.map((event) => ({
        ...event,
        success: event.recurringDays.find(
          (dayInfo) => dayInfo.day === dayObj.day
        ).success,
      }));

      const groupEvents = calendarData.groups.flatMap((group) =>
        group.days.flatMap((day) => {
          if (day.weekday === dayObj.day) {
            return day.events;
          }
          return [];
        })
      );

      const completionPercentage = calculateDayCompletionPercentage(
        selectedPersonalEvents,
        groupEvents
      );

      return {
        ...dayObj,
        personalEvents: selectedPersonalEvents,
        groupEvents,
        completionPercentage,
      };
    });
  }, [calendarData]);

  if (!calendarData) {
    return <div>로딩중...</div>;
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
          {dayEvents.map((dayEvent, index) => (
            <MainPickerDay
              key={index}
              day={dayEvent.date}
              weekday={dayEvent.day}
              selectedDay={selectedDay}
              onClickSelectedDay={onClickSelectedDay}
              completionPercentage={dayEvent.completionPercentage}
              hasTodos={
                dayEvent.personalEvents.length + dayEvent.groupEvents.length > 0
              }
            />
          ))}
        </div>
      </div>
      <div className="main-page-detail-container">
        <MainPersonalRoutine
          routineData={personalDayEvents}
          setRoutineData={(updatedEvents) =>
            updateDayEvents(updatedEvents, 'personal')
          }
        />

        {selectedSection === 'view1' && (
          <div className="main-page-detail-group-routine-container">
            <div className="main-page-detail-group-routine-title">
              진행중인 소모임
            </div>
            {groupDayEvents.map((group) => (
              <MainGroupRoutine
                key={group.id}
                groupName={group.name}
                routineData={group.days}
                setRoutineData={(updatedEvents) =>
                  updateDayEvents(updatedEvents, 'groups', group.id)
                }
                newRoutineInput={newRoutineInput}
                setNewRoutineInput={setNewRoutineInput}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
