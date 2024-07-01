// src/components/CommunityItem.jsx
import React from 'react';
import '../scss/components/_communityItem.scss';

const CommunityItem = ({ group }) => {
  return (
    <div className="group-item">
      <div className="group-icon">
        <img src={group.image} alt={group.name} />
      </div>
      <div className="group-details">
        <div className="group-name">{group.name}</div>
        <div className="group-notice">{group.notice}</div>
      </div>
      <div className="group-info">
        <div className="group-time">{group.time}</div>
        {group.badge && <div className="group-badge">{group.badge}</div>}
      </div>
    </div>
  );
};

export default CommunityItem;
