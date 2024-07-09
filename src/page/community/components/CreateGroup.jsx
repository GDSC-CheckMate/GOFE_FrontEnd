// src/page/community/components/CreateGroup.jsx

import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addGroup } from '../../../Redux/communitySlice';

const CreateGroup = () => {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [goalStartDate, setGoalStartDate] = useState("");
  const [goalDuration, setGoalDuration] = useState("");
  const [members, setMembers] = useState("");
  const [joinAfterStart, setJoinAfterStart] = useState("불가능");
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageClick = () => {
    fileInputRef.current.click();
  };

  const calculateEndDate = (startDate, duration) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + parseInt(duration));
    return date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 반환
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endDate = calculateEndDate(goalStartDate, goalDuration);
    const newGroup = {
      id: Date.now(),
      name: groupName,
      description: groupDescription,
      keywords: keywords.split(',').map(keyword => keyword.trim()), // 키워드를 배열로 저장
      notice: "새로운 소모임이 생성되었습니다.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: profileImage || null,
      badge: null,
      startDate: goalStartDate,
      duration: goalDuration,
      endDate: endDate,
      members: members,
    };
    dispatch(addGroup(newGroup));
    navigate("/communityMainPage");
  };

  return (
    <div className="create-group-page">
      <div className="create-group-header">
        <button className="create-group-back-button" onClick={() => window.history.back()}>
          &lt;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="create-group-form-group">
          <label>프로필 이미지</label>
          <div
            className="create-group-profile-image-placeholder"
            onClick={handleProfileImageClick}
          >
            {profileImage ? (
              <img src={profileImage} alt="프로필 이미지" />
            ) : (
              "프로필 이미지"
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
        <div className="create-group-form-group">
          <label>소모임명</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="소모임명을 적어보세요."
          />
        </div>
        <div className="create-group-form-group">
          <label>모임 소개</label>
          <input
            type="text"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            placeholder="소모임을 소개해보세요."
          />
        </div>
        <div className="create-group-form-group">
          <label>키워드 설정</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="소모임의 키워드를 적어보세요. (콤마로 구분)"
          />
        </div>
        <div className="create-group-form-group">
          <label>목표 기간</label>
          <div className="create-group-input-group">
            <input
              type="date"
              value={goalStartDate}
              onChange={(e) => setGoalStartDate(e.target.value)}
            />
            <span>~</span>
            <input
              type="number"
              min="0"
              value={goalDuration}
              onChange={(e) => setGoalDuration(e.target.value)}
              placeholder="숫자만 (예: 100)"
            />
            <span>일간</span>
          </div>
        </div>
        <div className="create-group-form-group">
          <label>참여 인원</label>
          <input
            type="number"
            min="0"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            placeholder="숫자만 (예: 50)"
          />
        </div>
        <div className="create-group-form-group">
          <label>시작일 이후 참여</label>
          <div className="create-group-checkbox-group">
            <label className="create-group-checkbox-container">
              불가능
              <input
                type="checkbox"
                name="joinAfterStart"
                value="불가능"
                checked={joinAfterStart === "불가능"}
                onChange={(e) => setJoinAfterStart(e.target.value)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="create-group-checkbox-container">
              가능
              <input
                type="checkbox"
                name="joinAfterStart"
                value="가능"
                checked={joinAfterStart === "가능"}
                onChange={(e) => setJoinAfterStart(e.target.value)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <button type="submit" className="create-group-submit-button">소모임 개설하기</button>
      </form>
    </div>
  );
};

export default CreateGroup;
