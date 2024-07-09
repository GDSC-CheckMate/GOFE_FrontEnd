import React from "react";
import CommunityShowProfileMenu from "./CommunityShowProfileMenu";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";
const CommunityShowAddFreind = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="community-show-profile-follow-header-container-box">
        <div
          className="community-show-profile-follow-header-back-icon"
          onClick={() => navigate("/CommunityHomePage")}
        >
          <Back />
        </div>
        <div className="community-show-profile-follow-header-title">
          친구추가
        </div>
      </div>
      <CommunityShowProfileMenu />
    </div>
  );
};

export default CommunityShowAddFreind;
