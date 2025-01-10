"use client";

import Modal from "@/components/modal/Modal";
import axiosInstance from "@/utils/axiosInstance";
import {
  Button,
  Description,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";

const NewGoalModal = () => {
  const [newGoal, setNewGoal] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "low",
    category: "work",
    tasks: [],
  });

  const [step, setStep] = useState(1);

  const { data: recommendedTasks } = useQuery({
    queryKey: ["taskRecommendations", newGoal.name],
    queryFn: async () => {
      const response = await axiosInstance.post("/recommendations/tasks", {
        goal: newGoal.name,
      });
      return response.data;
    },
    enabled: newGoal.name.length > 0 && step === 2,
    // dont refetch if data is already available
    staleTime: Infinity,
  });

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    steps: [],
  });

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const [tasks, setTasks] = useState([
    {
      name: "Land first Fiverr gig",
      description: "Create and optimize Fiverr gigs to get noticed",
      dueDate: "",
      steps: [
        {
          name: "Create multiple gigs on Fiverr",
          type: "one-off", // One-time step
          dueDate: "2025-01-15", // Only required for one-off steps
        },
        {
          name: "Apply for 2 Upwork posts a day",
          type: "recurring", // Recurring step
          frequency: "daily", // "daily" | "weekly" | "monthly"
        },
      ],
    },
  ]);

  const { data: recommendedSteps } = useQuery({
    queryKey: ["stepRecommendations", tasks[selectedTaskIndex].name],
    queryFn: async () => {
      const response = await axiosInstance.post("/recommendations/steps", {
        task: tasks[selectedTaskIndex].name,
      });
      return response.data;
    },
    // enabled if task is selected and step is 3
    enabled: tasks[selectedTaskIndex] && step === 3,
    staleTime: Infinity,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleAddStep = () => {
    if (!newStep.name) return alert("Step name is required");
    if (newStep.type === "one-off" && !newStep.dueDate)
      return alert("Please specify a due date for one-time steps");

    setTasks((prev) =>
      prev.map((task, index) =>
        index === selectedTaskIndex
          ? { ...task, steps: [...task.steps, newStep] }
          : task
      )
    );
    setNewStep({
      name: "",
      type: "one-off",
      dueDate: "",
      frequency: "daily",
    }); // Reset new step state
  };

  const handleAddTask = () => {
    setTasks((prev) => [...prev, newTask]);
    setNewTask({
      name: "",
      description: "",
      dueDate: "",
      steps: [],
    });
  };

  const handleEditTask = (index: number) => {
    const task = tasks[index];
    setNewTask(task);
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const [newStep, setNewStep] = useState("");

  const handleDeleteStep = (taskIndex, stepIndex) => {
    setTasks((prev) =>
      prev.map((task, index) =>
        index === taskIndex
          ? { ...task, steps: task.steps.filter((_, i) => i !== stepIndex) }
          : task
      )
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>OPen MOdal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          {step === 1 && (
            <>
              <DialogTitle className="text-lg font-bold text-gray-900">
                Create a new goal
              </DialogTitle>
              <Description
                className="mt-2 text-sm text-gray-600"
                id="modal-description"
              >
                Start by giving your goal a name and a description
              </Description>
              <div className="w-full  mt-4">
                <Fieldset className="space-y-6 rounded-xl ">
                  <Field>
                    <Label className="text-sm/6 font-medium text-gray-900">
                      Goal Name
                    </Label>
                    <Description className="text-sm/6 text-gray-600">
                      Make it short and sweet so you can remember it
                    </Description>

                    <Input
                      value={newGoal.name}
                      onChange={(e) =>
                        setNewGoal((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className={clsx(
                        "mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
                        "focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      )}
                      placeholder="e.g. Run a marathon"
                    />
                  </Field>

                  <Field>
                    <Label className="text-sm/6 font-medium text-gray-900">
                      Description
                    </Label>
                    <Description className="text-sm/6 text-gray-600">
                      Add more details about your goal to keep you motivated
                    </Description>
                    <Textarea
                      //descriptiopn placeholder
                      placeholder="e.g. I want to run a marathon in under 4 hours"
                      className={clsx(
                        "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-900",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                      )}
                      rows={3}
                    />
                  </Field>

                  {/* dueDate */}
                  <Field>
                    <Label className="text-sm/6 font-medium text-gray-900">
                      Due Date
                    </Label>
                    <Description className="text-sm/6 text-gray-600">
                      When do you want to achieve this goal?
                    </Description>
                    <Input
                      type="date"
                      className={clsx(
                        "mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
                        "focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      )}
                    />
                  </Field>

                  {/* priority */}
                  <Field>
                    <Label className="text-sm/6 font-medium text-gray-900">
                      Priority
                    </Label>
                    <Description className="text-sm/6 text-gray-600">
                      How important is this goal to you?
                    </Description>
                    <select
                      className={clsx(
                        "mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
                        "focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      )}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </Field>

                  {/* category */}
                  <Field>
                    <Label className="text-sm/6 font-medium text-gray-900">
                      Category
                    </Label>
                    <Description className="text-sm/6 text-gray-600">
                      What area of your life does this goal fall under?
                    </Description>
                    <select
                      className={clsx(
                        "mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800",
                        "focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      )}
                    >
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                      <option value="fitness">Fitness</option>
                      <option value="learning">Learning</option>
                      <option value="social">Social</option>
                    </select>
                  </Field>
                </Fieldset>
              </div>
            </>
          )}

          {/* step 2 */}
          {step === 2 && (
            <>
              <DialogTitle className="text-lg font-bold text-gray-900">
                Add tasks to your goal: {newGoal.name}
              </DialogTitle>
              <Description
                className="mt-2 text-sm text-gray-600"
                id="modal-description"
              >
                Break down your goal into smaller tasks to make it more
                achievable
              </Description>

              <div className="w-full mt-4 space-y-6">
                {/* recommended tasks list */}
                <div>
                  <h3 className="text-md font-semibold text-gray-900">
                    Recommended Tasks
                  </h3>
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
                          <p className="text-sm font-medium text-gray-900">
                            {task}
                          </p>
                        </div>
                        <button
                          disabled={tasks.some((t) => t.name === task)}
                          onClick={() =>
                            setTasks((prev) => [
                              ...prev,
                              {
                                name: task,
                                description: "",
                                dueDate: "",
                                steps: [],
                              },
                            ])
                          }
                          className="text-sm text-blue-500 hover:underline"
                        >
                          Add
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Existing Tasks List */}
                <div>
                  <h3 className="text-md font-semibold text-gray-900">
                    Your Tasks
                  </h3>
                  <ul className="space-y-2">
                    {tasks.map((task, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {task.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {task.description}
                          </p>
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

                {/* Add New Task Form */}
                <Fieldset className="mt-0">
                  <Field>
                    <Label className="text-sm font-medium text-gray-900">
                      Task Name
                    </Label>
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
                    <Label className="text-sm font-medium text-gray-900">
                      Description
                    </Label>
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
                    <Label className="text-sm font-medium text-gray-900">
                      Due Date
                    </Label>
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
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <DialogTitle className="text-lg font-bold text-gray-900">
                Add Steps for Your Tasks
              </DialogTitle>
              <Description className="text-sm text-gray-600">
                Select a task and add steps. Specify whether each step is
                one-time or recurring.
              </Description>

              {/* Task Selector */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Select a Task
                  </label>
                  <select
                    value={selectedTaskIndex}
                    onChange={(e) =>
                      setSelectedTaskIndex(parseInt(e.target.value))
                    }
                    className="mt-2 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    {tasks.map((task, index) => (
                      <option key={index} value={index}>
                        {task.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Recommended Steps */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Recommended Steps
                  </h3>
                  <ul className="mt-2 max-h-40 space-y-2 overflow-y-auto">
                    {recommendedSteps?.steps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                      >
                        <p className="text-sm text-gray-800 truncate">{step}</p>
                        <button
                          onClick={() =>
                            setTasks((prev) =>
                              prev.map((task, i) =>
                                i === selectedTaskIndex
                                  ? {
                                      ...task,
                                      steps: [
                                        ...task.steps,
                                        { name: step, type: "one-off" },
                                      ],
                                    }
                                  : task
                              )
                            )
                          }
                          className="text-sm text-blue-500 hover:underline"
                        >
                          Add
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Steps for Selected Task */}
              {tasks[selectedTaskIndex] && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Steps for: {tasks[selectedTaskIndex].name}
                  </h3>
                  <ul className="mt-2 max-h-40 space-y-2 overflow-y-auto">
                    {tasks[selectedTaskIndex].steps.map((step, index) => (
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
              )}

              {/* Add New Step */}
              <div className="border-t pt-4 space-y-4">
                <Fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field>
                    <Label className="text-sm font-medium text-gray-900">
                      Step Name
                    </Label>
                    <Input
                      value={newStep.name}
                      onChange={(e) =>
                        setNewStep((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="e.g. Apply for 2 Upwork posts a day"
                      className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </Field>

                  <Field>
                    <Label className="text-sm font-medium text-gray-900">
                      Step Type
                    </Label>
                    <select
                      value={newStep.type}
                      onChange={(e) =>
                        setNewStep((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                      <option value="one-off">One-time</option>
                      <option value="recurring">Recurring</option>
                    </select>
                  </Field>

                  {newStep.type === "one-off" && (
                    <Field>
                      <Label className="text-sm font-medium text-gray-900">
                        Due Date
                      </Label>
                      <Input
                        type="date"
                        value={newStep.dueDate}
                        onChange={(e) =>
                          setNewStep((prev) => ({
                            ...prev,
                            dueDate: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      />
                    </Field>
                  )}
                  {newStep.type === "recurring" && (
                    <Field>
                      <Label className="text-sm font-medium text-gray-900">
                        Frequency
                      </Label>
                      <select
                        value={newStep.frequency}
                        onChange={(e) =>
                          setNewStep((prev) => ({
                            ...prev,
                            frequency: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </Field>
                  )}
                </Fieldset>

                <button
                  onClick={handleAddStep}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Step
                </button>
              </div>
            </div>
          )}

          <div
            className={clsx(
              "flex justify-between mt-6",
              "space-x-4 items-center"
            )}
          >
            <Button
              className="text-sm bg-primary_teal text-white px-6 py-2 rounded-lg font-medium"
              onClick={() => {
                setStep(step + 1);
              }}
            >
              Next Step
            </Button>
            {/* prev step button */}
            {step > 1 && (
              <Button
                onClick={() => {
                  setStep(step - 1);
                }}
                className="text-sm text-gray-600"
              >
                Previous Step
              </Button>
            )}
          </div>
        </DialogPanel>
      </Modal>
    </>
  );
};

export default NewGoalModal;
