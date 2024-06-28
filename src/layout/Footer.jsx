import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as HomeIcon } from "../assets/Home.svg"
import { ReactComponent as ActiveHomeIcon } from "../assets/HomeActive.svg"

import { ReactComponent as AchievementIcon } from "../assets/Achievement.svg"
import { ReactComponent as ActiveAchievementIcon } from "../assets/AchievementActive.svg"

import { ReactComponent as CommunityIcon } from "../assets/Community.svg"
import { ReactComponent as ActiveCommunityIcon } from "../assets/CommunityActive.svg"

import { ReactComponent as MypageIcon } from "../assets/Mypage.svg"
import { ReactComponent as ActiveMypageIcon } from "../assets/MypageActive.svg"

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className="footer-item footer-item-left"
          onClick={() => navigate("/")}
        >
          {path === "/" ? <ActiveHomeIcon /> : <HomeIcon />}
        </div>
        <div
          className={`footer-item ${path === "/achievement" ? "active" : ""}`}
          onClick={() => navigate("/achievement")}
        >
          {path === "/achievement" ? (
            <ActiveAchievementIcon />
          ) : (
            <AchievementIcon />
          )}
        </div>
        <div
          className={`footer-item ${path === "/community" ? "active" : ""}`}
          onClick={() => navigate("/community")}
        >
          {path === "/community" ? <ActiveCommunityIcon /> : <CommunityIcon />}
        </div>
        <div
          className={`footer-item footer-item-right ${
            path === "/mypage" ? "active" : ""
          }`}
          onClick={() => navigate("/mypage")}
        >
          {path === "/mypage" ? <ActiveMypageIcon /> : <MypageIcon />}
        </div>
      </div>
    </div>
  )
}

export default Footer
