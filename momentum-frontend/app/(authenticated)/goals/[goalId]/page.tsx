"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const GoalPage = () => {
  const { goalId } = useParams();

  const { data: goal, isLoading: goalIsLoading } = useQuery({
    queryKey: ["goal", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}`);
      return response.data;
    },
  });

  // Fetch tasks for the goal
  const { data: tasks = [], isLoading: tasksIsLoading } = useQuery({
    queryKey: ["tasks", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}/tasks`);
      return response.data.tasks;
    },
  });

  // Track expanded tasks
  const [expandedTasks, setExpandedTasks] = useState({});

  // Function to toggle task expansion
  const toggleTask = (taskId) => {
    setExpandedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  if (goalIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrumbs
        customLabels={{
          "/goals": "Goals",
          [goalId]: goal?.name,
        }}
      />
      <h1 className="text-2xl font-bold">{goal?.name}</h1>
      <p className="text-gray-500">{goal?.description}</p>

      <h2 className="text-xl font-bold mt-4">Tasks</h2>
      {tasksIsLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task._id} className="mb-2 border-b pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleTask(task._id)}
                >
                  <span>{task.name}</span>
                  <span>{expandedTasks[task._id] ? "⯆" : "⯈"}</span>
                </div>
                {/* {expandedTasks[task._id] && (
                  <div className="ml-4 mt-2">
                    {stepsIsLoading ? (
                      <div>Loading steps...</div>
                    ) : (
                      <ul className="list-disc pl-5">
                        {steps.map(
                          (step: {
                            _id: string;
                            name: string;
                            status: string;
                            description: string;
                            dueDate: string;
                            notes: string[];
                            order: number;
                            dateCompleted: string;
                            deleted: boolean;
                          }) => (
                            <li key={step._id}>
                              <div>{step.name}</div>
                              <div>{step.description}</div>

                              <div>{step.status}</div>

                              <div>{step.dueDate}</div>

                              <div>{step.notes}</div>

                              <div>{step.order}</div>

                              <div>{step.dateCompleted}</div>

                              <div>{step.deleted}</div>

                              <div>{step._id}</div>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )} */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GoalPage;
