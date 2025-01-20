"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TaskList from "@/components/lists/taskList/TaskList";
import ProgressBar from "@/components/progressBar/ProgressBar";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import GoalMetadata from "./components/GoalMetadata";
import NextStep from "./components/NextStep";
import NewTaskModal from "@/features/newTask/NewTaskModal";
import EditGoalModal from "@/features/editGoalModal/EditGoalModal";

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
    return (
      <div className="p-4 text-center text-gray-500">
        Loading goal details...
      </div>
    );
  if (goalIsError)
    return (
      <div className="p-4 text-center text-red-500">Failed to load goal.</div>
    );

  return (
    <div className="container mx-auto space-y-4">
      {/* Breadcrumbs */}
      <Breadcrumbs
        customLabels={{
          "/goals": "Goals",
          [goalId]: goal?.name,
        }}
      />

      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-semibold text-gray-900">{goal?.name}</h1>

          <div className="flex space-x-4">
            <EditGoalModal goal={goal} />

            <NewTaskModal />
          </div>
        </div>
        {goal?.description && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <p className="text-sm text-gray-500">{goal?.description}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-8 col-span-3">
          {/* Metadata Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Goal Information
            </h2>

            <GoalMetadata goal={goal} goalIsLoading={goalIsLoading} />
          </div>

          {/* Task Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
              {/* <NewTaskModal /> */}
              {/* sort by filter */}
              <select className="input">
                <option>Sort by</option>
                <option>Due Date</option>
                <option>Priority</option>
              </select>
            </div>
            {tasksIsLoading ? (
              <div className="p-4 text-center text-gray-500">
                Loading tasks...
              </div>
            ) : tasksIsError ? (
              <div className="p-4 text-center text-red-500">
                Failed to load tasks.
              </div>
            ) : (
              <TaskList tasks={tasks} />
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">
              Progress
            </span>

            <div className="bg-white p-4 rounded-md shadow-sm space-y-4">
              {!goalProgressIsLoading && !progressIsError && (
                <ProgressBar
                  size="md"
                  completed={
                    goalProgress?.completedTasks +
                      goalProgress?.completedSteps || 0
                  }
                  total={
                    goalProgress?.totalTasks + goalProgress?.totalSteps || 1
                  }
                />
              )}
            </div>
          </div>
          {/* Next Step Section */}
          {!goalNextStepIsLoading && !nextStepIsError && (
            <NextStep nextStep={goalNextStep} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalPage;
