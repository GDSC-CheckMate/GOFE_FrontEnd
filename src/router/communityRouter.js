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
  },
];

export default communityRouter;
