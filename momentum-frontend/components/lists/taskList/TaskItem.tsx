"use client";

import ProgressBar from "@/components/progressBar/ProgressBar";
import { useState } from "react";
import StepList from "../stepList/StepList";
import axiosInstance from "@/utils/axiosInstance";

const TaskItem = ({ task }: { task: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      key={task._id}
      className="border bg-white rounded-lg shadow-sm overflow-hidden"
    >
      {/* Task Header */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50"
      >
        <div className="flex flex-col space-y-2 w-full">
          <h4 className="text-sm font-semibold text-gray-800">{task.name}</h4>
          <p className="text-xs text-gray-600">{task.description}</p>

          <div className="flex items-center space-x-4">
            {/* Progress Bar */}
            <div className="flex-1 max-w-sm">
              <ProgressBar
                completed={(Math.random() * 100).toFixed(0)}
                total={100}
              />
            </div>

            {/* Task Info */}
            <span className="text-xs text-gray-500">{task.status}</span>
            <span className="text-xs text-gray-500">
              {new Date(task.dueDate).toDateString()}
            </span>
            <span className="text-xs text-gray-500">
              {task.priority === "high"
                ? "🔥 High"
                : task.priority === "medium"
                ? "⚠️ Medium"
                : task.priority === "low"
                ? "✅ Low"
                : "None"}
            </span>
            <span className="text-xs text-gray-500">{task.category}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-4 text-sm text-blue-600">
          <button className="hover:underline">Edit</button>
          <button className="hover:underline text-red-500">Delete</button>
        </div>
      </div>

      {/* Step List */}
      {expanded && (
        <div className="bg-gray-50">
          <StepList
            taskId={task._id}
            fetchSteps={(taskId: string) =>
              axiosInstance
                .get(`/tasks/${taskId}/steps`)
                .then((res) => res.data.steps)
            }
          />
        </div>
      )}
    </li>
  );
};

export default TaskItem;
