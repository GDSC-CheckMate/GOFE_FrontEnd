// import React from "react";
// import { Link } from "react-router-dom";

// const CommunityHeader = () => {
//   return (
//     <div>
//       <div className="community-header-container">
//         <div className="community-header-root">
//           <Link to="/CommunityMainPage" className="">
//             My
//           </Link>
//           <Link to="/CommunityHomePage" className="">
//             커뮤홈
//           </Link>
//         </div>
//       </div>
//       <div className="mypage-root-line" />
//     </div>
//   );
// };

// export default CommunityHeader;


// src/page/community/components/CommunityHeader.jsx

import React from "react";
import { Link } from "react-router-dom";

const CommunityHeader = () => {
  return (
    <div>
      <div className="community-header-container">
        <div className="community-header-root">
          <Link to="/community" className="">
            My
          </Link>
          <Link to="/communityhome" className="">
            커뮤홈
          </Link>
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default CommunityHeader;
