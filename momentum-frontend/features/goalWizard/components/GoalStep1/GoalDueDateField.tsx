import { useAtom } from "jotai";
import { goalDueDateAtom } from "../../state/goalWizardAtoms";
import { Description, Field, Input, Label } from "@headlessui/react";

const GoalDueDateField = () => {
  const [goalDueDate, setGoalDueDate] = useAtom(goalDueDateAtom);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">Due Date</Label>
      <Description className="text-sm/6 text-gray-600">
        When do you want to achieve this goal?
      </Description>
      <Input
        type="date"
        value={goalDueDate}
        onChange={(e) => setGoalDueDate(e.target.value)}
        className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </Field>
  );
};

export default GoalDueDateField;
