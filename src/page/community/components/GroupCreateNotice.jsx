import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCreateNotice = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="create-notice">
      <header>
        <button className="back-button" onClick={handleBackClick}>뒤로가기</button>
        <h1>글 작성하기</h1>
      </header>
      <textarea placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요." />
      <div className="notice-option">
        <input type="radio" id="notice" name="postType" value="notice" />
        <label htmlFor="notice">공지</label>
      </div>
      <button className="submit-button">작성하기</button>
    </div>
  );
};

export default GroupCreateNotice;
