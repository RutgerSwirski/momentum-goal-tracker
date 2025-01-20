// components/pages/GoalPage/GoalProgress.jsx

import Card from "@/components/common/Card";
import ProgressBar from "@/components/common/ProgressBar";

const GoalProgress = ({ goalProgress }) => (
  <ProgressBar
    completed={goalProgress.completedTasks + goalProgress.completedSteps}
    total={goalProgress.totalTasks + goalProgress.totalSteps}
  />
);

export default GoalProgress;
