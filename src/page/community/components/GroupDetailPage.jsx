import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const group = useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  );
  const [activeTab, setActiveTab] = useState('home');

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
        <button className="back-button" onClick={() => navigate('/CommunityMainPage')}>&lt;</button>
        <span className="group-detail-name">{group.name}</span>
      </div>
      <div className="group-detail-tabs">
        <NavLink className="tab" to={`/group/${groupId}/home`} end onClick={() => setActiveTab('home')}>홈</NavLink>
        <NavLink className="tab" to={`/group/${groupId}/chat`} onClick={() => setActiveTab('chat')}>채팅</NavLink>
        <NavLink className="tab" to={`/group/${groupId}/achievements`} onClick={() => setActiveTab('achievements')}>성취</NavLink>
        <NavLink className="tab" to={`/group/${groupId}/notices`} onClick={() => setActiveTab('notices')}>공지글</NavLink>
      </div>
      {activeTab === 'home' && group.image && (
        <div className="group-detail-image">
          <img src={group.image} alt={group.name} />
        </div>
      )}
      <div className="group-detail-body">
        <Outlet context={{ group }} />
      </div>
    </div>
  );
};

export default GroupDetailPage;
