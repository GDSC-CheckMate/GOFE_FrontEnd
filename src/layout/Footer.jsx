import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className={`footer-item footer-item-left ${
            path === "/" ? "active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          홈
        </div>
        <div
          className={`footer-item ${path === "/achievement" ? "active" : ""}`}
          onClick={() => navigate("/achievement")}
        >
          성취
        </div>
        <div
          className={`footer-item ${path === "/community" ? "active" : ""}`}
          onClick={() => navigate("/community")}
        >
          커뮤
        </div>
        <div
          className={`footer-item footer-item-right ${
            path === "/mypage" ? "active" : ""
          }`}
          onClick={() => navigate("/mypage")}
        >
          my
        </div>
      </div>
    </div>
  )
}

export default Footer
