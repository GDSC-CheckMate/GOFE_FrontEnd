import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommunityItem from "./CommunityItem";
// import "../../scss/page/_community.scss"
import { CommunityContext } from "./CommunityProvider";
import CommunityHeader from "./CommunityHeader";

const CommunityMainPage = () => {
  const { groups } = useContext(CommunityContext);
  const navigate = useNavigate();

  //   const handleCreateGroup = () => {
  //     navigate("/creategroup");
  //   };
  return (
    <div className="community-page">
      <CommunityHeader />
      <div className="community-subheader">
        <span className="subheader-title">참여중인 소모임</span>
        <button
          className="create-group"
          onClick={() => navigate("/creategroup")}
        >
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

export default CommunityMainPage;
