import React from "react";

import { ReactComponent as ActiveVector } from "../../../assets/community/ActiveVector.svg";
import { ReactComponent as Vector } from "../../../assets/community/Vector.svg";

import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";

import { useLocation, useNavigate } from "react-router-dom";

const CommunitySearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <div className="community-search-container-box">
      <div
        className="community-search-detail-list"
        onClick={() => navigate("/")}
      >
        {path === "/" ? <ActiveVector /> : <Vector />}
        {path === "/" ? <ActiveVector /> : <Vector />}
        {path === "/" ? <ActiveVector /> : <Vector />}
      </div>
      <div className="community-search-command-box">
        <div
          className="community-search-command-button"
          onClick={() => navigate("/")}
        >
          {path === "/" ? <Activesearch /> : <Search />}
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
