"use client";

import { useState } from "react";
import StepList from "@/components/lists/StepList";

const TaskList = ({ tasks, onTaskEdit, onTaskDelete, fetchSteps }) => {
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleTask = (taskId) => {
    const newExpandedState = !expandedTasks[taskId];
    setExpandedTasks((prev) => ({
      ...prev,
      [taskId]: newExpandedState,
    }));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item border-b mb-4 pb-2">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold">{task.name}</h4>
              <p className="text-sm text-gray-600">{task.status}</p>
            </div>
            <div>
              <button
                onClick={() => toggleTask(task._id)}
                className="text-blue-500 underline"
              >
                {expandedTasks[task._id] ? "Collapse" : "Expand"}
              </button>
              <button
                onClick={() => onTaskEdit?.(task)}
                className="ml-2 text-green-500 underline"
              >
                Edit
              </button>
              <button
                onClick={() => onTaskDelete?.(task._id)}
                className="ml-2 text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </div>

          {expandedTasks[task._id] && (
            <StepList taskId={task._id} fetchSteps={fetchSteps} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
