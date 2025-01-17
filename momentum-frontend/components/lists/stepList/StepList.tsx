"use client";

import { useQuery } from "@tanstack/react-query";
import StepItem from "./StepItem";

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
    <ul className="flex flex-col space-y-4 p-4 px-8 rounded-lg">
      <h3 className="text-sm font-semibold">
        Steps for Task: {steps[0].taskName} ({steps.length})
      </h3>
      {steps.map((step) => (
        <StepItem step={step} key={step._id} />
      ))}
    </ul>
  );
};

export default StepList;
