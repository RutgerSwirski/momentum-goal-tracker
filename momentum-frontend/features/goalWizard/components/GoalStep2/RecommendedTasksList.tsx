import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { goalNameAtom, tasksAtom } from "../../state/goalWizardAtoms";

const RecommendedTasksList = () => {
  const newGoalName = useAtomValue(goalNameAtom);

  const { data: recommendedTasks } = useQuery({
    queryKey: ["recommendedTasks", newGoalName],
    queryFn: async () => {
      const response = await axiosInstance.post("/recommendations/tasks", {
        goal: newGoalName,
      });
      return response.data;
    },
    enabled: newGoalName.length > 0,
    staleTime: Infinity,
  });

  const [tasks, setTasks] = useAtom(tasksAtom);

  const onAddTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        name: task,
        description: "",
        dueDate: "",
        steps: [],
      },
    ]);
  };

  if (!recommendedTasks) {
    return null;
  }

  return (
    <div>
      <h3 className="text-md font-semibold text-gray-900">Recommended Tasks</h3>
      <ul className="space-y-2">
        {recommendedTasks?.tasks.map((task, index) => (
          <li
            key={index}
            className={clsx(
              "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm",
              {
                "opacity-50": tasks.some((t) => t.name === task),
              }
            )}
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{task}</p>
            </div>
            <button
              disabled={tasks.some((t) => t.name === task)}
              onClick={() => onAddTask(task)}
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

export default RecommendedTasksList;
