"use client";

import axiosInstance from "@/utils/axiosInstance";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
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
      <div className="flex items-center space-x-4 w-full">
        <input
          onChange={() => markStepComplete()}
          type="checkbox"
          checked={step.status === "completed"}
          className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-400"
        />

        <div className="flex flex-col space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-sm font-medium text-gray-800">{step.name}</h5>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-800 border rounded-md" />
          </div>

          <div className="flex items-center justify-between w-full">
            <p
              className={`text-sm max-w-md truncate ${
                step.status === "completed" ? "text-green-500" : "text-gray-500"
              }`}
            >
              {step.status === "completed" ? "Completed" : "Pending"}
            </p>
            <button
              onClick={() => markStepComplete()}
              className="text-blue-600 w-fit hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              Mark as Complete
            </button>
          </div>
        </div>
      </div>

      {/* Actions
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
      </div> */}
    </li>
  );
};

export default StepItem;
