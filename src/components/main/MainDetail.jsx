import React from "react"
import { ReactComponent as RoutinePlus } from "../../assets/main/RoutinePlus.svg"

const MainDetail = ({ selectedSection, setSelectedSection }) => {
  const onClickSelectedSection = (section) => {
    console.log(section)
    setSelectedSection(section)
  }

  return (
    <div className="main-page-detail-routine-container">
      <div className="main-page-detail-routine-selection-container">
        <div
          className={
            selectedSection === "오늘 목표🔥"
              ? "main-page-detail-routine-selection active"
              : "main-page-detail-routine-selection"
          }
          onClick={() => onClickSelectedSection("오늘 목표🔥")}
        >
          오늘 목표🔥
        </div>
        <div
          className={
            selectedSection === "루틴 추가"
              ? "main-page-detail-routine-selection active"
              : "main-page-detail-routine-selection"
          }
          onClick={() => onClickSelectedSection("루틴 추가")}
        >
          루틴 추가
        </div>
      </div>
      <hr className="main-page-detail-routine-selection-hr" />
      {selectedSection === "오늘 목표🔥" ? (
        <>
          <div className="main-page-detail-routine-title">
            개인 루틴
            <RoutinePlus onClick={() => onClickSelectedSection("루틴 추가")} />
          </div>
        </>
      ) : (
        <>
          <div className="main-page-detail-routine-add-title">
            루틴 추가하기
          </div>
          <div className="main-page-detail-routine-add-container">
            <input
              placeholder="12:00"
              className="main-page-detail-routine-add-input-time"
            />
            <input
              placeholder="목표를 적어보세요."
              className="main-page-detail-routine-add-input-content"
            />
          </div>
          <div className="main-page-detail-routine-day-title-container">
            <div className="main-page-detail-routine-day-title">실천 요일</div>
            <div className="main-page-detail-routine-day-sub-title">
              최소 2일 선택
            </div>
          </div>
          <div className="main-page-detail-routine-day-container">
            {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
              <div key={index} className="main-page-detail-routine-day-item">
                {day}
              </div>
            ))}
          </div>

          <div className="main-page-detail-routine-alert-title">알림 설정</div>
          {/* 알림 설정 로직을 나중에 만들어야 함 */}

          <hr className="main-page-detail-routine-alert-bottom-hr" />
        </>
      )}
    </div>
  )
}

export default MainDetail
