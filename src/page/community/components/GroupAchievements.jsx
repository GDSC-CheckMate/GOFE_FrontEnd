import React, { useEffect, useState } from 'react';
import GroupAchievementsCalendar from './GroupAchievementsCalendar';
import { useOutletContext } from 'react-router-dom';

const achievements = [
  { date: '2024-06-02', percentage: 50 },
  { date: '2024-06-05', percentage: 75 },
  // Add more achievements here
];

const GroupAchievements = () => {
  const importancePercentage = 78;  // 지금은 임시로 user data가 없기 때문에 78로 설정했지만 나중에 user data가 있으면 그걸로 설정
  const {group} = useOutletContext();
  const startDate = new Date(group.startDate);
  const currentDate = new Date();

  const calculateDaysPassed = (start, current) => {
    const oneDayInMs = 1000 * 60 * 60 * 24;  // 하루를 밀리초로 계산
    const diffInMs = currentDate.getTime() - startDate.getTime();  // 날짜 차이를 밀리초로 계산
    const daysPassed = Math.ceil(diffInMs / oneDayInMs);
    return daysPassed < 0 ? 0 : daysPassed;
  }

  const daysPassed = calculateDaysPassed(startDate, currentDate); 

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

  const [importanceFillWidth, setImportanceFillWidth] = useState(0);
  const [goalFillWidth, setGoalFillWidth] = useState('0%');

  useEffect(() => {
    setImportanceFillWidth(importancePercentage);
  }, [importancePercentage]);

  useEffect(() => {   // 마찬가지로 나중에 user data가 오면 그걸로 목표 바 설정
    setGoalFillWidth('50%');
  }, []);

  return (
    <div className="group-achievements-container">
      <main className="group-achievements-main-content">
        <section className="group-achievements-calendar-section">
          <GroupAchievementsCalendar achievements={achievements} />
        </section>
        <section className="group-achievements-goals-section">
          <div className="group-achievements-goal">
            <h3 className="group-achievements-goal-title">나의 목표</h3>
            <h3 className="group-achievements-goal-description">리액트 강의 다 듣기</h3>
          </div>
          <div className="group-achievements-importance-section">
            <span className="group-achievements-static-importance">중요도</span>
            <span className="group-achievements-user-importance"> 
              {getImportanceText(importancePercentage)}
            </span>
            <div className="group-achievement-importance-bar">
              <div 
                className="group-achievement-importance-fill" 
                style={{ width: `${importanceFillWidth}%` }}>
              </div>
            </div>
          </div>
          <div className="group-achievement-progress">
            <span className="group-achievement-progress-title">목표 달성률✨</span>
            <div className="group-achievement-progress-bar">
              <div 
                className="group-achievement-progress-fill" 
                style={{ width: `${goalFillWidth}` }}>
              </div>
            </div>
            <div className="group-achievement-progress-summary">
              <span>
                <div>목표 기간</div>
                <div>{group.duration}일</div>
              </span>
              <span>
                <div>달성 일수</div>
                <div>{daysPassed}<span className='highlight'>/{group.duration}일</span></div>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GroupAchievements;
