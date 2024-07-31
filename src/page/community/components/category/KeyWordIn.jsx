import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ComKeyWordHome from "../ComKeyWordHome";
import { ReactComponent as Back } from "../../../../assets/community/Back.svg";
import SelectMenu from "./SelectMenu";

const KeyWordIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { content, name } = location.state || {};

  return (
    <div className="community-search-keywordin-container">
      <div className="community-search-keywordin-container-header">
        <div
          className="community-search-keywordin-container-header-back"
          onClick={() => navigate("/community/home")}
        >
          <Back />
        </div>
        <div className="community-search-keywordin-container-header-title">
          {name}
        </div>
      </div>
      {/* ComKeyWordHome에 name과 content의 word를 title로 전달합니다. */}
      {name && <ComKeyWordHome name={name} title={content?.word} />}
      <SelectMenu />
    </div>
  );
};

export default KeyWordIn;
