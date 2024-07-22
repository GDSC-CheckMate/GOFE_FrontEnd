import React, { useState } from "react";

import { ReactComponent as ActiveVector } from "../../../assets/community/ActiveVector.svg";
import { ReactComponent as Vector } from "../../../assets/community/Vector.svg";

import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addKeyword } from "../../../redux/communitySlice";

const CommunitySearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    dispatch(addKeyword(searchText)); // 키워드 상태 업데이트
    navigate("/community/searchview");
  };

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
        <input
          type="text"
          className="community-search-input"
          placeholder="어떤 스터디를 찾으세요? #키워드 입력"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="community-search-command-button" onClick={handleSearch}>
          {path === "/" ? <Activesearch /> : <Search />}
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
