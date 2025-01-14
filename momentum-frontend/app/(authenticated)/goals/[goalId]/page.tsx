"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TaskList from "@/components/lists/TaskList";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import GoalMetadata from "./components/GoalMetadata";
import GoalProgress from "./components/GoalProgress";
import NextStep from "./components/NextStep";

const GoalPage = () => {
  const { goalId } = useParams();

  const {
    data: goal,
    isLoading: goalIsLoading,
    isError: goalIsError,
  } = useQuery({
    queryKey: ["goal", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}`);
      return response.data;
    },
  });

  const {
    data: tasks = [],
    isLoading: tasksIsLoading,
    isError: tasksIsError,
  } = useQuery({
    queryKey: ["tasks", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}/tasks`);
      return response.data.tasks;
    },
  });

  const {
    data: goalProgress,
    isLoading: goalProgressIsLoading,
    isError: progressIsError,
  } = useQuery({
    queryKey: ["goalProgress", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}/progress`);
      return response.data;
    },
  });

  const {
    data: goalNextStep,
    isLoading: goalNextStepIsLoading,
    isError: nextStepIsError,
  } = useQuery({
    queryKey: ["goalNextStep", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}/nextStep`);
      return response.data;
    },
  });

  if (goalIsLoading)
    return <div className="p-4 text-center">Loading goal details...</div>;
  if (goalIsError)
    return (
      <div className="p-4 text-center text-red-500">Failed to load goal.</div>
    );

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        customLabels={{
          "/goals": "Goals",
          [goalId]: goal?.name,
        }}
      />

      {/* Goal Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{goal?.name}</h1>
        <p className="text-gray-500">{goal?.description}</p>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Metadata */}
        <GoalMetadata goal={goal} goalIsLoading={goalIsLoading} />

        {/* Progress */}
        {!goalProgressIsLoading && !progressIsError && (
          <GoalProgress goalProgress={goalProgress} />
        )}

        {/* Next Step */}
        {!goalNextStepIsLoading && !nextStepIsError && (
          <NextStep nextStep={goalNextStep} />
        )}
      </div>

      {/* Task Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {tasksIsLoading ? (
          <div className="p-4 text-center">Loading tasks...</div>
        ) : tasksIsError ? (
          <div className="p-4 text-center text-red-500">
            Failed to load tasks.
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onTaskEdit={(task) => console.log("Edit task", task)}
            onTaskDelete={(taskId) => console.log("Delete task", taskId)}
            fetchSteps={(taskId) =>
              axiosInstance
                .get(`/tasks/${taskId}/steps`)
                .then((res) => res.data.steps)
            }
          />
        )}
      </div>
    </div>
  );
};

export default GoalPage;
