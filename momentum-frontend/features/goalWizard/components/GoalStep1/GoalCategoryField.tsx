import { useAtom } from "jotai";
import { Description, Field, Label } from "@headlessui/react";
import { goalCategoryAtom } from "../../state/goalWizardAtoms";

const GoalCategoryField = () => {
  const [goalCategory, setGoalCategory] = useAtom(goalCategoryAtom);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">Category</Label>
      <Description className="text-sm/6 text-gray-600">
        What area of your life does this goal fall under?
      </Description>
      <select
        value={goalCategory}
        onChange={(e) => setGoalCategory(e.target.value)}
        className="mt-3 block w-full rounded-lg border bg-gray-100 py-2 px-4 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="fitness">Fitness</option>
        <option value="learning">Learning</option>
        <option value="social">Social</option>
      </select>
    </Field>
  );
};

export default GoalCategoryField;
