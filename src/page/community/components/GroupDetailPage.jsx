// src/page/community/components/GroupDetailPage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const group = useSelector((state) => state.community.groups.find(g => g.id === parseInt(groupId)));

  if (!group) {
    return <div>소모임을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="group-detail-page">
      <div className="group-detail-header">
        <img src={group.image} alt={group.name} />
        <h2>{group.name}</h2>
        <p>{group.notice}</p>
        <span>{group.time}</span>
      </div>
      <div className="group-detail-body">
        <h3>목표 기간</h3>
        <p>{group.goalStartDate} ~ {group.goalDuration}일</p>
        <h3>참여 인원</h3>
        <p>{group.members}명</p>
        <h3>모임 소개</h3>
        <p>{group.description}</p>
        <h3>키워드 설정</h3>
        <p>{group.keywords}</p>
      </div>
    </div>
  );
};

export default GroupDetailPage;
