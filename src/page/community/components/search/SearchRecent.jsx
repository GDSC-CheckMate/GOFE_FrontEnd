import React from "react";
import { ReactComponent as Plus } from "../../../../assets/community/PlusButton.svg";

const SearchRecent = ({ keywordsArray, onRemove }) => {
  return (
    <div className="community-search-view-recent-container">
      <div className="community-search-view-recent-title">최근 검색어</div>
      <div className="community-search-view-recent-keywords">
        {keywordsArray.map((keyword, index) => (
          <div key={index} className="community-search-view-recent-keyword">
            <div className="community-search-view-recent-keyword-content">
              {keyword}
            </div>
            <button
              className="community-search-view-recent-keyword-button"
              onClick={() => onRemove(keyword)}
            >
              <Plus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecent;
