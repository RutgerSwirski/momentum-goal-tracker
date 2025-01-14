"use client";

import { useQuery } from "@tanstack/react-query";

const StepList = ({ taskId, fetchSteps }) => {
  const { data: steps = [], isLoading } = useQuery({
    queryKey: ["steps", taskId],
    queryFn: () => fetchSteps(taskId),
  });

  if (isLoading) {
    return <div>Loading steps...</div>;
  }

  if (!steps.length) {
    return <div>No steps found</div>;
  }

  return (
    <ul className="step-list pl-6">
      {steps.map((step) => (
        <li key={step._id} className="step-item mb-2">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-semibold">{step.name}</h5>
              <p className="text-sm text-gray-600">{step.status}</p>
            </div>
            <div>
              <button className="text-green-500 underline">
                Mark Complete
              </button>
              <button className="ml-2 text-blue-500 underline">Edit</button>
              <button className="ml-2 text-red-500 underline">Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StepList;
