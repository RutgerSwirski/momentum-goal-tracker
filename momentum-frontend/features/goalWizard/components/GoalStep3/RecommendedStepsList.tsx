import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  addStepAtom,
  selectedTaskAtom,
  selectedTaskIndexAtom,
} from "../../state/goalWizardAtoms";

const RecommendedStepsList = () => {
  const selectedTaskIndex = useAtomValue(selectedTaskIndexAtom);
  const [selectedTask] = useAtom(selectedTaskAtom);
  const { data: recommendedSteps = [] } = useQuery({
    queryKey: ["recommendedSteps", selectedTask?.name || ""],
    queryFn: async () => {
      const response = await axiosInstance.post("/recommendations/steps", {
        task: selectedTask.name,
      });
      return response.data.steps;
    },
    staleTime: Infinity,
    enabled: selectedTaskIndex !== null,
  });

  const addStep = useSetAtom(addStepAtom);

  const handleAddStepToTask = (step: string) => {
    addStep({
      name: step,
      type: "one-off",
    });
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Recommended Steps</h3>
      <ul className="mt-2 max-h-40 space-y-2 overflow-y-auto">
        {recommendedSteps?.map((step: string, index: number) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-50 p-2 rounded-lg disabled:opacity-50"
          >
            <p className="text-sm text-gray-800 truncate">{step}</p>
            <button
              disabled={selectedTask.steps.some((s) => s.name === step)}
              onClick={() => handleAddStepToTask(step)}
              className="text-sm text-blue-500 hover:underline"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedStepsList;
