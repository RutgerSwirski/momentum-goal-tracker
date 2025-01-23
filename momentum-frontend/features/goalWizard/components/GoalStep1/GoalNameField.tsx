import { useAtom } from "jotai";
import { goalNameAtom } from "../../state/goalWizardAtoms";
import { Field } from "@headlessui/react";
import Label from "@/components/common/Label";
import Description from "@/components/common/Description";
import Input from "@/components/common/Input";

const GoalNameField = () => {
  const [goalName, setGoalName] = useAtom(goalNameAtom);

  return (
    <Field>
      <Label>Goal Name</Label>
      <Description>Make it short and sweet so you can remember it</Description>
      <Input
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        placeholder="e.g. Run a marathon"
      />
    </Field>
  );
};

export default GoalNameField;
