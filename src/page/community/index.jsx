import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommunityItem from "./components/CommunityItem";
// import "../../scss/page/_community.scss"
import { CommunityContext } from "./components/CommunityProvider";
import CommunityHeader from "./components/CommunityHeader";
import Achievement from "../achievement/index";
import CommunityMainPage from "./components/CommunityMainPage";

const Community = () => {
  return (
    <div>
      <CommunityMainPage />
    </div>
  );
};

export default Community;
