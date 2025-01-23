import { Field, Fieldset } from "@headlessui/react";
import { useAtom, useSetAtom } from "jotai";
import { addStepAtom, newStepAtom } from "../../state/goalWizardAtoms";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import SelectPicker from "@/components/common/SelectPicker";
import DatePicker from "@/components/common/DatePicker";
import Button from "@/components/common/Button";

const AddStepForm = () => {
  // get the new step atom
  const [newStep, setNewStep] = useAtom(newStepAtom);

  const addStep = useSetAtom(addStepAtom);

  const handleAddStep = () => {
    // add the new step to the list of steps
    // set the new step to an empty object
    addStep({
      name: newStep.name,
      type: newStep.type,
      dueDate: newStep.dueDate,
      frequency: newStep.frequency,
    });

    setNewStep(() => ({
      name: "",
      type: "one-off",
      dueDate: "",
      frequency: "daily",
    }));
  };

  return (
    <Fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Field>
        <Label>Step Name</Label>
        <Input
          value={newStep.name}
          onChange={(e) =>
            setNewStep((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          placeholder="e.g. Apply for 2 Upwork posts a day"
        />
      </Field>

      <Field>
        <Label>Step Type</Label>
        <SelectPicker
          options={[
            { label: "One-off", value: "one-off" },
            { label: "Recurring", value: "recurring" },
          ]}
          value={newStep.type}
          onChange={(e) => setNewStep((prev) => ({ ...prev, type: e }))}
        />
      </Field>

      {newStep.type === "one-off" && (
        <Field>
          <Label>Due Date</Label>
          <DatePicker
            selected={newStep.dueDate}
            onChange={(date) =>
              setNewStep((prev) => ({
                ...prev,
                dueDate: date,
              }))
            }
            placeholderText="Select due date"
          />
        </Field>
      )}
      {newStep.type === "recurring" && (
        <Field>
          <Label>Frequency</Label>
          <SelectPicker
            options={[
              { label: "Daily", value: "daily" },
              { label: "Weekly", value: "weekly" },
              { label: "Monthly", value: "monthly" },
            ]}
            value={newStep.frequency}
            onChange={(e) => setNewStep((prev) => ({ ...prev, frequency: e }))}
          />
        </Field>
      )}
      <Button onClick={handleAddStep} className="mt-4">
        Add Step
      </Button>
    </Fieldset>
  );
};

export default AddStepForm;
