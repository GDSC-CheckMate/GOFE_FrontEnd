import React from "react";
import { Link } from "react-router-dom";

const CommunityHeader = () => {
  return (
    <div>
      <div className="Community-header-box">
        <div className="community-header-root">
          <Link to="/CommunityMainPage" className="">
            My
          </Link>
          <Link to="/CommunityHomePage" className="">
            커뮤홈
          </Link>
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default CommunityHeader;
