"use client ";

import ProgressBar from "@/components/progressBar/ProgressBar";
import { useState } from "react";
import StepList from "../stepList/StepList";
import axiosInstance from "@/utils/axiosInstance";

const TaskItem = ({ task }: { task: any }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <li
      key={task._id}
      className=" border bg-white last:border-b-0 rounded-lg flex flex-col"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center border-b"
      >
        <div className="flex justify-between items-center cursor-pointer w-full hover:bg-gray-100 p-4 bg-white rounded-lg">
          <div className="flex space-y-8 flex-col w-full">
            <div>
              <h4 className="font-medium">{task.name}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>

            <div className="flex space-x-4 items-center w-full">
              <div className="max-w-xs w-full">
                <ProgressBar
                  completed={(Math.random() * 100).toFixed(0)}
                  total={100}
                />
              </div>

              <span className="text-sm text-gray-600">{task.status}</span>

              <span className="text-sm text-gray-600">
                {new Date(task.dueDate).toDateString()}
              </span>

              <span className="text-sm text-gray-600">
                {task.priority === "high"
                  ? "🔥"
                  : task.priority === "medium"
                  ? "⚠️"
                  : task.priority === "low"
                  ? "low priority"
                  : "✅"}
              </span>

              <span className="text-sm text-gray-600">{task.category}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
      </div>

      {expanded && (
        <StepList
          taskId={task._id}
          fetchSteps={(taskId: string) =>
            axiosInstance
              .get(`/tasks/${taskId}/steps`)
              .then((res) => res.data.steps)
          }
        />
      )}
    </li>
  );
};

export default TaskItem;
