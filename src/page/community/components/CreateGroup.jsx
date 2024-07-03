import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CommunityContext } from "./CommunityProvider";

const CreateGroup = () => {
  const { addGroup } = useContext(CommunityContext);
  const [groupName, setGroupName] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      id: Date.now(),
      name: groupName,
      notice: "새로운 소모임이 생성되었습니다.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: profileImage || "images/default.png",
      badge: null,
    };
    addGroup(newGroup);
    navigate("/community");
  };

  return (
    <div className="create-group-page">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          &lt;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>프로필 이미지</label>
          <div
            className="profile-image-placeholder"
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
        <div className="form-group">
          <label>소모임명</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="소모임명을 적어보세요."
          />
        </div>
        <div className="form-group">
          <label>목표 기간</label>
          <div className="input-group">
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
        <div className="form-group">
          <label>참여 인원</label>
          <input
            type="number"
            min="0"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            placeholder="숫자만 (예: 50)"
          />
        </div>
        <div className="form-group">
          <label>시작일 이후 참여</label>
          <div className="checkbox-group">
            <label className="checkbox-container">
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
            <label className="checkbox-container">
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
        <button type="submit">소모임 개설하기</button>
      </form>
    </div>
  );
};

export default CreateGroup;
