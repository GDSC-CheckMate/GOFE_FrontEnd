import React from "react";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";
import { useNavigate } from "react-router-dom";
import CommunityShowProfileMenu from "./CommunityShowProfileMenu";
import CommunityShowFollowList from "./CommunityShowFollowList";
import { useLocation } from "react-router-dom";

const followlist = [
  {
    id: 1,
    name: "은진",
  },
  {
    id: 2,
    name: "른딘",
  },
  {
    id: 3,
    name: "최은진",
  },
  {
    id: 4,
    name: "릉빵이",
  },
  {
    id: 5,
    name: "현용찬",
  },
  {
    id: 4,
    name: "용찬",
  },
  {
    id: 4,
    name: "용차니",
  },
];

const CommunityShowProfile = () => {
  const navigate = useNavigate();

  const totalProfiles = followlist ? followlist.length : 0;

  return (
    <div className="community-show-container-view">
      <div className="community-show-profile-follow-header-container-box">
        <div
          className="community-show-profile-follow-header-back-icon"
          onClick={() => navigate("/community/home")}
        >
          <Back />
        </div>
        <div className="community-show-profile-follow-header-title">팔로우</div>
      </div>
      <CommunityShowProfileMenu />
      <div className="community-show-profile-friend-count">
        친구: {totalProfiles}명
      </div>
      {followlist &&
        followlist.map((follow_profile) => (
          <CommunityShowFollowList
            key={follow_profile}
            follow_profile={follow_profile}
          />
        ))}
    </div>
  );
};

export default CommunityShowProfile;
