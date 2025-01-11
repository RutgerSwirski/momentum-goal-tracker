import { useAtomValue } from "jotai";
import { goalNameAtom } from "../../state/goalWizardAtoms";
import { Description, DialogTitle } from "@headlessui/react";

const HeaderSection = () => {
  const newGoalName = useAtomValue(goalNameAtom);
  return (
    <>
      <DialogTitle className="text-lg font-bold text-gray-900">
        Add tasks to your goal: {newGoalName}
      </DialogTitle>
      <Description
        className="mt-2 text-sm text-gray-600"
        id="modal-description"
      >
        Break down your goal into smaller tasks to make it more achievable
      </Description>
    </>
  );
};

export default HeaderSection;
