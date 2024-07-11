// src/page/community/components/CommunityHeader.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const CommunityHeader = () => {
  return (
    <div className="community-header-container">
      <div className="Community-header-box">
        <div className="community-header-root">
          <NavLink
            to="/CommunityMainPage"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            My

          </NavLink>
          <NavLink
            to="/CommunityHomePage"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            커뮤홈
          </NavLink>        
        </div>
        <div className="mypage-root-line" />
      </div>
    </div>
  );
};

export default CommunityHeader;
