//src>layout>Layout.jsx
import React from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Footer from "./Footer"

const Layout = () => {
  const location = useLocation()
  // const isMainPage = location.pathname === "/"

  // footer를 안띄우고 싶은 라우팅을 설정
  const { groupId } = useParams()
  useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  )
  const noFooterPaths = ["/", `/group`]

  // 현재 location이랑 같은지 확인
  const showFooter = !noFooterPaths.some((path) => path === location.pathname)

  return (
    <>
      <div
        className={
          showFooter ? "content-container" : "nofooter-content-container"
        }
      >
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
