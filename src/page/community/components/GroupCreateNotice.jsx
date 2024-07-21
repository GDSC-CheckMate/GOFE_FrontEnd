// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import BackButton from "../../../assets/community/BackButton.svg"

// const GroupCreateNotice = () => {
//   const navigate = useNavigate();

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="create-notice">
//       <header>
//         <button className="back-button" onClick={handleBackClick}>
//             <img src={BackButton} alt="edit"/>
//         </button>
//         <h1>글 작성하기</h1>
//       </header>
//       <textarea placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요." />
//       <div className="notice-option">
//         <input type="radio" id="notice" name="postType" value="notice" />
//         <label htmlFor="notice">공지</label>
//       </div>
//       <button className="submit-button">작성하기</button>
//     </div>
//   );
// };

// export default GroupCreateNotice;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../../../assets/community/BackButton.svg";

const GroupCreateNotice = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="create-notice">
      <header className="create-notice-header">
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="edit" />
        </button>
        <h1>글 작성하기</h1>
      </header>
      <textarea placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요." />
      <div className="notice-option">
        <input type="checkbox" id="chk"/>
        <label htmlFor="notice">공지</label>
      </div>
      <footer className="create-notice-footer">
        <button className="submit-button">작성하기</button>
      </footer>
    </div>
  );
};

export default GroupCreateNotice;
