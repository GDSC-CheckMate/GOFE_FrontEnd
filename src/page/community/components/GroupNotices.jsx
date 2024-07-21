// import React from 'react';
// import NoticeEdit from "../../../assets/community/NoticeEdit.svg";

// const GroupNotices = () => {
//   const notices = [
//     { title: '리액트 스터디 오프라인 일정 잡기 투표할게요~', date: '5월 6일 오후 7:00', author: '용zi찬' },
//     { title: '리액트 스터디 오프라인 일정 잡기 투표할게요~', date: '5월 6일 오후 7:00', author: '용zi찬' },
//     // 추가적인 공지글 항목들
//   ];

//   return (
//     <div className="group-notices">
//       <div className="notice-list">
//         {notices.map((notice, index) => (
//           <div key={index} className="notice-item">
//             <h2>{notice.title}</h2>
//             <p>{notice.date} {notice.author}</p>
//           </div>
//         ))}
//       </div>
//         <button className="edit-button">
//           <img src={NoticeEdit} alt="edit" />
//         </button>
//     </div>
//   );
// };

// export default GroupNotices;


import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticeEdit from "../../../assets/community/NoticeEdit.svg";

const GroupNotices = () => {
  const navigate = useNavigate();
  const {groupId} = useParams();
  useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  )
  
  const notices = [
    { title: '리액트 스터디 오프라인 일정 잡기 투표할게요~', date: '5월 6일 오후 7:00', author: '용zi찬' },
    { title: '리액트 스터디 오프라인 일정 잡기 투표할게요~', date: '5월 6일 오후 7:00', author: '용zi찬' },
    // 추가적인 공지글 항목들
  ];

  const handleEditClick = () => {
    navigate(`/community/group/${groupId}/create-notices`);
  };

  return (
    <div className="group-notices">
      <div className="notice-list">
        {notices.map((notice, index) => (
          <div key={index} className="notice-item">
            <h2>{notice.title}</h2>
            <p>{notice.date} {notice.author}</p>
          </div>
        ))}
      </div>
        <button className="edit-button" onClick={handleEditClick}>
          <img src={NoticeEdit} alt="edit" />
        </button>
    </div>
  );
};

export default GroupNotices;
