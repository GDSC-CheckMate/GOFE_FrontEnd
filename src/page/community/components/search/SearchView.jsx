import React, { useEffect, useState } from "react";

import { ReactComponent as Activesearch } from "../../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../../assets/community/Search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/community/Back.svg";

import { useDispatch, useSelector } from "react-redux";
import SearchRecent from "./SearchRecent";
import { addKeyword } from "../../../../redux/communitySlice";

const SearchView = () => {
  const searchText = useSelector((state) => state.community.keyword);
  const [keywordsArray, setKeywordsArray] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (searchText) {
      setKeywordsArray((prevArray) => prevArray.concat(searchText));
    }
  }, [searchText]);

  const handleSearch = () => {
    if (inputText.trim() !== "") {
      dispatch(addKeyword(inputText)); // 키워드 상태 업데이트
      setInputText(""); // 입력 필드 초기화
    }
    navigate("/community/searchview");
  };

  const handleRemove = (keyword) => {
    setKeywordsArray((prevArray) =>
      prevArray.filter((item) => item !== keyword)
    );
  };

  return (
    <div className="community-search-view-container-box">
      <div className="community-search-view-header-container">
        <div
          className="community-search-header-back"
          onClick={() => navigate("/community/home")}
        >
          <Back />
        </div>

        <div className="community-search-view-input-container">
          <div className="community-search-view-command-box">
            <input
              type="text"
              className="community-search-view-input"
              placeholder="어떤 스터디를 찾으세요? #키워드 입력"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <div
              className="community-search-view-command-button"
              onClick={handleSearch}
            >
              {path === "/" ? <Activesearch /> : <Search />}
            </div>
          </div>
        </div>
      </div>
      <SearchRecent keywordsArray={keywordsArray} onRemove={handleRemove} />
    </div>
  );
};

export default SearchView;
