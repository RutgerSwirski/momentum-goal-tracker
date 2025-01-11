import { useAtom } from "jotai";
import { newTaskAtom, tasksAtom } from "../../state/goalWizardAtoms";
import { Field, Fieldset, Input, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

const AddTaskForm = () => {
  const [newTask, setNewTask] = useAtom(newTaskAtom);

  const [tasks, setTasks] = useAtom(tasksAtom);

  const handleAddTask = () => {
    // call the add task api
    // update the task list in the atom
    setTasks((prev) => [...prev, newTask]);
    setNewTask({
      name: "",
      description: "",
      dueDate: "",
      steps: [],
    });
  };

  return (
    <Fieldset className="mt-0">
      <Field>
        <Label className="text-sm font-medium text-gray-900">Task Name</Label>
        <Input
          value={newTask.name}
          onChange={(e) =>
            setNewTask((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className={clsx(
            "mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
            "focus:ring-2 focus:ring-blue-400 focus:outline-none"
          )}
          placeholder="e.g. Run 5km"
        />
      </Field>

      <Field>
        <Label className="text-sm font-medium text-gray-900">Description</Label>
        <Textarea
          value={newTask.description}
          onChange={(e) =>
            setNewTask((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder="e.g. Run 5km in under 30 minutes"
          className={clsx(
            "mt-2 block w-full resize-none rounded-lg border-none bg-gray-100 py-2 px-3 text-sm text-gray-800",
            "focus:outline-none focus:ring-2 focus:ring-blue-400"
          )}
          rows={3}
        />
      </Field>

      <Field>
        <Label className="text-sm font-medium text-gray-900">Due Date</Label>
        <Input
          type="date"
          value={newTask.dueDate}
          onChange={(e) =>
            setNewTask((prev) => ({
              ...prev,
              dueDate: e.target.value,
            }))
          }
          className={clsx(
            "mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
            "focus:ring-2 focus:ring-blue-400 focus:outline-none"
          )}
        />
      </Field>

      <button
        onClick={handleAddTask}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Task
      </button>
    </Fieldset>
  );
};

export default AddTaskForm;
