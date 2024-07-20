import React, { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Activemail } from "../../../assets/mypage/Activemail.svg";
import { ReactComponent as Mail } from "../../../assets/mypage/Mail.svg";

import { ReactComponent as Activeheart } from "../../../assets/mypage/Activeheart.svg";
import { ReactComponent as Heart } from "../../../assets/mypage/Heart.svg";

import CommunityHomeItem from "../../community/components/CommunityHomeItem";

import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../../redux/communitySlice";
const ShowMypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const groups = useSelector((state) => state.community.groups);
  const dispatch = useDispatch();

  const groupStatus = useSelector((state) => state.community.status);

  useEffect(() => {
    if (groupStatus === "idle") {
      dispatch(fetchGroups());
    }
  }, [groupStatus, dispatch]);

  const handleGroupClick = (groupId) => {
    navigate(`/community/group/${groupId}/home`);
  };
  return (
    <div>
      <div className="mypage-profile">
        <div className="mypage-profile-picture"></div>
        <div className="mypage-profile-box">
          <div className="mypage-profile-name">용찬</div>
          <div className="mypage-profile-content">
            리엑트 너무 어려워 scss 너무 너무 어려워 살려줘
          </div>
        </div>
      </div>

      <div className="mypage-profile-appeal-all">
        <div className="mypage-profile-appeal-mail">
          <Link to="/mypage/message">
            <div className="mypage-profile-appeal-mail-box">
              <div
                className="mypage-profile-appeal-mail-icon"
                onClick={() => navigate("/mypage/message")}
              >
                {path === "/" ? <Activemail /> : <Mail />}
              </div>
              <div className="mypage-profile-appeal-text">메시지</div>
            </div>
          </Link>
        </div>

        <div className="mypage-profile-appeal-like">
          <Link to="/mypage/like">
            <div className="mypage-profile-appeal-like-box">
              <div className="mypage-profile-appeal-like-icon-box-num">
                <div
                  className="mypage-profile-appeal-like-icon"
                  onClick={() => navigate("/mypage/like")}
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
        <Link to="/mypage/edit">프로필 편집</Link>
      </div>
      <div className="mypage-divide-line"></div>
      <div className="mypage-community-section">
        <div className="mypage-communication">참여중인 소모임</div>
        <div className="mypage-communication-count">
          <p className="mypage-communication-now">참여중인 소모임2개</p>
          <p className="mypage-communication-all">/ 10개</p>
        </div>
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} onClick={() => handleGroupClick(group.id)}>
              <CommunityHomeItem group={group} />
            </div>
          ))
        ) : (
          <p>참여중인 커뮤니티를 찾을 수 없음</p>
        )}
      </div>
    </div>
  );
};

export default ShowMypage;
