import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const GroupHome = () => {
  const { group } = useOutletContext();
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [isGoalReached, setIsGoalReached] = useState(false);

  useEffect(() => {
    if (group) {
      const now = new Date();
      const startDate = new Date(group.startDate);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + group.duration);

      const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const remainingDays = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));

      if (remainingDays <= 0) {
        setDaysLeft(0);
        setProgress(100);
        setIsGoalReached(true);
      } else {
        setDaysLeft(remainingDays);
        setProgress(((totalDays - remainingDays) / totalDays) * 100);
        setIsGoalReached(false);
      }
    }
  }, [group]);

  return (
    <div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">{group.name}</h4>
        <p>인원 : {2}명 / 정원 : {group.members}명</p>
      </div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">목표 기간</h4>
        <p>{group.startDate} ~ {new Date(new Date(group.startDate).setDate(new Date(group.startDate).getDate() + group.duration)).toLocaleDateString()} ({group.duration}일)</p>
      </div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">{isGoalReached ? "목표 기간을 달성했습니다!🎉" : `목표 달성일까지 ${daysLeft}일 남았어요!`}</h4>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">모임 소개</h4>
        <p>{group.description}</p>
      </div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">키워드 설정</h4>
        <p>{Array.isArray(group.keywords) ? group.keywords.join(', ') : group.keywords}</p>
      </div>
      <div className="group-detail-section">
        <h4 className="group-detail-section-title">참여자 목록</h4>
        <p>여기에 참여자 뜸</p>
      </div>
    </div>
  );
};

export default GroupHome;
