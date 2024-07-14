// import { useLocation, useNavigate } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import { setNewRoutine } from "../redux/routine"

// import { ReactComponent as HomeIcon } from "../assets/footer/Home.svg"
// import { ReactComponent as ActiveHomeIcon } from "../assets/footer/HomeActive.svg"
// import { ReactComponent as AchievementIcon } from "../assets/footer/Achievement.svg"
// import { ReactComponent as ActiveAchievementIcon } from "../assets/footer/AchievementActive.svg"
// import { ReactComponent as CommunityIcon } from "../assets/footer/Community.svg"
// import { ReactComponent as ActiveCommunityIcon } from "../assets/footer/CommunityActive.svg"
// import { ReactComponent as MypageIcon } from "../assets/footer/Mypage.svg"
// import { ReactComponent as ActiveMypageIcon } from "../assets/footer/MypageActive.svg"

// const Footer = () => {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const path = location.pathname
//   const dispatch = useDispatch()
//   const selectedSection = useSelector(
//     (state) => state.selectedSection.selectedSection
//   )

//   const handleAddRoutine = () => {
//     dispatch(setNewRoutine({ time: "", title: "", recurringDays: [] }))
//   }

//   return (
//     <div className="footer-container">
//       {selectedSection === "view1" ? (
//         <div className="footer-item-container">
//           <div
//             className="footer-item footer-item-left"
//             onClick={() => navigate("/")}
//           >
//             {path === "/" ? <ActiveHomeIcon /> : <HomeIcon />}
//           </div>
//           <div className="footer-item" onClick={() => navigate("/achievement")}>
//             {path === "/achievement" ? (
//               <ActiveAchievementIcon />
//             ) : (
//               <AchievementIcon />
//             )}
//           </div>
//           <div className="footer-item" onClick={() => navigate("/CommunityMainPage")}>
//             {path === "/CommunityMainPage" ? (
//               <ActiveCommunityIcon />
//             ) : (
//               <CommunityIcon />
//             )}
//           </div>
//           <div
//             className="footer-item footer-item-right"
//             onClick={() => navigate("/mypage")}
//           >
//             {path === "/mypage" ? <ActiveMypageIcon /> : <MypageIcon />}
//           </div>
//         </div>
//       ) : (
//         <div className="footer-routine-view-container">
//           <button
//             className="footer-routine-view-button"
//             onClick={handleAddRoutine}
//           >
//             목표 만들기
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Footer



import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRoutine } from '../redux/routine';
import { setSelectedSection } from '../redux/main';

import { ReactComponent as HomeIcon } from '../assets/footer/Home.svg';
import { ReactComponent as ActiveHomeIcon } from '../assets/footer/HomeActive.svg';
import { ReactComponent as AchievementIcon } from '../assets/footer/Achievement.svg';
import { ReactComponent as ActiveAchievementIcon } from '../assets/footer/AchievementActive.svg';
import { ReactComponent as CommunityIcon } from '../assets/footer/Community.svg';
import { ReactComponent as ActiveCommunityIcon } from '../assets/footer/CommunityActive.svg';
import { ReactComponent as MypageIcon } from '../assets/footer/Mypage.svg';
import { ReactComponent as ActiveMypageIcon } from '../assets/footer/MypageActive.svg';
import { ReactComponent as PlusIcon } from '../assets/community/plus.svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const selectedSection = useSelector((state) => state.selectedSection.selectedSection);
  const [chatInput, setChatInput] = useState('');
  const textareaRef = useRef(null);

  const handleAddRoutine = () => {
    dispatch(setNewRoutine({ time: "", title: "", recurringDays: [] }));
    dispatch(setSelectedSection('view2'));
    console.log('handleAddRoutine: selectedSection이 view2로 설정됨');
  };

  const handleTextareaChange = (e) => {
    setChatInput(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      // 특정 높이를 넘지 않으면 스크롤바를 없앰
      if (textareaRef.current.scrollHeight <= 300) {
        textareaRef.current.style.overflowY = 'hidden';
      } else {
        textareaRef.current.style.overflowY = 'auto';
      }
    }
  };

  useEffect(() => {
    if (path === '/') {
      dispatch(setSelectedSection('view1'));
    } else if (path.includes('/group/') && path.endsWith('/chat')) {
      dispatch(setSelectedSection('chat'));
    } else {
      dispatch(setSelectedSection('view1'));
    }
    console.log('useEffect: 경로가 다음으로 변경됨 :', path);
  }, [path, dispatch]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [chatInput]);

  const renderFooterContent = () => {
    console.log('renderFooterContent: selectedSection이 다음으로 설정됨 :', selectedSection);
    if (selectedSection === 'view2') {
      return (
        <div className="footer-routine-view-container">
          <button className="footer-routine-view-button" onClick={handleAddRoutine}>
            목표 만들기
          </button>
        </div>
      );
    } else if (selectedSection === 'chat') {
      return (
        <div className="footer-chat-container">
          <PlusIcon className="footer-chat-plus-icon" />
          <textarea
            ref={textareaRef}
            className="footer-chat-input"
            placeholder="메시지를 입력하세요"
            value={chatInput}
            onChange={handleTextareaChange}
            rows={1}
          />
          <button className="footer-chat-button">전송</button>
        </div>
      );
    } else if (selectedSection === 'view1') {
      return (
        <div className="footer-item-container">
          <div className="footer-item footer-item-left" onClick={() => navigate('/')}>
            {path === '/' ? <ActiveHomeIcon /> : <HomeIcon />}
          </div>
          <div className="footer-item" onClick={() => navigate('/achievement')}>
            {path === '/achievement' ? <ActiveAchievementIcon /> : <AchievementIcon />}
          </div>
          <div className="footer-item" onClick={() => navigate('/CommunityMainPage')}>
            {path === '/CommunityMainPage' ? <ActiveCommunityIcon /> : <CommunityIcon />}
          </div>
          <div className="footer-item footer-item-right" onClick={() => navigate('/mypage')}>
            {path === '/mypage' ? <ActiveMypageIcon /> : <MypageIcon />}
          </div>
        </div>
      );
    } else {
      return (
        <div className="footer-item-container">
          <div className="footer-item footer-item-left" onClick={() => navigate('/')}>
            <HomeIcon />
          </div>
          <div className="footer-item" onClick={() => navigate('/achievement')}>
            <AchievementIcon />
          </div>
          <div className="footer-item" onClick={() => navigate('/CommunityMainPage')}>
            <CommunityIcon />
          </div>
          <div className="footer-item footer-item-right" onClick={() => navigate('/mypage')}>
            <MypageIcon />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="footer-container">
      {renderFooterContent()}
    </div>
  );
};

export default Footer;
