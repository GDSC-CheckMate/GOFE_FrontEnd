import React, { useContext } from "react";
import CommunityItem from "./CommunityItem";
import { CommunityContext } from "./CommunityProvider";
import CommunityHomeItem from "./CommunityHomeItem";
const CommunityHomeJoin = () => {
  const { groups } = useContext(CommunityContext);
  return (
    <div>
      <div className="mypage-community-section">
        <div className="mypage-communication">활발한 소모임에 참여해보세요</div>
        <div className="mypage-communication-count">
          <p className="mypage-communication-all">
            참여도가 가장 높은 소모임의 순위를 확인해 보세요!
          </p>
        </div>
        <div className="group-list">
          {groups.length > 0 ? (
            groups.map((group) => (
              <CommunityHomeItem key={group.id} group={group} />
            ))
          ) : (
            <p>참여중인 커뮤니티를 찾을 수 없음</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityHomeJoin;
