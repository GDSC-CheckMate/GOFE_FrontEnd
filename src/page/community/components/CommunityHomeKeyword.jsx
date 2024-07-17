import React from "react";
import CommunityHomeKeywordDetail from "./CommunityHomeKeywordDetail";

const keyword = [
  {
    id: 1,
    word: "자기개발",
  },
  {
    id: 2,
    word: "독서",
  },
  {
    id: 3,
    word: "ui",
  },
  {
    id: 4,
    word: "리액트",
  },
  {
    id: 5,
    word: "운동",
  },
  {
    id: 6,
    word: "notion",
  },
  {
    id: 7,
    word: "자전거",
  },
  {
    id: 8,
    word: "자동차",
  },
];

const CommunityHomeKeyword = () => {
  return (
    <div className="community-home-keyword-container-box">
      {keyword.map((keywords) => (
        <CommunityHomeKeywordDetail key={keywords.id} keywords={keywords} />
      ))}
    </div>
  );
};

export default CommunityHomeKeyword;
