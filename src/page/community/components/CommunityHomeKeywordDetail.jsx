import React from "react";

const CommunityHomeKeywordDetail = ({ hot, isSelected, onClick }) => {
  if (!hot) {
    return null; // hot이 undefined인 경우 null을 반환하여 렌더링하지 않음
  }
  const { word } = hot;

  return (
    <div className="community-home-keyword-box" onClick={onClick}>
      <div className="community-home-keyword-content">{word}</div>
    </div>
  );
};

export default CommunityHomeKeywordDetail;
