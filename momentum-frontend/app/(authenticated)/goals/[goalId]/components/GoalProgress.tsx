// components/pages/GoalPage/GoalProgress.jsx

import Card from "@/components/card/Card";
import ProgressBar from "@/components/progressBar/ProgressBar";

const GoalProgress = ({ goalProgress }) => (
  <ProgressBar
    completed={goalProgress.completedTasks + goalProgress.completedSteps}
    total={goalProgress.totalTasks + goalProgress.totalSteps}
  />
);

export default GoalProgress;
