import React, { useState } from 'react';

const GroupChat = () => {
  const [messages, setMessages] = useState([
    { username: 'Lundean', message: '@Lundean 님이 입장했습니다. 반갑게 맞이해주세요 🙌' },
    { username: '용지찬', message: '안녕하세요 Lundean 님 ~' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { username: '용지찬', message: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <div className="group-chat">
      <div className="group-chat-content">
        {messages.map((msg, index) => (
          <div key={index} className="group-chat-message">
            <span className="username">{msg.username}</span>
            <div className="message">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="group-chat-input">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default GroupChat;
