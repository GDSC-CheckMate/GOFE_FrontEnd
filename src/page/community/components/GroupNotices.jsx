// src/page/community/components/GroupNotices.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticeEdit from "../../../assets/community/NoticeEdit.svg";

const GroupNotices = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const notices = useSelector((state) => state.community.notices);

  const handleEditClick = () => {
    navigate(`/community/group/${groupId}/create-notices`);
  };

  const handleNoticeClick = (index) => {
    navigate(`/community/group/${groupId}/notices/${index}`);
  };

  return (
    <div className="group-notices">
      <div className="notice-list">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <div key={index} className="notice-item" onClick={() => handleNoticeClick(index)}>
              <h2>{notice.title}</h2>
              <p>{notice.date} {notice.author}</p>
            </div>
          ))
        ) : (
          <p>이런...아직 공지사항 글이 없어요:(</p>
        )}
      </div>
      <button className="edit-button" onClick={handleEditClick}>
        <img src={NoticeEdit} alt="edit" />
      </button>
    </div>
  );
};

export default GroupNotices;