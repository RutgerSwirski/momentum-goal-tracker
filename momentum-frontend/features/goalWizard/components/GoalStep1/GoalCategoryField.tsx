import { useAtom } from "jotai";
import { goalCategoryAtom } from "../../state/goalWizardAtoms";
import SelectPicker from "@/components/common/SelectPicker";
import { Field } from "@headlessui/react";
import Label from "@/components/common/Label";
import Description from "@/components/common/Description";

const GoalCategoryField = () => {
  const [goalCategory, setGoalCategory] = useAtom(goalCategoryAtom);

  return (
    <Field>
      <Label>Category</Label>
      <Description>
        What area of your life does this goal fall under?
      </Description>  
      <SelectPicker
        value={goalCategory}
        onChange={(value) => setGoalCategory(value)}
        options={[
          { value: "health", label: "Health" },
          { value: "career", label: "Career" },
          { value: "finance", label: "Finance" },
          { value: "relationship", label: "Relationship" },
          { value: "personal", label: "Personal" },
        ]}
      />
    </Field>
  );
};

export default GoalCategoryField;
