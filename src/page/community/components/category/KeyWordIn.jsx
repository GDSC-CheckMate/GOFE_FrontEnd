import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../../../../assets/community/Back.svg';
import SelectMenu from './SelectMenu';

const KeyWordIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null); // 선택된 단어 상태
  const [hotWords, setHotWords] = useState([]);
  const { content, name } = location.state || {};
  console.log(content);

  useEffect(() => {
    const fetchCategoryTags = async () => {
      try {
        // API 호출
        const response = await axios.get(
          'https://kscold.store/api/Categories?populate=*&sort[0][id]=desc'
        );
        const categories = response.data.data;

        // category_name이 name과 일치하는 카테고리 찾기
        const matchedCategory = categories.find(
          (category) => category.attributes.category_name === name
        );

        if (matchedCategory) {
          // 해당 카테고리의 tags 추출
          const tags = matchedCategory.attributes.tags.data.map((tag) => ({
            id: tag.id,
            word: tag.attributes.Tag_Name,
          }));

          setHotWords(tags);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoryTags();
  }, [name]);

  const handleDetailClick = (word) => {
    setSelectedWord(word);
    // content를 업데이트하여 isHighlighted 상태를 변경
    // 현재 content의 word와 동일한 단어가 선택되었는지 여부에 따라 조건 설정
    if (content?.word === word) {
      // content의 word를 null로 설정하여 isHighlighted가 false가 되도록
      // 이는 기본적으로 클릭된 단어의 상태를 변경하는 로직을 시뮬레이션
      // 실제로는 API 호출 등으로 content를 업데이트할 수 있음
      location.state.content = { ...content, word: null };
    } else {
      // content의 word를 현재 클릭된 단어로 설정하여 isHighlighted가 true가 되도록
      location.state.content = { ...content, word };
    }
  };

  return (
    <div className="community-search-keywordin-container">
      <div className="community-search-keywordin-container-header">
        <div
          className="community-search-keywordin-container-header-back"
          onClick={() => navigate('/community/home')}
        >
          <Back />
        </div>
        <div className="community-search-keywordin-container-header-title">
          {name}
        </div>
      </div>
      <div className="community-search-keywordin-category-sections">
        <div className="community-keywordin-words-container">
          {hotWords.map((hot) => {
            const { word } = hot;
            const isHighlighted = content?.word === word;
            const isSelected = selectedWord === word;

            return (
              <div
                key={hot.id}
                className="community-keywordin-box"
                onClick={() => handleDetailClick(word)}
              >
                <div
                  className={`community-keywordin-content ${
                    isSelected
                      ? 'highlighted'
                      : isHighlighted && !isSelected
                      ? 'highlighted'
                      : ''
                  }`}
                >
                  {word}
                </div>
              </div>
            );
          })}
        </div>
        <SelectMenu />
        {/*  밑에 동아리 컴포넌트와 연동 필요 */}
      </div>
    </div>
  );
};

export default KeyWordIn;
