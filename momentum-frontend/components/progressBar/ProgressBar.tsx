const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="flex space-x-2 items-center w-full">
      <span className="text-center text-sm font-medium bg-blue-500 text-white rounded-full px-2 py-1">
        {percentage.toFixed(1)}%
      </span>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
