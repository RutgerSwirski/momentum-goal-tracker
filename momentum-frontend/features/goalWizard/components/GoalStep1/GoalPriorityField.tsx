import { useAtom } from "jotai";
import { goalPriorityAtom } from "../../state/goalWizardAtoms";
import SelectPicker from "@/components/common/SelectPicker";
import { Field } from "@headlessui/react";
import Label from "@/components/common/Label";
import Description from "@/components/common/Description";

const GoalPriorityField = () => {
  const [goalPriority, setGoalPriority] = useAtom(goalPriorityAtom);

  return (
    <Field>
      <Label>Priority</Label>
      <Description>How important is this goal to you?</Description>
      <SelectPicker
        options={[
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
        ]}
        value={goalPriority}
        onChange={(value) => setGoalPriority(value)}
      />
    </Field>
  );
};

export default GoalPriorityField;
