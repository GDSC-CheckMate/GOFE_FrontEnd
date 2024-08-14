import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Line_bar } from '../../../../assets/community/Line_bar.svg';
import { useNavigate } from 'react-router-dom';
import ComKeyWordHome from '../ComKeyWordHome';
import axios from 'axios';

const SearchCategory = () => {
  const resizerRef = useRef(null);
  const topSideRef = useRef(null);
  const bottomSideRef = useRef(null);
  const navigate = useNavigate();

  const [isResizing, setIsResizing] = useState(false);
  const [y, setY] = useState(0);
  const [topHeight, setTopHeight] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://kscoldproject.site/api/categories')
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const downHandler = (e) => {
    setIsResizing(true);
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setY(clientY);
    setTopHeight(topSideRef.current.getBoundingClientRect().height);
  };

  return (
    <div className="community-clear-view-container">
      <div className="community-clear-view-show-container">
        <div
          className="community-clear-view-show-top"
          ref={topSideRef}
          onClick={() => navigate('/community/home')}
        ></div>
        <div
          className="community-clear-view-show-resizer"
          id="dragMe"
          ref={resizerRef}
          onMouseDown={downHandler}
          onTouchStart={downHandler}
        >
          <Line_bar />
        </div>
        <div className="community-clear-view-show-bottom" ref={bottomSideRef}>
          <div className="community-clear-view-show-bottom-content">
            <div className="community-clear-view-show-bottom-content-title">
              카테고리
            </div>

            {/* 각 카테고리 섹션을 묶어서 박스 스타일을 적용할 수 있도록 div 추가 */}
            <div className="category-sections">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="community-clear-view-show-bottom-content-words"
                >
                  <div className="ab">
                    <div className="community-clear-view-show-bottom-content-words-container-title">
                      {category.attributes.category_name}
                    </div>
                    <ComKeyWordHome name={category.attributes.category_name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
