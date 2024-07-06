import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityProfilesList from "./CommunityProfilesList";
import CommunitySearch from "./CommunitySearch";
import CommunityMadeGroup from "./CommunityMadeGroup";
import { useNavigate } from "react-router-dom";
import CommunityHomeMadeGroup from "./CommunityHomeMadeGroup";

import CommunityHomeKeyword from "./CommunityHomeKeyword";
import CommunityHomeRecommend from "./CommunityHomeRecommend";
import CommunityHomeJoin from "./CommunityHomeJoin";

const CommunityHomePage = () => {
  return (
    <div>
      <CommunityHeader />
      <CommunityProfilesList />
      <CommunitySearch />
      <CommunityHomeMadeGroup />
      <CommunityHomeKeyword />
      <CommunityHomeRecommend />
      <CommunityHomeJoin />
    </div>
  );
};

export default CommunityHomePage;
