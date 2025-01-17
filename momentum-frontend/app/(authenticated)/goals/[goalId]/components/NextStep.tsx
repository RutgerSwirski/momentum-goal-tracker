const NextStep = ({ nextStep }) => (
  <div className="border p-4 rounded-md bg-white shadow-sm flex justify-between items-center">
    <div className="flex flex-col space-y-2">
      <h4 className="text-sm font-semibold text-gray-600 uppercase">
        Next Step
      </h4>
      <div className="space-y-1 ">
        <p className="text-base font-semibold text-gray-800">
          {nextStep.step.name}
        </p>
        {nextStep.step.description && (
          <p className="text-sm text-gray-600">{nextStep.step.description}</p>
        )}
        <p className="text-xs text-gray-500">{nextStep.task.name}</p>
      </div>
    </div>

    <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
      I did it!
    </button>
  </div>
);

export default NextStep;
