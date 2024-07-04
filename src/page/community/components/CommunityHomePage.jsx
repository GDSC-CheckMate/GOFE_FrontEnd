import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityProfilesList from "./CommunityProfilesList";
import CommunitySearch from "./CommunitySearch";

const CommunityHomePage = () => {
  return (
    <div>
      <CommunityHeader />
      <CommunityProfilesList />
      <CommunitySearch />
    </div>
  );
};

export default CommunityHomePage;
