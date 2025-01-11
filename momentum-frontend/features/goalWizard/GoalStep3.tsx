import {
  Description,
  DialogTitle,
  Field,
  Fieldset,
  Input,
  Label,
} from "@headlessui/react";
import HeaderSection from "./components/GoalStep3/HeaderSection";
import RecommendedStepsList from "./components/GoalStep3/RecommendedStepsList";
import StepsForTask from "./components/GoalStep3/StepsForTask";
import AddStepForm from "./components/GoalStep3/AddStepForm";
import TaskSelector from "./components/GoalStep3/TaskSelector";

const GoalStep3 = () => {
  return (
    <div className="space-y-6">
      <HeaderSection />

      <TaskSelector />

      {/* Task Selector */}
      {/* Recommended Steps */}
      <RecommendedStepsList />

      {/* Steps for Selected Task */}
      <StepsForTask />

      {/* Add New Step */}
      <AddStepForm />
    </div>
  );
};

export default GoalStep3;
