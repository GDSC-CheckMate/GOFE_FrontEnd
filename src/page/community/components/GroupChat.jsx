// src/page/community/components/GroupChat.jsx

import React, { useState } from 'react';
import plusIcon from '../../../assets/community/plus.svg';

const GroupChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, type: 'text' }]);
      setMessage('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: file.name, type: 'file' }]);
    }
  };

  const handlePlusClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <div className="group-chat">
      <div className="group-chat-content">
        {messages.map((msg, index) => (
          <div key={index} className="group-chat-message">
            <span className="message">{msg.text}</span>
          </div>
        ))}
      </div>
      <form className="group-chat-input" onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={handlePlusClick} className="plus-button">
          <img src={plusIcon} alt="plus" />
        </button>
        <input
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        <button type="button" onClick={handleSend}>
          전송
        </button>
      </form>
    </div>
  );
};

export default GroupChat;
