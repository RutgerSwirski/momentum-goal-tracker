"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TaskList from "@/components/lists/taskList/TaskList";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import GoalMetadata from "./components/GoalMetadata";
import NextStep from "./components/NextStep";
import ProgressBar from "@/components/progressBar/ProgressBar";

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
    <div className="container mx-auto flex flex-col space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        customLabels={{
          "/goals": "Goals",
          [goalId]: goal?.name,
        }}
      />

      <div className="flex justify-between items-center">
        {/* Goal Header */}
        <div className=" flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">{goal?.name}</h1>
          <p className="text-gray-500">{goal?.description}</p>
        </div>

        <div className="max-w-sm w-full">
          {/* Progress */}
          {!goalProgressIsLoading && !progressIsError && (
            <ProgressBar
              completed={
                goalProgress.completedTasks + goalProgress.completedSteps
              }
              total={goalProgress.totalTasks + goalProgress.totalSteps}
            />
          )}
        </div>
      </div>

      {/* Metadata */}
      <GoalMetadata goal={goal} goalIsLoading={goalIsLoading} />

      {/* Next Step */}
      {!goalNextStepIsLoading && !nextStepIsError && (
        <NextStep nextStep={goalNextStep} />
      )}

      {/* Task Section */}
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {tasksIsLoading ? (
          <div className="p-4 text-center">Loading tasks...</div>
        ) : tasksIsError ? (
          <div className="p-4 text-center text-red-500">
            Failed to load tasks.
          </div>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default GoalPage;
