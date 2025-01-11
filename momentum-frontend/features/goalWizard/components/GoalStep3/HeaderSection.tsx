import { Description, DialogTitle } from "@headlessui/react";

const HeaderSection = () => {
  return (
    <>
      <DialogTitle className="text-lg font-bold text-gray-900">
        Add Steps for Your Tasks
      </DialogTitle>
      <Description className="text-sm text-gray-600">
        Select a task and add steps. Specify whether each step is one-time or
        recurring.
      </Description>
    </>
  );
};

export default HeaderSection;
