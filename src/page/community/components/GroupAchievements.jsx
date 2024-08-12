import React from "react";
import GroupAchievementCalendar from "../../achievement/GroupAchievement/GroupAchievementCalendar";
import mockData from "../../achievement/mockData.json";
import GroupAchievementHorizonLine from "../../achievement/GroupAchievement/GroupAchievementHorizonLine";
import GroupAchievementRanking from "../../achievement/GroupAchievement/GroupAchievementRanking";
import GoalComponent from "../../achievement/GroupAchievement/GroupAchievementGoal";
import GroupAchievementGoalProgress from "../../achievement/GroupAchievement/GroupAchievementGoalProgress";

const { achievements } = mockData;

const GroupAchievements = () => {
  const myAchievement = 50; // 내 달성률
  const averageAchievement = 60; // 평균 달성률
  const importance = 80; // 중요도
  const goalPeriod = 100; // 목표 기간
  const achievedDays = 50; // 달성 일수
  const usernickname = "릉딘"; // 사용자 닉네임
  return (
    <div>
      <GroupAchievementCalendar achievements={achievements} />
      <GroupAchievementHorizonLine />

      <GoalComponent
        goalTitle="리액트 강의 다 듣기"
        importance={importance}
        nickname={usernickname}
      />
      <GroupAchievementGoalProgress
        myAchievement={myAchievement}
        averageAchievement={averageAchievement}
        goalPeriod={goalPeriod}
        achievedDays={achievedDays}
      />
      <GroupAchievementRanking
        rankings={[
          { nickname: "용zi찬", percentage: 60 },
          { nickname: "용zi찬", percentage: 60 },
          { nickname: "용zi찬", percentage: 60 },
        ]}
      />
    </div>
  );
};

export default GroupAchievements;
