import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommunityItem from "./components/CommunityItem";
// import "../../scss/page/_community.scss"
import { CommunityContext } from "./components/CommunityProvider";

const Community = () => {
  const { groups } = useContext(CommunityContext);
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate("/create-group");
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <div className="tabs">
          <button className="tab active">My</button>
          <button className="tab">커뮤 홈</button>
        </div>
      </div>
      <div className="community-subheader">
        <span className="subheader-title">참여중인 소모임</span>
        <button className="create-group" onClick={handleCreateGroup}>
          + 소모임 개설
        </button>
      </div>
      <div className="group-list">
        {groups.length > 0 ? (
          groups.map((group) => <CommunityItem key={group.id} group={group} />)
        ) : (
          <p>참여중인 커뮤니티를 찾을 수 없음</p>
        )}
      </div>
    </div>
  );
};

export default Community;
