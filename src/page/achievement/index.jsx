import React from "react";
import Calendar from "./Calendar/CalendarComponent";
import ProgressBar from "./ProgressBar/ProgressBar";
import MonthlyAchievementGraph from "./MonthlyAchievementGraph/MonthlyAchievementGraph";

const Achievement = () => {
  // 예시 데이터, 실제 데이터는 API 호출 등을 통해 동적으로 가져와야 할 수 있습니다.
  const progressValue = 70; // 프로그레스 바 값
  const monthlyData = [
    // 월별 데이터 예시
    { label: "1월", value: 80 },
    { label: "2월", value: 60 },
    { label: "3월", value: 100 },
    { label: "4월", value: 50 },
    { label: "5월", value: 80 },
    { label: "6월", value: 70 },
  ];

  return (
    <div>
      <Calendar />
      <ProgressBar value={progressValue} />
      <MonthlyAchievementGraph data={monthlyData} />
    </div>
  );
};

export default Achievement;
