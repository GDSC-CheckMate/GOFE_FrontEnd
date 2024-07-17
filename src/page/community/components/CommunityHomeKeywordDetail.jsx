import React from "react";

const CommunityHomeKeywordDetail = ({ keywords }) => {
  if (!keywords) {
    return null; // profile이 undefined인 경우 null을 반환하여 렌더링하지 않음
  }
  const { word } = keywords;
  return (
    <div className="community-home-keyword-box">
      <div className="community-home-keyword-content">{word}</div>
    </div>
  );
};

export default CommunityHomeKeywordDetail;
