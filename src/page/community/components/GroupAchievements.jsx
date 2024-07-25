import React from 'react';
import GroupAchievementsCalendar from './GroupAchievementsCalendar';

const achievements = [
  { date: '2024-06-02', percentage: 50 },
  { date: '2024-06-05', percentage: 75 },
  // Add more achievements here
];

const GroupAchievements = () => {
  const importancePercentage = 78;

  const getImportanceText = (percentage) => {
    if (percentage <= 25) {
      return "그렇게 중요하지 않아요";
    } else if (percentage <= 50) {
      return "중요하지만 우선순위는 아니에요";
    } else if (percentage <= 75) {
      return "꽤 중요한 목표에요!";
    } else {
      return "매우 중요한 목표에요!";
    }
  };

  return (
    <div className="achievements-container">
      <main className="main-content">
        <section className="calendar-section">
          <GroupAchievementsCalendar achievements={achievements} />
        </section>
        <section className="goals-section">
          <div className="goal">
            <h3 className="goal-title">나의 목표</h3>
            <h3 className="goal-description">리액트 강의 다 듣기</h3>
          </div>
          <div className="importance-section">
            <span className="static-importance">중요도</span>
            <span className="user-importance"> {getImportanceText(importancePercentage)}</span>
            <div className="group-achievement-importance-bar">
              <div className="group-achievement-importance-fill" style={{ width: `${importancePercentage}%` }}></div>
            </div>
          </div>
          <div className="group-achievement-progress">
            <span className="group-achievement-progress-title">목표 달성률✨</span>
            <div className="group-achievement-progress-bar">
              <div className="group-achievement-progress-fill" style={{ width: '50%' }}></div>
            </div>
            <div className="group-achievement-progress-summary">
              <span>목표 기간: 100일</span>
              <span>달성 일수: 50일 (50%)</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GroupAchievements;
