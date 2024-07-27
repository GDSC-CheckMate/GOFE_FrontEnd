import React from "react";
import { useLocation } from "react-router-dom";
import ComKeyWordHome from "../ComKeyWordHome";

const KeyWordIn = () => {
  const location = useLocation();
  const content = location.state?.content;
  const name = location.state?.name; // name을 location.state에서 추출합니다.

  console.log(content);

  return (
    <div>
      {/* ComKeyWordHome에 name을 전달합니다. */}
      {name && <ComKeyWordHome name={name} />}
      {/* {content ? <div>{content.word}</div> : <p>내용이 없습니다.</p>} */}
    </div>
  );
};

export default KeyWordIn;
