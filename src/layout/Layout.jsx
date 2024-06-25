import React from "react"
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  // const isMainPage = location.pathname === "/"

  // 유저정보 모달을 안띄우고 싶은 라우팅을 설정
  // const noUserModalPaths = ["/login", "/info"]

  // 현재 location이랑 같은지 확인
  // const showModal = !noUserModalPaths.includes(location.pathname)

  return (
    <div>
      {/* <Header /> */}

      <Outlet />
    </div>
  )
}

export default Layout
