// src/page/community/components/GroupDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GroupDetailHeaderTabs from './GroupDetailHeaderTabs';

const GroupDetailPage = () => {
  const { groupId } = useParams();
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
      <GroupDetailHeaderTabs groupName={group.name} setActiveTab={setActiveTab} />
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
