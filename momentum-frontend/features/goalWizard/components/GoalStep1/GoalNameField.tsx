import { useAtom } from "jotai";
import { goalNameAtom } from "../../state/goalWizardAtoms";
import { Description, Field, Input, Label } from "@headlessui/react";

const GoalNameField = () => {
  const [goalName, setGoalName] = useAtom(goalNameAtom);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">Goal Name</Label>
      <Description className="text-sm/6 text-gray-600">
        Make it short and sweet so you can remember it
      </Description>
      <Input
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="e.g. Run a marathon"
      />
    </Field>
  );
};

export default GoalNameField;
