import React, { useEffect } from "react";
import CommunityHomeKeywordDetail from "./CommunityHomeKeywordDetail";
import { useDispatch, useSelector } from "react-redux";
import { addhot_word } from "../../../redux/communitySlice";

const hot_word = [
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
  const hot_words = useSelector((state) => state.community.hot_words);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addhot_word([...hot_word]));
  }, [dispatch]);
  return (
    <div className="community-home-keyword-container-box">
      {hot_words.map((hot) => (
        <CommunityHomeKeywordDetail key={hot.id} hot={hot} />
      ))}
    </div>
  );
};

export default CommunityHomeKeyword;
