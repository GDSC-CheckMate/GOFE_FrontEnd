// src/page/community/components/GroupCreateNotice.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNotice } from '../../../redux/communitySlice';
import BackButton from "../../../assets/community/BackButton.svg";

const GroupCreateNotice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isNotice, setIsNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (title.trim() === '') {
      setErrorMessage('공지사항을 작성해 주세요.');
      return;
    }
    const newNotice = {
      title,
      date: new Date().toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
      author: '가가원', // 실제 작성자 이름으로 대체
    };
    dispatch(addNotice(newNotice));
    navigate(-1);
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000); // 3초 후에 메시지 제거

      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    }
  }, [errorMessage]);

  return (
    <div className="create-notice">
      <header className="create-notice-header">
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="back" />
        </button>
        <h1>글 작성하기</h1>
      </header>
      <textarea
        placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="notice-option">
        <input
          type="checkbox"
          id="chk"
          checked={isNotice}
          onChange={() => setIsNotice(!isNotice)}
        />
        <label htmlFor="chk">공지</label>
      </div>
      <footer className="create-notice-footer">
        <button className="submit-button" onClick={handleSubmit}>작성하기</button>
      </footer>
    </div>
  );
};

export default GroupCreateNotice;