// src/page/community/components/CommunityHeader.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const CommunityHeader = () => {
  return (
    <div>
      <div className="community-header-container">
        <div className="community-header-root">
          <NavLink
            to="/CommunityMainPage"
            className={({ isActive }) => (isActive ? 'nav-link underline' : 'nav-link')}
          >
            My
          </NavLink>
          <NavLink
            to="/CommunityHomePage"
            className={({ isActive }) => (isActive ? 'nav-link underline' : 'nav-link')}
          >
            커뮤홈
          </NavLink>
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default CommunityHeader;