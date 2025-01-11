import { useAtom } from "jotai";
import { goalDescriptionAtom } from "../../state/goalWizardAtoms";
import { Description, Field, Label, Textarea } from "@headlessui/react";

const GoalDescriptionField = () => {
  const [goalDescription, setGoalDescription] = useAtom(goalDescriptionAtom);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">Description</Label>
      <Description className="text-sm/6 text-gray-600">
        Add more details about your goal to keep you motivated
      </Description>
      <Textarea
        value={goalDescription}
        onChange={(e) => setGoalDescription(e.target.value)}
        placeholder="e.g. I want to run a marathon in under 4 hours"
        className="mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-900 focus:outline-none"
        rows={3}
      />
    </Field>
  );
};

export default GoalDescriptionField;
