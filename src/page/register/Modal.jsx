import React from 'react';
import './Modal.css'; // 모달의 스타일을 정의한 CSS 파일

const Modal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-close-btn" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
