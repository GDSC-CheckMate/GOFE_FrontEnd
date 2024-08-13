import React from 'react';
import { ReactComponent as KakaoIcon } from '../../assets/login/KakaoIcon.svg';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">CheckMate</h1>

      <button className="login-button-container">
        <KakaoIcon />
        <span>카카오톡으로 시작</span>
      </button>
    </div>
  );
};

export default Login;
