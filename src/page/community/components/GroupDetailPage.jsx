import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const group = useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  );

  useEffect(() => {
    const footer = document.querySelector('.footer-container');
    if (footer) footer.classList.add('hide-footer');
    return () => {
      if (footer) footer.classList.remove('hide-footer');
    };
  }, []);

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
          <p>{group.duration}일</p>
        </div>
        <div className="group-detail-section">
          <h4 className="group-detail-section-title">참여 인원</h4>
          <p>{group.members} 명</p>
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
