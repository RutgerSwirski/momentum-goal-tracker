const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="flex space-x-2 items-center w-full">
      <span className="text-xs font-medium text-gray-600">
        {percentage.toFixed(1)}%
      </span>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-blue-500 rounded-full h-2 transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
