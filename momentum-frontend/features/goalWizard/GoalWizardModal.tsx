"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Modal from "@/components/modal/Modal";
import { DialogPanel } from "@headlessui/react";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import WizardControls from "./components/WizardControls";
import GoalStep1 from "./GoalStep1";
import GoalStep2 from "./GoalStep2";
import GoalStep3 from "./GoalStep3";
import {
  currentStepAtom,
  goalDescriptionAtom,
  goalDueDateAtom,
  goalNameAtom,
  goalPriorityAtom,
  tasksAtom,
} from "./state/goalWizardAtoms";
import { useMutation } from "@tanstack/react-query";
import { createGoalWithTasksAndSteps } from "./services/goalWizardService";

const steps = [GoalStep1, GoalStep2, GoalStep3];

const GoalWizardModal = () => {
  const goalName = useAtomValue(goalNameAtom);
  const goalDescription = useAtomValue(goalDescriptionAtom);
  const goalDueDate = useAtomValue(goalDueDateAtom);
  const goalPriority = useAtomValue(goalPriorityAtom);
  const tasks = useAtomValue(tasksAtom);

  const [step, setStep] = useAtom(currentStepAtom);
  const [isOpen, setIsOpen] = useState(false);

  const isLastStep = step === steps.length;

  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  const CurrentStepComponent = steps[step - 1];

  const mutation = useMutation({
    mutationFn: createGoalWithTasksAndSteps,
    onSuccess: () => {
      setIsOpen(false);
      setStep(1);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleCreateGoal = () => {
    const goalData = {
      name: goalName,
      description: goalDescription,
      dueDate: goalDueDate,
      priority: goalPriority,
      tasks,
    };

    mutation.mutate(goalData);
  };

  return (
    <>
      <PrimaryButton text="Create a new goal" onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <CurrentStepComponent />

          <WizardControls
            step={step}
            gotoNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            handleCreateGoal={handleCreateGoal}
            isLastStep={isLastStep}
          />
        </DialogPanel>
      </Modal>
    </>
  );
};

export default GoalWizardModal;
