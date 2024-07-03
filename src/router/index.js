import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Loading from "../components/Loading"
import Layout from "../layout/Layout"
import CommunityProvider from "../page/community/components/CommunityProvider"
import mypageRouter from "./mypageRouter"

const Main = lazy(() => import("../page/main"))

const Achievement = lazy(() => import("../page/achievement"))
const Community = lazy(() => import("../page/community"))
const Mypage = lazy(() => import("../page/mypage"))
const CreateGroup = lazy(() =>
  import("../page/community/components/CreateGroup")
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...mypageRouter,
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "achievement",
        element: (
          <Suspense fallback={<Loading />}>
            <Achievement />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <CommunityProvider>
            <Suspense fallback={<Loading />}>
              <Community />
            </Suspense>
          </CommunityProvider>
        ),
      },
      {
        path: "mypage",
        element: (
          <Suspense fallback={<Loading />}>
            <Mypage />
          </Suspense>
        ),
      },
      {
        path: "create-group",
        element: (
          <CommunityProvider>
            <Suspense fallback={<Loading />}>
              <CreateGroup />
            </Suspense>
          </CommunityProvider>
        ),
      },
    ],
  },
])

export default router
