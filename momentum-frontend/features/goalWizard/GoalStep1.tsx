import { Description, DialogTitle, Fieldset } from "@headlessui/react";
import GoalNameField from "./components/GoalStep1/GoalNameField";
import GoalDescriptionField from "./components/GoalStep1/GoalDescriptionField";
import GoalDueDateField from "./components/GoalStep1/GoalDueDateField";
import GoalPriorityField from "./components/GoalStep1/GoalPriorityField";
import GoalCategoryField from "./components/GoalStep1/GoalCategoryField";

const GoalStep1 = () => {
  return (
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
          <GoalNameField />

          <GoalDescriptionField />

          <GoalDueDateField />

          <GoalPriorityField />

          <GoalCategoryField />
        </Fieldset>
      </div>
    </>
  );
};

export default GoalStep1;
