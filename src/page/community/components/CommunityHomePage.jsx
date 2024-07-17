import React from "react"
import CommunityHeader from "./CommunityHeader"
import CommunityProfilesList from "./CommunityProfilesList"
import CommunitySearch from "./CommunitySearch"

import CommunityHomeMadeGroup from "./CommunityHomeMadeGroup"

import CommunityHomeKeyword from "./CommunityHomeKeyword"
import CommunityHomeRecommend from "./CommunityHomeRecommend"
import CommunityHomeJoin from "./CommunityHomeJoin"

const CommunityHomePage = () => {
  return (
    <div>
      <CommunityHeader />
      <div className="community-main-view-all">
        <CommunityProfilesList />
        <CommunitySearch />
        <CommunityHomeMadeGroup />
        <CommunityHomeKeyword />
        <CommunityHomeRecommend />
        <CommunityHomeJoin />
      </div>
    </div>
  )
}

export default CommunityHomePage
