// src/page/community/components/CommunityHeader.jsx

import React from "react"
import { NavLink } from "react-router-dom"

const CommunityHeader = () => {
  return (
    <div className="community-header-container">
      <div className="Community-header-box">
        <div className="community-header-root">
          <NavLink
            to="/community/main"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            My
          </NavLink>
          <NavLink
            to="/community/home"
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
  )
}

export default CommunityHeader
