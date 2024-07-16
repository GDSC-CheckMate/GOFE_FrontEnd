import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CommunityShowProfileMenu = ({ profileName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path, { state: { profileName } });
  };

  const getClassName = (path) => {
    return location.pathname === path ? "nav-link underline" : "nav-link";
  };

  return (
    <div>
      <div className="community-show-profile-follow-title-menu">
        <div
          className={getClassName("/communityShowProfile")}
          onClick={() => handleNavigate("/communityShowProfile")}
        >
          팔로우
        </div>
        <div
          className={getClassName("/communityShowFollwers")}
          onClick={() => handleNavigate("/communityShowFollwers")}
        >
          팔로워
        </div>
        <div
          className={getClassName("/communityShowAddFreind")}
          onClick={() => handleNavigate("/communityShowAddFreind")}
        >
          친구추가
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default CommunityShowProfileMenu;
