import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGroup } from "../../../redux/communitySlice";
import BackButton from "../../../assets/community/BackButton.svg";

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
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000); // 2초 후에 에러 메시지 사라짐

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
    }
  }, [error]);

  const handleBackClick = () => {
    navigate(-1);
  };

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

  const validateInputs = () => {
    if (!groupName) {
      setError({ field: "groupName", message: "소모임명을 입력해주세요." });
      return false;
    }
    if (!groupDescription) {
      setError({ field: "groupDescription", message: "모임 소개를 입력해주세요." });
      return false;
    }
    if (!keywords) {
      setError({ field: "keywords", message: "키워드를 입력해주세요." });
      return false;
    }
    if (!goalStartDate) {
      setError({ field: "goalStartDate", message: "목표 시작일을 입력해주세요." });
      return false;
    }
    if (!goalDuration) {
      setError({ field: "goalDuration", message: "목표 기간을 입력해주세요." });
      return false;
    }
    if (!members) {
      setError({ field: "members", message: "참여 인원을 입력해주세요." });
      return false;
    }
    setError(null); 
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const newGroup = {
      id: Date.now(),
      name: groupName,
      description: groupDescription,
      keywords: keywords.split(",").map((keyword) => keyword.trim()), // 키워드를 배열로 변환
      notice: "새로운 소모임이 생성되었습니다.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: profileImage || null,
      badge: null,
      startDate: goalStartDate,
      duration: parseInt(goalDuration),
      members: parseInt(members),
    };
    dispatch(addGroup(newGroup));
    navigate("/community/main");
  };

  return (
    <div className="create-group-page">
      <div className="create-group-header">
        <button className="create-group-back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="back"/>
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

        <div className={`create-group-form-group create-group-error-tooltip ${error?.field === "groupName" ? "create-group-show" : ""}`}>
          <label>소모임명</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="소모임명을 적어보세요."
          />
          {error?.field === "groupName" && (
            <span className="create-group-error-tooltip-text">{error.message}</span>
          )}
        </div>

        <div className={`create-group-form-group create-group-error-tooltip ${error?.field === "groupDescription" ? "create-group-show" : ""}`}>
          <label>모임 소개</label>
          <input
            type="text"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            placeholder="소모임을 소개해보세요."
          />
          {error?.field === "groupDescription" && (
            <span className="create-group-error-tooltip-text">{error.message}</span>
          )}
        </div>
        <div className={`create-group-form-group create-group-error-tooltip ${error?.field === "keywords" ? "create-group-show" : ""}`}>
          <label>키워드 설정</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="키워드를 적어보세요. (쉼표로 구분)"
          />
          {error?.field === "keywords" && (
            <span className="create-group-error-tooltip-text">{error.message}</span>
          )}
        </div>
        <div className={`create-group-form-group create-group-error-tooltip ${error?.field === "goalStartDate" ? "create-group-show" : ""}`}>
          <label>목표 기간</label>
          <div className="create-group-input-group">
            <input
              type="date"
              value={goalStartDate}
              onChange={(e) => setGoalStartDate(e.target.value)}
            />
            {error?.field === "goalStartDate" && (
              <span className="create-group-error-tooltip-text">{error.message}</span>
            )}
            <span>~</span>
            <input
              type="number"
              min="0"
              value={goalDuration}
              onChange={(e) => setGoalDuration(e.target.value)}
              placeholder="숫자만 (예: 100)"
            />
            {error?.field === "goalDuration" && (
              <span className="error-tooltip-text">{error.message}</span>
            )}
            <span>일간</span>
          </div>
        </div>

        <div className={`create-group-form-group create-group-error-tooltip ${error?.field === "members" ? "create-group-show" : ""}`}>
          <label>참여 인원</label>
          <input
            type="number"
            min="0"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            placeholder="숫자만 (예: 50)"
          />
          {error?.field === "members" && (
            <span className="create-group-error-tooltip-text">{error.message}</span>
          )}
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
        <button type="submit" className="create-group-submit-button">
          소모임 개설하기
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
