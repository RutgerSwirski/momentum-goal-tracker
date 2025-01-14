// components/pages/GoalPage/GoalProgress.jsx

import Card from "@/components/card/Card";
import ProgressBar from "@/components/progressBar/ProgressBar";

const GoalProgress = ({ goalProgress }) => (
  <Card title="Goal Progress">
    <ProgressBar
      completed={goalProgress.completedTasks + goalProgress.completedSteps}
      total={goalProgress.totalTasks + goalProgress.totalSteps}
      label="Overall Progress"
    />
    <ProgressBar
      completed={goalProgress.completedTasks}
      total={goalProgress.totalTasks}
      label="Task Progress"
    />
    <ProgressBar
      completed={goalProgress.completedSteps}
      total={goalProgress.totalSteps}
      label="Steps Progress"
    />
  </Card>
);

export default GoalProgress;
