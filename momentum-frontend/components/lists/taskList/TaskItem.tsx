"use client";

import ProgressBar from "@/components/common/ProgressBar";
import { useState } from "react";
import StepList from "../stepList/StepList";
import axiosInstance from "@/utils/axiosInstance";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const TaskItem = ({ task }: { task: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      key={task._id}
      className="border bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="flex items-center p-4 space-x-6">
        <input
          // onChange={() => markStepComplete()}
          type="checkbox"
          onChange={() => console.log("checked")}
          checked={task.status === "completed"}
          className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-400"
        />
        {/* Task Header */}
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex justify-between items-center cursor-pointer w-full "
        >
          <div className="flex flex-col space-y-6 w-full">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <h4 className="text-sm font-semibold text-gray-800">
                  {task.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {task.description || "Lorem ipsum dolor sit amet"}
                </p>
              </div>

              {/* Actions */}
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-800 border rounded-md" />
            </div>

            <div className="flex md:items-center space-y-4 md:space-x-4 flex-col  md:flex-row">
              {/* Progress Bar */}

              {/* Task Info */}
              <span className="text-xs text-gray-500 border rounded-full bg-gray-100 px-4 py-1 ">
                {task.priority === "high"
                  ? "🔥 High"
                  : task.priority === "medium"
                  ? "⚠️ Medium"
                  : task.priority === "low"
                  ? "✅ Low"
                  : "Low"}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-2 border rounded-full bg-gray-100 px-4 py-1">
                {/* use hero icon calendar for date */}
                <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
                {new Date(task.dueDate).toDateString()}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-2 border rounded-full bg-gray-100 px-4 py-1">
                <CheckCircleIcon className="h-5 w-5 text-gray-500" />

                {task.status}
              </span>
              <span className="text-xs text-gray-500">{task.category}</span>

              <div className="flex flex-1 justify-end">
                <div className="max-w-xs w-full">
                  <ProgressBar completed={task.progress || 0} total={100} />
                </div>
              </div>
            </div>
          </div>
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
