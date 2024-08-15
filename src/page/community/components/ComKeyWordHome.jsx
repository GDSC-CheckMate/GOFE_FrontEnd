import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ComKeyWordHome = ({ name, title }) => {
  const [hotWords, setHotWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const navigate = useNavigate();

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

  const handleDetailClick = (content) => {
    setSelectedWord(content.word);
    navigate('/community/keyword', { state: { content, name } });
  };

  return (
    <div className="community-clear-view-show-bottom-content-words-container">
      {hotWords.map((hot) => {
        const { word } = hot;
        return (
          <div
            key={hot.id}
            className="community-home-keyword-box"
            onClick={() => handleDetailClick(hot)}
          >
            <div
              className={`community-home-keyword-content ${
                title === word ? 'highlighted' : ''
              }`}
            >
              {word}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComKeyWordHome;
