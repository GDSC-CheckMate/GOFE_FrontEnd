import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityShowProfileMenu = ({ profileName }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path, { state: { profileName } });
  };

  return (
    <div>
      <div className="community-show-profile-follow-title-menu">
        <div
          className="community-show-profile-follow-title-menu-follow"
          onClick={() => handleNavigate("/communityShowProfile")}
        >
          팔로우
        </div>
        <div
          className="community-show-profile-follow-title-menu-followers "
          onClick={() => handleNavigate("/communityShowFollwers")}
        >
          팔로워
        </div>
        <div
          className="community-show-profile-follow-title-menu-add-friends"
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
