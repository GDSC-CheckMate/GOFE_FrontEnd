import React from "react";
import { Link } from "react-router-dom";

const Mypageheader = () => {
  return (
    <div>
      <div className="mypage">
        <div className="mypage-root">
          <Link to="/ShowMypage" className="mypage-spread-underline-left">
            내정보
          </Link>
          <Link to="/ShowAlarm" className="mypage-spread-underline-right">
            알림 설정
          </Link>
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default Mypageheader;
