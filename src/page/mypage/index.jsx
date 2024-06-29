import React from "react";
import { Link } from "react-router-dom";
import Community from "../mypage/components/Community";

const Mypage = () => {
  return (
    <div>
      <div className="mypage">
        <div className="mypage-root">
          <Link to="" className="mypage-spread-underline">
            내정보
          </Link>
          <Link to="" className="mypage-spread-underline">
            알림 설정
          </Link>
        </div>
      </div>
      <div className="mypage-root-line" />
      <div className="mypage-profile">
        <div className="mypage-profile-picture"></div>
        <div className="mypage-profile-box">
          <div className="mypage-profile-name">용찬</div>
          <div className="mypage-profile-content">
            아 리엑트 너무 어려워 css 너무너무 어려워 살려줘
          </div>
        </div>
      </div>

      <div className="mypage-profile-appeal"></div>
      <div className="mypage-profile-edit">프로필 편집</div>
      <div className="mypage-divide-line"></div>
      <div className="mypage-community-section">
        <div className="mypage-communication">참여중인 소모임</div>
        <div className="mypage-communication-count">
          <p className="mypage-communication-now">참여중인 소모임2개</p>
          <p className="mypage-communication-all">/ 10개</p>
        </div>
        <div className="mypage-communication-list">
          <Community />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
