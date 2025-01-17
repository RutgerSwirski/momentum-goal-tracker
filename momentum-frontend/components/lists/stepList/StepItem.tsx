import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const StepItem = ({ step }) => {
  const { mutate: markStepComplete } = useMutation({
    mutationFn: async () =>
      await axiosInstance.put(`/steps/${step._id}`, {
        status: "completed",
      }),
  });

  const { mutate: deleteStep } = useMutation({
    mutationFn: async () =>
      await axiosInstance.put(`/steps/${step._id}`, {
        deleted: true,
      }),
  });

  if (!step) {
    return <div>Loading step...</div>;
  }

  return (
    <li key={step._id} className="p-4 border rounded-lg ">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            onChange={() => markStepComplete()}
            type="checkbox"
            checked={step.status === "completed"}
          />

          <div>
            <h5 className="font-semibold">{step.name}</h5>
            <p className="text-sm text-gray-600">{step.status}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => markStepComplete()}
            className="text-green-500 underline"
          >
            Mark Complete
          </button>
          <button
            onClick={() => deleteStep()}
            className="ml-2 text-red-500 underline"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default StepItem;
