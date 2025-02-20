import { Button } from "@headlessui/react";

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
    <div className="flex justify-between items-center mt-6 space-x-4">
      {step > 1 && (
        <Button onClick={goToPreviousStep} className="text-sm text-gray-600">
          Previous Step
        </Button>
      )}

      <div className="flex space-x-4">
        {step === 1 && (
          <Button onClick={gotoNextStep} className="text-sm text-gray-600">
            Next Step
          </Button>
        )}

        {step === 2 && (
          <Button onClick={gotoNextStep} className="text-sm text-gray-600">
            + Add Steps to Tasks
          </Button>
        )}

        {(isLastStep || step === 2) && (
          <Button
            onClick={handleCreateGoal}
            className="text-sm bg-primary_teal text-white px-6 py-2 rounded-lg font-medium"
          >
            Create Goal
          </Button>
        )}
      </div>
    </div>
  );
};

export default WizardControls;
