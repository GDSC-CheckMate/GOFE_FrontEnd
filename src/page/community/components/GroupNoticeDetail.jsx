// src/page/community/components/GroupNoticeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GroupNoticeDetail = () => {
  const { noticeId } = useParams();
  const notice = useSelector((state) =>
    state.community.notices.find((_, index) => index === parseInt(noticeId))
  );

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="notice-detail">
      <h2>{notice.title}</h2>
      <p>{notice.date} {notice.author}</p>
      <p>{notice.content}</p> {/* 공지사항의 내용이 있는 경우 표시 */}
    </div>
  );
};

export default GroupNoticeDetail;
