import { useAtom } from "jotai";
import { goalPriorityAtom } from "../../state/goalWizardAtoms";
import { Description, Field, Label } from "@headlessui/react";

const GoalPriorityField = () => {
  const [goalPriority, setGoalPriority] = useAtom(goalPriorityAtom);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">Priority</Label>
      <Description className="text-sm/6 text-gray-600">
        How important is this goal to you?
      </Description>
      <select
        value={goalPriority}
        onChange={(e) => setGoalPriority(e.target.value)}
        className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </Field>
  );
};

export default GoalPriorityField;
