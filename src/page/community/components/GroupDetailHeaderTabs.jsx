// src/page/community/components/GroupDetailHeaderTabs.jsx

import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const GroupDetailHeaderTabs = ({ groupName, setActiveTab }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div className="group-detail-header-tabs">
      <div className="group-detail-header">
        <button className="back-button" onClick={() => navigate('/CommunityMainPage')}>
          &lt;
        </button>
        <span className="group-detail-name">{groupName}</span>
      </div>
      <div className="group-detail-tabs">
        <NavLink className="tab" to={`/group/${groupId}/home`} end onClick={() => setActiveTab('home')}>
          홈
        </NavLink>
        <NavLink className="tab" to={`/group/${groupId}/chat`} onClick={() => setActiveTab('chat')}>
          채팅
        </NavLink>
        <NavLink className="tab" to={`/group/${groupId}/achievements`} onClick={() => setActiveTab('achievements')}>
          성취
        </NavLink>
        <NavLink className="tab" to={`/group/${groupId}/notices`} onClick={() => setActiveTab('notices')}>
          공지글
        </NavLink>
      </div>
    </div>
  );
};

GroupDetailHeaderTabs.propTypes = {
  groupName: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default GroupDetailHeaderTabs;
