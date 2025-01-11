import { useAtomValue, useSetAtom } from "jotai";
import {
  selectedTaskAtom,
  selectedTaskIndexAtom,
  tasksAtom,
} from "../../state/goalWizardAtoms";

const StepsForTask = () => {
  // get selected task
  const selectedTaskIndex = useAtomValue(selectedTaskIndexAtom);
  const selectedTask = useAtomValue(selectedTaskAtom);
  const setTasks = useSetAtom(tasksAtom);

  const handleDeleteStep = (taskIndex: number, stepIndex: number) => {
    // delete step from the selected task
    setTasks((prev) =>
      prev.map((task, i) =>
        i === taskIndex
          ? {
              ...task,
              steps: task.steps.filter((_, index) => index !== stepIndex),
            }
          : task
      )
    );
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">
        Steps for: {selectedTask?.name}
      </h3>
      <ul className="mt-2 max-h-40 space-y-2 overflow-y-auto">
        {selectedTask?.steps?.map((step, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
          >
            <div>
              <p className="text-sm text-gray-800">{step.name}</p>
              {step.type === "one-off" && (
                <p className="text-xs text-gray-500">
                  Due: {step.dueDate || "No due date"}
                </p>
              )}
              {step.type === "recurring" && (
                <p className="text-xs text-gray-500">
                  Frequency: {step.frequency}
                </p>
              )}
            </div>
            <button
              onClick={() =>
                selectedTaskIndex !== null &&
                handleDeleteStep(selectedTaskIndex, index)
              }
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepsForTask;
