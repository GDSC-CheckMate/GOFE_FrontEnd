import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityProfilesList from "./CommunityProfilesList";
import CommunitySearch from "./CommunitySearch";
import CommunityMadeGroup from "./CommunityMadeGroup";
import { useNavigate } from "react-router-dom";

const CommunityHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CommunityHeader />
      <CommunityProfilesList />
      <CommunitySearch />
      <div className="community-home-subheader">
        <span className="community-home-subheader-title">인기 키워드</span>
        <button
          className="community-home-create-group"
          onClick={() => navigate("/creategroup")}
        >
          + 소모임 개설
        </button>
      </div>
    </div>
  );
};

export default CommunityHomePage;
