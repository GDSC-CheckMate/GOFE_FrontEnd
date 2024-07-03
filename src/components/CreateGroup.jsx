// src/page/community/CreateGroup.jsx
import React, { useState } from 'react';
import '../scss/page/_createGroup.scss';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [goalDuration, setGoalDuration] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [members, setMembers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 소모임 개설 로직 추가
    console.log({ groupName, goalDuration, goalDate, members });
  };

  return (
    <div className="create-group-page">
      <h2>소모임 개설</h2>
      <form onSubmit={handleSubmit}>
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
          <input 
            type="text" 
            value={goalDuration} 
            onChange={(e) => setGoalDuration(e.target.value)} 
            placeholder="목표 기간을 적어보세요." 
          />
        </div>
        <div className="form-group">
          <label>목표 날짜</label>
          <input 
            type="text" 
            value={goalDate} 
            onChange={(e) => setGoalDate(e.target.value)} 
            placeholder="목표 날짜를 적어보세요." 
          />
        </div>
        <div className="form-group">
          <label>참여 인원</label>
          <input 
            type="text" 
            value={members} 
            onChange={(e) => setMembers(e.target.value)} 
            placeholder="참여 인원을 적어보세요." 
          />
        </div>
        <button type="submit">소모임 개설하기</button>
      </form>
    </div>
  );
};

export default CreateGroup;
