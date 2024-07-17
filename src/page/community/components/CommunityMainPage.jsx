import React, { useContext } from "react";
import CommunityItem from "./CommunityItem";
import { CommunityContext } from "./CommunityProvider";
import CommunityHeader from "./CommunityHeader";
import CommunityMadeGroup from "./CommunityMadeGroup";
import { Outlet, useLocation } from "react-router-dom";

const CommunityMainPage = () => {
  const location = useLocation();
  // 유저정보 모달을 안띄우고 싶은 라우팅을 설정
  const noCommuntiyHeaderPaths = [
    "/community/communityShowProfile",
    "/community/communityShowFollwers",
    "/community/communityShowAddFreind",
  ];

  // 현재 location이랑 같은지 확인
  const noShowHeader = !noCommuntiyHeaderPaths.includes(location.pathname);
  return (
    <div className="community-page">
      {noShowHeader && <CommunityHeader />}

      <Outlet />
    </div>
  );
};

export default CommunityMainPage;
