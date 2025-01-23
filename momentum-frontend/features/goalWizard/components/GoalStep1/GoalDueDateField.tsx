import { useAtom } from "jotai";
import { goalDueDateAtom } from "../../state/goalWizardAtoms";
import { Field } from "@headlessui/react";
import Description from "@/components/common/Description";
import DatePicker from "@/components/common/DatePicker";
import Label from "@/components/common/Label";

const GoalDueDateField = () => {
  const [goalDueDate, setGoalDueDate] = useAtom(goalDueDateAtom);

  return (
    <Field>
      <Label>Due Date</Label>
      <Description>When do you want to achieve this goal?</Description>
      <DatePicker
        value={goalDueDate}
        onChange={(date) => setGoalDueDate(date)}
      />
    </Field>
  );
};

export default GoalDueDateField;
