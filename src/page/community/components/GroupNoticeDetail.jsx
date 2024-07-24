// src/page/community/components/GroupNoticeDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from "../../../assets/community/BackButton.svg"; // 뒤로가기 버튼 이미지 파일

const GroupNoticeDetail = () => {
  const navigate = useNavigate();
  const { noticeId, groupId } = useParams();
  const notice = useSelector((state) =>
    state.community.notices.find((_, index) => index === parseInt(noticeId))
  );

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const handleBackClick = () => {
    navigate(`/community/group/${groupId}/notices`);
  };

  return (
    <div className="notice-detail">
      <header>
        <img src={BackButton} alt="back" onClick={handleBackClick} />
        <h2>{notice.title}</h2>
      </header>
      <p className="date">{notice.date}</p>
      <p className="author">작성자: {notice.author}</p>
    </div>
  );
};

export default GroupNoticeDetail;
