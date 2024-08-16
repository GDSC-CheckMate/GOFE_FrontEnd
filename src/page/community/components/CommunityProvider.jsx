// // src/page/community/components/CommunityProvider.jsx

// import React, { createContext, useState, useEffect } from "react";

// export const CommunityContext = createContext();

// const CommunityProvider = ({ children }) => {
//   const [groups, setGroups] = useState([]);

//   // 컴포넌트가 마운트될 때 데이터를 가져옴
//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         const response = await fetch('/group.json'); // public 폴더 기준 경로
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setGroups(data);
//       } catch (error) {
//         console.error("커뮤니티 데이터 불러오기 실패:(", error);
//       }
//     };

//     fetchGroups();
//   }, []);
//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//   };


//   return (
//     <CommunityContext.Provider value={{ groups, addGroup }}>
//       {children}
//     </CommunityContext.Provider>
//   );
// };

// export default CommunityProvider;

import React, { createContext, useState, useEffect } from "react";
import groupData from "../../../api/mock/group.json"; // JSON 파일을 import

export const CommunityContext = createContext();

const CommunityProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // JSON 데이터를 가져와 상태에 설정
    setGroups(groupData);
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
