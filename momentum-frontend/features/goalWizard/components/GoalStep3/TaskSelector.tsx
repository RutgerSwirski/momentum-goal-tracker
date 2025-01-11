import { useAtom, useAtomValue } from "jotai";
import {
  selectedTaskAtom,
  selectedTaskIndexAtom,
  tasksAtom,
} from "../../state/goalWizardAtoms";

const TaskSelector = () => {
  const tasks = useAtomValue(tasksAtom);
  const [selectedTask, setSelectedTask] = useAtom(selectedTaskAtom);
  // selected task index
  const selectedTaskIndex = useAtomValue(selectedTaskIndexAtom);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">
        Select a Task
      </label>
      <select
        value={selectedTaskIndex}
        onChange={(e) => setSelectedTask(e.target.value)}
        className="mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        {tasks.map((task, index) => (
          <option key={index} value={index}>
            {task.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskSelector;
