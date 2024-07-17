import React, { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';

const GroupChat = () => {
  const [messages, setMessages] = useState([
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '용zi찬' },
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '가원' },
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '승찬' },
  ]);

  const chatContentRef = useRef(null);

  const handleSend = (message) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        userName: 'Lundean' // 여기서 유저 이름을 고정적으로 설정했지만, 실제로는 로그인한 유저의 이름을 가져와야 합니다.
      }
    ]);
  };

  const handleFileUpload = (file) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        text: file.name,
        type: 'file',
        sender: 'user',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        userName: 'Lundean' // 여기서도 유저 이름을 고정적으로 설정
      }
    ]);
  };

  useEffect(() => {
    // 새 메시지가 추가되면 가장 아래로 스크롤
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="group-chat">
      <div className="group-chat-content" ref={chatContentRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`group-chat-message ${msg.sender}`}>
            {msg.sender === 'other' && <div className="profile-pic"></div>}
            <div className="message-content">
              {msg.sender === 'other' && <div className="username">{msg.userName}</div>}
              <div className="message">
                {msg.text}
              </div>
              <div className="time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} onFileUpload={handleFileUpload} />
    </div>
  );
};

export default GroupChat;
