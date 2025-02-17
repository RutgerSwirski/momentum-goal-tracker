"use client";

import { useQuery } from "@tanstack/react-query";
import StepItem from "./StepItem";
import NewStepModal from "@/features/newStep/NewStepModal";

const StepList = ({ fetchSteps, task }) => {
  const taskId = task._id;

  const { data: steps = [], isLoading } = useQuery({
    queryKey: ["steps", taskId],
    queryFn: () => fetchSteps(taskId),
  });

  if (isLoading) {
    return <div>Loading steps...</div>;
  }

  // if (!steps.length) {
  //   return <div>No steps found</div>;
  // }

  return (
    <div className="flex flex-col space-y-4 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">
          ({steps.length}) Steps for Task
        </h3>

        <NewStepModal />
      </div>
      <ul className="flex flex-col space-y-2">
        {steps.map((step) => (
          <StepItem step={step} key={step._id} />
        ))}
      </ul>
    </div>
  );
};

export default StepList;
