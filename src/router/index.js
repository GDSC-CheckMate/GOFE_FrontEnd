import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Loading from "../components/Loading"
import Layout from "../layout/Layout"

const Main = lazy(() => import("../page/main"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
