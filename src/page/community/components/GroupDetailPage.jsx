// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const GroupDetailPage = () => {
//   const { groupId } = useParams();
//   const group = useSelector((state) =>
//     state.community.groups.find((g) => g.id === parseInt(groupId))
//   );
//   const [progress, setProgress] = useState(0);
//   const [daysLeft, setDaysLeft] = useState(0);

//   useEffect(() => {
//     const footer = document.querySelector('.footer-container');
//     if (footer) footer.classList.add('hide-footer');
//     return () => {
//       if (footer) footer.classList.remove('hide-footer');
//     };
//   }, []);

//   useEffect(() => {
//     if (group) {
//       const now = new Date();
//       const startDate = new Date(group.startDate);
//       const endDate = new Date(startDate);
//       endDate.setDate(startDate.getDate() + group.duration);
//       const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
//       const remainingDays = (endDate - now) / (1000 * 60 * 60 * 24);

//       if (remainingDays <= 0) {
//         setDaysLeft(0);
//         setProgress(100);
//       } else {
//         setDaysLeft(Math.ceil(remainingDays));
//         setProgress(((totalDays - remainingDays) / totalDays) * 100);
//       }
//     }
//   }, [group]);

//   if (!group) {
//     return <p>그룹을 찾을 수 없음</p>;
//   }

//   return (
//     <div className="group-detail-page">
//       <div className="group-detail-header">
//         <button className="back-button" onClick={() => window.history.back()}>&lt;</button>
//         <span className="group-detail-name">{group.name}</span>
//       </div>
//       <div className="group-detail-tabs">
//         <button className="tab active">홈</button>
//         <button className="tab">채팅</button>
//         <button className="tab">성취</button>
//         <button className="tab">공지글</button>
//       </div>
//       <div className="group-detail-image">
//         <img src={group.image} alt={group.name} />
//       </div>
//       <div className="group-detail-body">
//         <div className="group-detail-section">
//           <h4 className="group-detail-section-title">목표 기간</h4>
//           <p>{group.startDate} ~ {new Date(new Date(group.startDate).setDate(new Date(group.startDate).getDate() + group.duration)).toLocaleDateString()} ({group.duration}일)</p>
//         </div>
//         <div className="group-detail-section">
//           <h4 className="group-detail-section-title">목표 달성일까지 {daysLeft}일 남았어요!</h4>
//           <div className="progress-bar-container">
//             <div className="progress-bar">
//               <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
//             </div>
//             <span>{daysLeft}일</span>
//           </div>
//         </div>
//         <div className="group-detail-section">
//           <h4 className="group-detail-section-title">모임 소개</h4>
//           <p>{group.description}</p>
//         </div>
//         <div className="group-detail-section">
//           <h4 className="group-detail-section-title">키워드 설정</h4>
//           <p>{Array.isArray(group.keywords) ? group.keywords.join(', ') : group.keywords}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupDetailPage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const group = useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  );
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [isGoalReached, setIsGoalReached] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('.footer-container');
    if (footer) footer.classList.add('hide-footer');
    return () => {
      if (footer) footer.classList.remove('hide-footer');
    };
  }, []);

  useEffect(() => {
    if (group) {
      const now = new Date();
      const startDate = new Date(group.startDate);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + group.duration);
      const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
      const remainingDays = (endDate - now) / (1000 * 60 * 60 * 24);

      if (remainingDays <= 0) {
        setDaysLeft(0);
        setProgress(100);
        setIsGoalReached(true);
      } else {
        setDaysLeft(Math.ceil(remainingDays));
        setProgress(((totalDays - remainingDays) / totalDays) * 100);
        setIsGoalReached(false);
      }
    }
  }, [group]);

  if (!group) {
    return <p>그룹을 찾을 수 없음</p>;
  }

  return (
    <div className="group-detail-page">
      <div className="group-detail-header">
        <button className="back-button" onClick={() => window.history.back()}>&lt;</button>
        <span className="group-detail-name">{group.name}</span>
      </div>
      <div className="group-detail-tabs">
        <button className="tab active">홈</button>
        <button className="tab">채팅</button>
        <button className="tab">성취</button>
        <button className="tab">공지글</button>
      </div>
      <div className="group-detail-image">
        <img src={group.image} alt={group.name} />
      </div>
      <div className="group-detail-body">
        <div className="group-detail-section">
          <h4 className="group-detail-section-title">{group.name}</h4>
          <p>인원 : {3}명 / 정원 : {group.members}명</p>
        </div>
        <div className="group-detail-section">
          <h4 className="group-detail-section-title">목표 기간</h4>
          <p>{group.startDate} ~ {new Date(new Date(group.startDate).setDate(new Date(group.startDate).getDate() + group.duration)).toLocaleDateString()} ({group.duration}일)</p>
        </div>
        <div className="group-detail-section">
          <h4 className="group-detail-section-title">{isGoalReached ? "축하드립니다! 목표 기간을 달성했습니다!🎉" : `목표 달성일까지 ${daysLeft}일 남았어요!`}</h4>
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
      </div>
    </div>
  );
};

export default GroupDetailPage;
