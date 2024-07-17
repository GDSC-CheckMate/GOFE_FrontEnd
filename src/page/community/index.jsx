
import React, { useContext } from "react";

import CommunityMainPage from "./components/CommunityMainPage";
import { Outlet } from "react-router-dom";

const Community = () => {
  return (
    <div>

      <Outlet />

    </div>
  )
}

export default Community;
