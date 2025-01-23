import { useAtom } from "jotai";
import { goalDescriptionAtom } from "../../state/goalWizardAtoms";
import Label from "@/components/common/Label";
import Description from "@/components/common/Description";
import Textarea from "@/components/common/Textarea";
import { Field } from "@headlessui/react";

const GoalDescriptionField = () => {
  const [goalDescription, setGoalDescription] = useAtom(goalDescriptionAtom);

  return (
    <Field>
      <Label>Description</Label>
      <Description>
        Add more details about your goal to keep you motivated
      </Description>
      <Textarea
        name="goalDescription"
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
