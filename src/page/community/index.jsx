import React from "react";
import "../../scss/page/_community.scss"; // 스타일 파일을 정확한 경로로 import

const Community = () => {
  const groups = [
    {
      id: 1,
      name: "리액트 100일 스터디",
      notice: "호스트가 공지글을 게시했습니다.",
      time: "오후 8:36",
      image: "/path/to/react_study.png",
    },
    {
      id: 2,
      name: "토익 스터디 커뮤니티",
      notice: "@Lundean 님이 입장했습니다.",
      time: "오후 5:40",
      image: "/path/to/toeic_study.png",
      badge: "50+",
    },
  ];

  return (
    <div className="community-page">
      <div className="community-header">
        <div className="tabs">
          <button className="tab active">My</button>
          <button className="tab">커뮤홈</button>
        </div>
      </div>
      <div className="community-subheader">
        <span className="subheader-title">참여중인 소모임</span>
        <button className="create-group">+ 소모임 개설</button>
      </div>
      <div className="group-list">
        {groups.map((group) => (
          <div key={group.id} className="group-item">
            <div className="group-icon">
              <img src={group.image} alt={group.name} />
            </div>
            <div className="group-details">
              <div className="group-name">{group.name}</div>
              <div className="group-notice">{group.notice}</div>
              <div className="group-time">{group.time}</div>
              {group.badge && <div className="group-badge">{group.badge}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
