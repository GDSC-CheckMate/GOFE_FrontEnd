import React from 'react';
import GroupAchievementsCalendar from './GroupAchievementsCalendar';

const achievements = [
  { date: '2024-06-02', percentage: 50 },
  { date: '2024-06-05', percentage: 75 },
  // Add more achievements here
];

const GroupAchievements = () => {
  return (
    <div className="achievements-container">
      <main className="main-content">
        <section className="calendar-section">
          <GroupAchievementsCalendar achievements={achievements} />
        </section>
        <section className="goals-section">
          <div className="goal">
            <h3 className="goal-title">나의 목표</h3>
            <p className="goal-description">리액트 강의 다 듣기</p>
            <span className="goal-status">ON</span>
          </div>
          <div className="importance">
            <span>중요도</span>
            <div className="importance-bar">
              <div className="importance-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="progress">
            <span className="progress-title">목표 달성률</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '50%' }}></div>
            </div>
            <div className="progress-summary">
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
