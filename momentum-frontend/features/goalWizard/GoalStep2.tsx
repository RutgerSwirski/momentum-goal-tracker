import AddTaskForm from "./components/GoalStep2/AddTaskForm";
import ExistingTasksList from "./components/GoalStep2/ExistingTasksList";
import HeaderSection from "./components/GoalStep2/HeaderSection";
import RecommendedTasksList from "./components/GoalStep2/RecommendedTasksList";

const GoalStep2 = () => {
  return (
    <>
      <HeaderSection />

      <div className="w-full mt-4 space-y-6">
        {/* recommended tasks list */}
        <RecommendedTasksList />
        {/* Existing Tasks List */}
        <ExistingTasksList />

        {/* border horizontal */}
        <div className="border-t border-gray-200" />  

        {/* Add New Task Form */}
        <AddTaskForm />
      </div>
    </>
  );
};

export default GoalStep2;
