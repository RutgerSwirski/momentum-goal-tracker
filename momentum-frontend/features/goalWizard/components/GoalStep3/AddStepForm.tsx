import { Field, Fieldset, Input, Label } from "@headlessui/react";
import { useAtom, useSetAtom } from "jotai";
import { addStepAtom, newStepAtom } from "../../state/goalWizardAtoms";

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
    <div className="border-t pt-4 space-y-4">
      <Fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field>
          <Label className="text-sm font-medium text-gray-900">Step Name</Label>
          <Input
            value={newStep.name}
            onChange={(e) =>
              setNewStep((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="e.g. Apply for 2 Upwork posts a day"
            className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </Field>

        <Field>
          <Label className="text-sm font-medium text-gray-900">Step Type</Label>
          <select
            value={newStep.type}
            onChange={(e) =>
              setNewStep((prev) => ({
                ...prev,
                type: e.target.value,
              }))
            }
            className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="one-off">One-time</option>
            <option value="recurring">Recurring</option>
          </select>
        </Field>

        {newStep.type === "one-off" && (
          <Field>
            <Label className="text-sm font-medium text-gray-900">
              Due Date
            </Label>
            <Input
              type="date"
              value={newStep.dueDate}
              onChange={(e) =>
                setNewStep((prev) => ({
                  ...prev,
                  dueDate: e.target.value,
                }))
              }
              className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </Field>
        )}
        {newStep.type === "recurring" && (
          <Field>
            <Label className="text-sm font-medium text-gray-900">
              Frequency
            </Label>
            <select
              value={newStep.frequency}
              onChange={(e) =>
                setNewStep((prev) => ({
                  ...prev,
                  frequency: e.target.value,
                }))
              }
              className="mt-1 block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </Field>
        )}
      </Fieldset>

      <button
        onClick={handleAddStep}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Step
      </button>
    </div>
  );
};

export default AddStepForm;
