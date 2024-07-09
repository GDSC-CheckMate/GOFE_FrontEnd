// import React, { lazy, Suspense } from "react";
// import Loading from "../components/Loading";

// const CommunityItem = lazy(() =>
//   import("../page/community/components/CommunityItem")
// );
// const CommunityProvider = lazy(() =>
//   import("../page/community/components/CommunityProvider")
// );
// const CreateGroup = lazy(() =>
//   import("../page/community/components/CreateGroup")
// );
// const CommunityMainPage = lazy(() =>
//   import("../page/community/components/CommunityMainPage")
// );
// const CommunityHomePage = lazy(() =>
//   import("../page/community/components/CommunityHomePage")
// );
// const GroupDetailPage = lazy(() =>
//   import("../page/community/components/GroupDetailPage")
// );

// const communityRouter = [
//   {
//     path: "CommunityMainPage",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <CommunityMainPage />
//       </Suspense>
//     ),
//   },
//   {
//     path: "CommunityHomePage",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <CommunityHomePage />
//       </Suspense>
//     ),
//   },
//   {
//     path: "CommunityItem",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <CommunityItem />
//       </Suspense>
//     ),
//   },
//   {
//     path: "CommunityProvider",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <CommunityProvider />
//       </Suspense>
//     ),
//   },
//   {
//     path: "creategroup",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <CreateGroup />
//       </Suspense>
//     ),
//   },
//   {
//     path: "group/:groupId",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <GroupDetailPage />
//       </Suspense>
//     ),
//   },
// ];

// export default communityRouter;
// src/router/communityRouter.js

import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const CommunityItem = lazy(() =>
  import("../page/community/components/CommunityItem")
);
const CommunityProvider = lazy(() =>
  import("../page/community/components/CommunityProvider")
);
const CreateGroup = lazy(() =>
  import("../page/community/components/CreateGroup")
);
const CommunityMainPage = lazy(() =>
  import("../page/community/components/CommunityMainPage")
);
const CommunityHomePage = lazy(() =>
  import("../page/community/components/CommunityHomePage")
);
const GroupDetailPage = lazy(() =>
  import("../page/community/components/GroupDetailPage")
);
const GroupHome = lazy(() => import("../page/community/components/GroupHome"));
const GroupChat = lazy(() => import("../page/community/components/GroupChat"));
const GroupAchievements = lazy(() =>
  import("../page/community/components/GroupAchievements")
);
const GroupNotices = lazy(() =>
  import("../page/community/components/GroupNotices")
);

const communityRouter = [
  {
    path: "CommunityMainPage",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityMainPage />
      </Suspense>
    ),
  },
  {
    path: "CommunityHomePage",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityHomePage />
      </Suspense>
    ),
  },
  {
    path: "CommunityItem",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityItem />
      </Suspense>
    ),
  },
  {
    path: "CommunityProvider",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityProvider />
      </Suspense>
    ),
  },
  {
    path: "creategroup",
    element: (
      <Suspense fallback={<Loading />}>
        <CreateGroup />
      </Suspense>
    ),
  },
  {
    path: "group/:groupId",
    element: (
      <Suspense fallback={<Loading />}>
        <GroupDetailPage />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <GroupHome />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<Loading />}>
            <GroupChat />
          </Suspense>
        ),
      },
      {
        path: "achievements",
        element: (
          <Suspense fallback={<Loading />}>
            <GroupAchievements />
          </Suspense>
        ),
      },
      {
        path: "notices",
        element: (
          <Suspense fallback={<Loading />}>
            <GroupNotices />
          </Suspense>
        ),
      },
    ],
  },
];

export default communityRouter;
