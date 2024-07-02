/**CommunityContext.jsx 파일은 React의 Context API를 사용하여 애플리케이션의 상태 관리
 * ※소모임 데이터를 중앙에서 관리하고, 여러 컴포넌트 간에 이 데이터를 쉽게 공유할 수 있게 해줌※
 * 
 * 1. Context 생성: CommunityContext를 생성하여 애플리케이션의 다른 부분에서 사용할 수 있게한다
 * 2. 상태 관리: 소모임 데이터 (groups)와 소모임을 추가하는 함수 (addGroup)를 상태로 관리한다
 * 3. Provider 제공: CommunityProvider 컴포넌트를 통해 Context를 애플리케이션 트리에 주입
 * 이 컴포넌트는 Context의 값을 자식 컴포넌트들에게 제공하며, 자식 컴포넌트들은 이 값을 통해 상태를 읽거나 업데이트 함
 */

import React, { createContext, useState, useEffect } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);   // 소모임 데이터를 상태로 관리

  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('/community.json'); // public 폴더 기준 경로
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error("Failed to fetch community data", error);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = (group) => {  // 새로운 소모임을 추가하는 함수
    setGroups([...groups, group]);
  };

  return (
    // Provider를 통해 상태와 함수를 자식 컴포넌트에 제공
    <CommunityContext.Provider value={{ groups, addGroup }}>
      {children}
    </CommunityContext.Provider>
  );
};
