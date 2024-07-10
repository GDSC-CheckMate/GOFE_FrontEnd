// src/page/community/components/GroupChat.jsx

import React from 'react';

const GroupChat = () => {
  return (
    <div className="group-chat">
      <div className="group-chat-content">
        <div className="group-chat-message">
          <span className="username">Lundean</span>
          <div className="message">@Lundean 님이 입장했습니다. 반갑게 맞이해주세요 🙌</div>
        </div>
        <div className="group-chat-message">
          <span className="username">용지찬</span>
          <div className="message">안녕하세요 Lundean 님 ~</div>
        </div>
        <div className="group-chat-message">
          <span className="username">용지찬</span>
          <div className="message">안녕하세요 Lundean 님 ~</div>
        </div>
        <div className="group-chat-message">
          <span className="username">용지찬</span>
          <div className="message">안녕하세요 Lundean 님 ~</div>
        </div>
        <div className="group-chat-message">
          <span className="username">용지찬</span>
          <div className="message">안녕하세요 Lundean 님 ~</div>
        </div>
      </div>
      <div className="group-chat-input">
        <input type="text" placeholder="메시지를 입력하세요" />
        <button>전송</button>
      </div>
    </div>
  );
};

export default GroupChat;
