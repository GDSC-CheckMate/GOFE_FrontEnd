import React, { useState } from 'react';
import plusIcon from '../../../assets/community/plus.svg';

const ChatInput = ({ onSend, onFileUpload }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
      e.preventDefault(); // Enter key로 줄바꿈 방지
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className="group-chat-input" onSubmit={handleSubmit}>
      <button type="button" onClick={() => document.getElementById('file-input').click()} className="plus-button">
        <img src={plusIcon} alt="plus" />
      </button>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <textarea
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="메시지를 입력하세요"
        rows="1"
        className="chat-textarea"
      />
      <button type="submit">전송</button>
    </form>
  );
};

export default ChatInput;
