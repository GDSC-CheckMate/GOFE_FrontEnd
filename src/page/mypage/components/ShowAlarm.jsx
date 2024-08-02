import React from "react";
import { Link } from "react-router-dom";
import Mypageheader from "./Mypageheader";
import AlarmContent from "./alarm/AlarmContent";
const ShowAlarm = () => {
  return (
    <div className="mypage-show-alarm-main-container-box-all">
      <div className="mypage-show-alarm-main-container-box">
        <AlarmContent title="모두 일시 중단" />
        <AlarmContent title="전체 개인 루틴 알림" />
        <AlarmContent title="팔로워 알림" />
        <AlarmContent title="메시지" />
        {/* 소모임 알림 작업 필요 */}
      </div>
    </div>
  );
};

export default ShowAlarm;
