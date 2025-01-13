import { atom } from "jotai";

export const currentStepAtom = atom(1);

export const goalNameAtom = atom("");
export const goalDescriptionAtom = atom("");
export const goalDueDateAtom = atom("");
export const goalPriorityAtom = atom("low");
export const goalCategoryAtom = atom("work");

export const tasksAtom = atom<
  Array<{
    name: string;
    description: string;
    dueDate: string;
    steps: Array<{
      name: string;
      type: "one-off" | "recurring";
      dueDate?: string;
      frequency?: "daily" | "weekly" | "monthly";
    }>;
  }>
>([]);

export const newTaskAtom = atom({
  name: "",
  description: "",
  dueDate: "",
  steps: [],
});

// create an atom for the selected task, for the steps
export const selectedTaskIndexAtom = atom<number | null>(0);

// create a derived atom to get the selected task from the tasks atom
export const selectedTaskAtom = atom(
  (get) => {
    const selectedTask = get(selectedTaskIndexAtom);
    const tasks = get(tasksAtom);
    return selectedTask !== null
      ? tasks[selectedTask]
      : {
          name: "",
          description: "",
          dueDate: "",
          steps: [],
        };
  },
  (get, set, task: number) => {
    set(selectedTaskIndexAtom, task);
  }
);

export const selectedTaskStepsAtom = atom(
  (get) => {
    const selectedTaskIndex = get(selectedTaskIndexAtom);
    if (selectedTaskIndex === null) return [];
    const tasks = get(tasksAtom);
    return tasks[selectedTaskIndex]?.steps || [];
  },
  (
    get,
    set,
    updatedSteps: Array<{
      name: string;
      type: "one-off" | "recurring";
      dueDate?: string;
      frequency?: "daily" | "weekly" | "monthly";
    }>
  ) => {
    const selectedTaskIndex = get(selectedTaskIndexAtom);
    if (selectedTaskIndex === null) return; // No task selected
    set(tasksAtom, (prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[selectedTaskIndex] = {
        ...newTasks[selectedTaskIndex],
        steps: updatedSteps,
      };
      return newTasks;
    });
  }
);

export const addStepAtom = atom(
  null,
  (
    get,
    set,
    newStep: {
      name: string;
      type: "one-off" | "recurring";
      dueDate?: string;
      frequency?: "daily" | "weekly" | "monthly";
    }
  ) => {
    if (newStep.name === "") {
      return;
    }
    const selectedTaskIndex = get(selectedTaskIndexAtom);
    if (selectedTaskIndex === null) return;
    set(tasksAtom, (prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[selectedTaskIndex] = {
        ...newTasks[selectedTaskIndex],
        steps: [...newTasks[selectedTaskIndex].steps, newStep],
      };
      return newTasks;
    });
  }
);

export const newStepAtom = atom({
  type: "one-off" as "one-off" | "recurring",
  dueDate: "",
  frequency: "daily" as "daily" | "weekly" | "monthly",
});
