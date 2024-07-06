import React from "react";
import CommunityHomeRecom_com from "./CommunityHomeRecom_com";
const recommend = [
  { id: 1, name: "리액트 100일 스터디", host: "승찬", member: "20명" },
  { id: 2, name: "ux/ui 아티클 읽기", host: "은잔", member: "30명" },
  { id: 3, name: "자바 / 스프링 백엔드 개발", host: "가원", member: "20명" },
  { id: 4, name: "강력한 남자들의 모임", host: "용찬", member: "20명" },
];
const CommunityHomeRecommend = () => {
  return (
    <div className="community-home-recommend-container-box">
      <div className="community-home-recommend-show-container-box-name">
        회원님을 위한 추천
      </div>
      <div className="community-home-recommend-show">
        {recommend.map((recommend) => (
          <CommunityHomeRecom_com key={recommend.id} recommend={recommend} />
        ))}
      </div>
    </div>
  );
};

export default CommunityHomeRecommend;
