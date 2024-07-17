import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setNewRoutine } from "../redux/routine"

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
  const dispatch = useDispatch()
  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  )

  const handleAddRoutine = () => {
    dispatch(setNewRoutine({ time: "", title: "", recurringDays: [] }))
  }

  return (
    <div className="footer-container">
      {selectedSection === "view1" ? (
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
          <div
            className="footer-item"
            onClick={() => navigate("/community/main")}
          >
            {path === "/community" ? (
              <ActiveCommunityIcon />
            ) : (
              <CommunityIcon />
            )}
          </div>
          <div
            className="footer-item footer-item-right"
            onClick={() => navigate("/mypage")}
          >
            {path === "/mypage" ? <ActiveMypageIcon /> : <MypageIcon />}
          </div>
        </div>
      ) : (
        <div className="footer-routine-view-container">
          <button
            className="footer-routine-view-button"
            onClick={handleAddRoutine}
          >
            목표 만들기
          </button>
        </div>
      )}
    </div>
  )
}

export default Footer
