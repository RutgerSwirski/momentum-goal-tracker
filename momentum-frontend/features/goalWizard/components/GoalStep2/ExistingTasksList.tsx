import { useAtom, useSetAtom } from "jotai";
import { newTaskAtom, tasksAtom } from "../../state/goalWizardAtoms";

const ExistingTasksList = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const setNewTask = useSetAtom(newTaskAtom);

  const handleEditTask = (index) => {
    const task = tasks[index];
    setNewTask(task);
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-md font-semibold text-gray-900">Your Tasks</h3>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{task.name}</p>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-xs text-gray-500">
                Due: {task.dueDate || "No due date"}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditTask(index)}
                className="text-sm text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingTasksList;
