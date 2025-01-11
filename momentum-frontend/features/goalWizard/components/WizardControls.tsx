import { Button } from "@headlessui/react";
import clsx from "clsx";

const WizardControls = ({
  step,
  gotoNextStep,
  goToPreviousStep,
  handleCreateGoal,
  isLastStep,
}: {
  step: number;
  gotoNextStep: () => void;
  goToPreviousStep: () => void;
  handleCreateGoal: () => void;
  isLastStep: boolean;
}) => {
  return (
    <div
      className={clsx("flex justify-between mt-6", "space-x-4 items-center")}
    >
      {/* prev step button */}
      {step > 1 && (
        <Button onClick={goToPreviousStep} className="text-sm text-gray-600">
          Previous Step
        </Button>
      )}

      {!isLastStep ? (
        <Button
          className="text-sm bg-primary_teal text-white px-6 py-2 rounded-lg font-medium ml-auto"
          onClick={gotoNextStep}
        >
          Next Step
        </Button>
      ) : (
        <Button
          onClick={handleCreateGoal}
          className="text-sm bg-primary_teal text-white px-6 py-2 rounded-lg font-medium"
        >
          Create Goal
        </Button>
      )}
    </div>
  );
};

export default WizardControls;
