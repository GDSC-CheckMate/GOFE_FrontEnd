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

const CommunityShowFollwers = lazy(() =>
  import("../page/community/components/CommunityShowFollwers")
);
const CommunityShowAddFreind = lazy(() =>
  import("../page/community/components/CommunityShowAddFreind")
);
const CommunityShowProfile = lazy(() =>
  import("../page/community/components/CommunityShowProfile")
);
const ComMyPage = lazy(() => import("../page/community/components/ComMyPage"));
const GroupCreateNotice = lazy(() =>
  import("../page/community/components/GroupCreateNotice")
);

const communityRouter = [
  {
    path: "main",
    element: (
      <Suspense fallback={<Loading />}>
        <ComMyPage />
      </Suspense>
    ),
  },
  {
    path: "home",
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
    path: "communityShowProfile",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowProfile />
      </Suspense>
    ),
  },

  {
    path: "communityShowFollwers",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowFollwers />
      </Suspense>
    ),
  },
  {
    path: "addFreind",
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowAddFreind />
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
        path: "home",
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
      {
        path: "create-notices",
        element: (
          <Suspense fallback={<Loading />}>
            <GroupCreateNotice />
          </Suspense>
        ),
      },
    ],
  },
];

export default communityRouter;
