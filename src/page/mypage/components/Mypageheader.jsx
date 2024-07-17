import React from "react";
import { NavLink } from "react-router-dom";

const Mypageheader = () => {
  return (
    <div>
      <div className="mypage">
        <div className="mypage-root">
          <NavLink
            to="/ShowMypage"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            내정보
          </NavLink>
          <NavLink
            to="/ShowAlarm"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            알림 설정
          </NavLink>
        </div>
        <div className="mypage-root-line" />
      </div>
    </div>
  );
};

export default Mypageheader;
