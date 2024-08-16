import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [isValidFormat, setIsValidFormat] = useState(false);

  const navigate = useNavigate();
  localStorage.setItem('nickname', nickname);
  const checkNickname = async () => {
    try {
      const res = await axios.post('/api/v1/validations/name', {
        name: nickname,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsValidLength(value.length >= 1 && value.length <= 14);
    setIsValidFormat(/(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[가-힣])/.test(value)); // 한글, 영문 대소문자, 숫자 중 2가지 이상 조합
  };

  const oauthId = localStorage.getItem('oauthId');

  const handleRegister = async () => {
    try {
      console.log(typeof oauthId, typeof nickname);
      const response = await axios.post('/api/v1/account/register', {
        oauthId: oauthId,
        name: nickname,
      });
      navigate('/');
      console.log(response.data);
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response.status === 500) {
        alert('이미 가입된 유저입니다.');
      }
    }
  };

  //   // 재발급 테스트
  //   const realReissue = async () => {
  //     try {
  //       const refreshToken = localStorage.getItem('refreshToken'); // 로컬 스토리지에서 refreshToken 가져오기
  //       if (!refreshToken) {
  //         throw new Error('No refresh token found');
  //       }

  //       const response = await axios.post(
  //         '/api/v1/account/reissue',
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${refreshToken}`,
  //           },
  //         }
  //       );

  //       console.log('리이슈임', response);
  //       const accessToken = response.data.accessToken;
  //       const newRefreshToken = response.data.refreshToken;
  //       console.log(
  //         '재발급된 엑세스, 리프레쉬 토큰',
  //         accessToken,
  //         newRefreshToken
  //       );
  //       localStorage.setItem('accessToken', accessToken);
  //       localStorage.setItem('refreshToken', newRefreshToken);
  //     } catch (error) {
  //       console.error('Error during reissue:', error);
  //     }
  //   };

  return (
    <div className="register-container">
      <h1>회원가입</h1>
      <div className="input-group">
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={handleNicknameChange}
        />
        <button className="check-btn" onClick={checkNickname}>
          중복 확인
        </button>
      </div>
      <div className="validation-group">
        <div className={`validation-item ${isValidLength ? 'valid' : ''}`}>
          1자 이상 14자 이하로 입력해주세요
        </div>
        <div className={`validation-item ${isValidFormat ? 'valid' : ''}`}>
          한글, 영문 대소문자, 숫자 중 2가지 이상을 조합해주세요.
        </div>
      </div>
      <button
        className="submit-btn"
        disabled={!(isValidLength && isValidFormat)}
        onClick={handleRegister}
      >
        회원가입
      </button>
    </div>
  );
};

export default Register;
