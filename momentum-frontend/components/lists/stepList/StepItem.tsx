"use client";

import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const StepItem = ({ step }) => {
  const { mutate: markStepComplete } = useMutation({
    mutationFn: async () =>
      await axiosInstance.put(`/steps/${step._id}`, {
        status: "completed",
      }),
  });

  const { mutate: deleteStep } = useMutation({
    mutationFn: async () =>
      await axiosInstance.put(`/steps/${step._id}`, {
        deleted: true,
      }),
  });

  if (!step) {
    return <div className="p-4 text-sm text-gray-500">Loading step...</div>;
  }

  return (
    <li
      key={step._id}
      className="p-4 border-b rounded-lg flex justify-between items-center last:border-b-0"
    >
      {/* Step Details */}
      <div className="flex items-center space-x-4">
        <input
          onChange={() => markStepComplete()}
          type="checkbox"
          checked={step.status === "completed"}
          className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-400"
        />

        <div className="flex flex-col space-y-2">
          <h5 className="text-sm font-medium text-gray-800">{step.name}</h5>
          <p
            className={`text-sm ${
              step.status === "completed" ? "text-green-500" : "text-gray-500"
            }`}
          >
            {step.status === "completed" ? "Completed" : "Pending"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 text-sm">
        <button
          onClick={() => markStepComplete()}
          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Mark Complete
        </button>
        <button
          onClick={() => deleteStep()}
          className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default StepItem;
