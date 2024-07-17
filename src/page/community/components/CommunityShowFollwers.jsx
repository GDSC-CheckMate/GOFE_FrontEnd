import React from "react";
import CommunityShowProfileMenu from "./CommunityShowProfileMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";
import CommunityShowFollowList from "./CommunityShowFollowList";
import CommunityShowFollwers_list from "./CommunityShowFollwers_list";

const followerlist = [
  {
    id: 1,
    name: "은진이",
    followstate: "ok",
  },
  {
    id: 2,
    name: "른딘2",
    followstate: "ok",
  },
  {
    id: 3,
    name: "최은진",
    followstate: "ok",
  },
  {
    id: 4,
    name: "릉빵이",
    followstate: "ok",
  },
  {
    id: 5,
    name: "현용찬",
    followstate: "ok",
  },
  {
    id: 4,
    name: "용찬",
    followstate: "no",
  },
  {
    id: 4,
    name: "용차니",
    followstate: "no",
  },
  {
    id: 5,
    name: "현용찬",
    followstate: "no",
  },
];

const CommunityShowFollwers = () => {
  const navigate = useNavigate();
  const totalfollowers = followerlist ? followerlist.length : 0;

  return (
    <div className="community-show-container-view">
      <div className="community-show-profile-follow-header-container-box">
        <div
          className="community-show-profile-follow-header-back-icon"
          onClick={() => navigate("/community/CommunityHomePage")}
        >
          <Back />
        </div>
        <div className="community-show-profile-follow-header-title">팔로워</div>
      </div>
      <CommunityShowProfileMenu />
      <div className="community-show-profile-friend-count">
        친구: {totalfollowers}명
      </div>
      {followerlist &&
        followerlist.map((followers_profile) => (
          <CommunityShowFollwers_list
            key={followers_profile}
            followers_profile={followers_profile}
          />
        ))}
    </div>
  );
};

export default CommunityShowFollwers;
