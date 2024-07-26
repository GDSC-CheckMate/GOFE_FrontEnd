import React from "react";
import { useLocation } from "react-router-dom";

const KeyWordIn = () => {
  const location = useLocation();
  const content = location.state?.content;
  return (
    <div>
      {content ? <div>{content.word}</div> : <p>No profile selected</p>}
    </div>
  );
};

export default KeyWordIn;
