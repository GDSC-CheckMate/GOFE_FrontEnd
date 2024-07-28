import React from "react";
import { useLocation } from "react-router-dom";
import ComKeyWordHome from "../ComKeyWordHome";

const KeyWordIn = () => {
  const location = useLocation();
  const content = location.state?.content;
  const name = location.state?.name; // name을 location.state에서 추출합니다.

  console.log(content);

  return (
    <div className="community-search-keyword-container-header">
      {/* ComKeyWordHome에 name과 content의 word를 title로 전달합니다. */}
      {name && <ComKeyWordHome name={name} title={content?.word} />}
    </div>
  );
};

export default KeyWordIn;
