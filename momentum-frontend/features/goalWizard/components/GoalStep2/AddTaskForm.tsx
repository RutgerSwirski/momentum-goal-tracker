import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import Textarea from "@/components/common/Textarea";
import { Field, Fieldset } from "@headlessui/react";
import { useAtom } from "jotai";
import { newTaskAtom, tasksAtom } from "../../state/goalWizardAtoms";

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
        <Label>Task Name</Label>
        <Input
          value={newTask.name}
          onChange={(e) =>
            setNewTask((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          placeholder="e.g. Run 5km"
        />
      </Field>

      <Field>
        <Label>Description</Label>
        <Textarea
          name="description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder="e.g. Run 5km in under 30 minutes"
          rows={3}
        />
      </Field>

      <Field>
        <Label>Due Date</Label>
        <DatePicker
          selected={newTask.dueDate}
          onChange={(date) =>
            setNewTask((prev) => ({
              ...prev,
              dueDate: date,
            }))
          }
          placeholderText="Select due date"
        />
      </Field>

      <Button onClick={handleAddTask} className="mt-4">
        Add Task
      </Button>
    </Fieldset>
  );
};

export default AddTaskForm;
