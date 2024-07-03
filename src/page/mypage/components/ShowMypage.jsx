import React from "react";
import { Outlet, Link } from "react-router-dom";
import Community from "./Community";
import Mypageheader from "./Mypageheader";

import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Activemail } from "../../../assets/mypage/Activemail.svg";
import { ReactComponent as Mail } from "../../../assets/mypage/Mail.svg";

import { ReactComponent as Activeheart } from "../../../assets/mypage/Activeheart.svg";
import { ReactComponent as Heart } from "../../../assets/mypage/Heart.svg";

const ShowMypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <div>
      <Mypageheader />

      <div className="mypage-profile">
        <div className="mypage-profile-picture"></div>
        <div className="mypage-profile-box">
          <div className="mypage-profile-name">용찬</div>
          <div className="mypage-profile-content">
            아 리엑트 너무 어려워 css 너무너무 어려워 살려줘
          </div>
        </div>
      </div>

      <div className="mypage-profile-appeal-all">
        <div className="mypage-profile-appeal-mail">
          <Link to="/MypageMessage">
            <div className="mypage-profile-appeal-mail-box">
              <div
                className="mypage-profile-appeal-mail-icon"
                onClick={() => navigate("/MypageMessage")}
              >
                {path === "/" ? <Activemail /> : <Mail />}
              </div>
              <div className="mypage-profile-appeal-text">메시지</div>
            </div>
          </Link>
        </div>

        <div className="mypage-profile-appeal-like">
          <Link to="/MypageLike">
            <div className="mypage-profile-appeal-like-box">
              <div className="mypage-profile-appeal-like-icon-box-num">
                <div
                  className="mypage-profile-appeal-like-icon"
                  onClick={() => navigate("/MypageLike")}
                >
                  {path === "/" ? <Activeheart /> : <Heart />}
                </div>
                <div className="mypage-profile-appeal-like-num">15</div>
              </div>
              <div className="mypage-profile-appeal-text">받은 응원</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mypage-profile-edit">
        <Link to="/MypageEdit">프로필 편집</Link>
      </div>
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

export default ShowMypage;
