import React, { createContext, useState, useEffect } from "react";
import communityData from "../../../api/mock/community.json";

export const CommunityContext = createContext();

const CommunityProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  // 컴포넌트가 마운트될 때 데이터 페칭
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(communityData); // public 폴더 기준 경로
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGroups((prevGroups) => {
          // 로컬 스토리지에 없는 데이터만 추가
          const newGroups = data.filter(
            (newGroup) => !prevGroups.some((group) => group.id === newGroup.id)
          );
          return [...prevGroups, ...newGroups];
        });
      } catch (error) {
        console.error("Failed to fetch community data", error);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  return (
    <CommunityContext.Provider value={{ groups, addGroup }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
