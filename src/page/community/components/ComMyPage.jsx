import React from 'react';
import CommunityMadeGroup from "./CommunityMadeGroup";
import CommunityItem from "./CommunityItem";
import { useSelector } from "react-redux";

const ComMyPage = () => {
  const groups = useSelector((state) => state.community.groups);
  console.log(groups);
  return (
    <div className="community-main-view-all">
      <CommunityMadeGroup />
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

export default ComMyPage;
