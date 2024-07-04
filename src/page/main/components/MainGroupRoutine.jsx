import React from "react"
import { ReactComponent as GroupRoutinePlus } from "../../../assets/main/GroupRoutinePlus.svg"
import { ReactComponent as Check } from "../../../assets/main/Check.svg"
import { ReactComponent as NotCheck } from "../../../assets/main/NotCheck.svg"

const MainGroupRoutine = ({
  routineData,
  setRoutineData,
  newRoutineInput,
  setNewRoutineInput,
}) => {
  const updateRoutineItem = (index, value) => {
    const updatedRoutines = routineData.map((event, i) =>
      i === index ? { ...event, title: value } : event
    )
    setRoutineData(updatedRoutines)
  }

  const toggleRoutineSuccess = (index) => {
    const updatedRoutines = routineData.map((event, i) =>
      i === index ? { ...event, success: !event.success } : event
    )
    setRoutineData(updatedRoutines)
  }

  const onChangeRoutineInput = (e) => {
    e.preventDefault()
    if (newRoutineInput.trim() === "") return

    const updatedRoutines = [
      ...routineData,
      { title: newRoutineInput, success: false },
    ]
    setRoutineData(updatedRoutines)
    setNewRoutineInput("")
  }

  const addRoutineItem = () => {
    setNewRoutineInput([...newRoutineInput, ""])
  }

  return (
    <div className="main-page-detail-group-routine-container">
      <div className="main-page-detail-group-routine-title">
        진행중인 소모임
      </div>
      <div className="main-page-detail-group-routine-content-container">
        <div className="main-page-detail-group-routine-content-title-container">
          <div className="main-page-detail-group-routine-content-title">
            {routineData.group}
            <GroupRoutinePlus onClick={addRoutineItem} />
          </div>
        </div>
        <div className="main-page-detail-group-routine-content">
          {routineData.map((event, index) => (
            <div
              key={index}
              className="main-page-detail-group-routine-item-contianer"
            >
              <input
                className="main-page-detail-group-routine-item-input"
                type="text"
                value={event.title}
                onChange={(e) => updateRoutineItem(index, e.target.value)}
              />
              <div onClick={() => toggleRoutineSuccess(index)}>
                {event.success ? <Check /> : <NotCheck />}
              </div>
            </div>
          ))}
          <form
            className="main-page-detail-group-routine-item-create-input-container"
            onSubmit={onChangeRoutineInput}
          >
            <input
              className="main-page-detail-group-routine-item-create-input"
              type="text"
              value={newRoutineInput}
              onChange={(e) => setNewRoutineInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainGroupRoutine
