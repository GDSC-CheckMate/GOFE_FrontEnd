import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as HomeIcon } from "../assets/footer/Home.svg"
import { ReactComponent as ActiveHomeIcon } from "../assets/footer/HomeActive.svg"

import { ReactComponent as AchievementIcon } from "../assets/footer/Achievement.svg"
import { ReactComponent as ActiveAchievementIcon } from "../assets/footer/AchievementActive.svg"

import { ReactComponent as CommunityIcon } from "../assets/footer/Community.svg"
import { ReactComponent as ActiveCommunityIcon } from "../assets/footer/CommunityActive.svg"

import { ReactComponent as MypageIcon } from "../assets/footer/Mypage.svg"
import { ReactComponent as ActiveMypageIcon } from "../assets/footer/MypageActive.svg"

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
        <div className="footer-item" onClick={() => navigate("/achievement")}>
          {path === "/achievement" ? (
            <ActiveAchievementIcon />
          ) : (
            <AchievementIcon />
          )}
        </div>
        <div className="footer-item" onClick={() => navigate("/community")}>
          {path === "/community" ? <ActiveCommunityIcon /> : <CommunityIcon />}
        </div>
        <div
          className="footer-item footer-item-right"
          onClick={() => navigate("/mypage")}
        >
          {path === "/mypage" ? <ActiveMypageIcon /> : <MypageIcon />}
        </div>
      </div>
    </div>
  )
}

export default Footer
